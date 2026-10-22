import React, { useEffect, useRef, useState } from "react";
import { apiInstance } from "./config/apiInstance";

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // New UI States for enhanced UX
  const [isDragging, setIsDragging] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'compact'

  const fileInputRef = useRef(null);

  // Generate object URLs for live local image preview before upload
  useEffect(() => {
    const newPreviews = selectedFiles.map((file) => ({
      name: file.name,
      size: file.size,
      url: URL.createObjectURL(file),
    }));
    setPreviews(newPreviews);

    return () => {
      newPreviews.forEach((p) => URL.revokeObjectURL(p.url));
    };
  }, [selectedFiles]);

  // Fetch all images
  const fetchImages = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await apiInstance.get("/allimg");
      const data = response.data;

      const imageList = Array.isArray(data)
        ? data
        : data.images || data.data || [];

      setImages(imageList);
    } catch (err) {
      console.error("Error fetching images:", err);
      setError("Failed to load gallery images. Please try refreshing.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Keyboard navigation for Lightbox Modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
      if (e.key === "ArrowLeft")
        setLightboxIndex(
          (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
        );
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  // Handle file selection
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 0) {
      setSelectedFiles((prev) => [...prev, ...files]);
      setError("");
      setMessage("");
    }
  };

  // Drag & Drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files || []).filter((file) =>
      file.type.startsWith("image/")
    );
    if (files.length > 0) {
      setSelectedFiles((prev) => [...prev, ...files]);
      setError("");
      setMessage("");
    } else {
      setError("Please drop valid image files only.");
    }
  };

  // Remove a single selected file before uploading
  const removeSelectedFile = (indexToRemove) => {
    setSelectedFiles((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
    if (selectedFiles.length === 1 && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Clear all selected files
  const clearSelectedFiles = () => {
    setSelectedFiles([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Upload images
  const handleUpload = async (event) => {
    event.preventDefault();

    if (selectedFiles.length === 0) {
      setError("Please select at least one image.");
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });

    try {
      setUploading(true);
      setError("");
      setMessage("");

      const response = await apiInstance.post("/upload", formData);
      setMessage(response.data?.message || "Images uploaded successfully!");

      setSelectedFiles([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      await fetchImages();
    } catch (err) {
      console.error("Error uploading images:", err);
      setError(
        err.response?.data?.message || "Image upload failed. Please try again."
      );
    } finally {
      setUploading(false);
    }
  };

  // Get the image URL from each object
  const getImageUrl = (image) => {
    if (typeof image === "string") return image;
    return (
      image.url ||
      image.imageUrl ||
      image.image ||
      image.imageURL ||
      image.secure_url ||
      image.path ||
      ""
    );
  };

  const getImageName = (image, index) => {
    if (typeof image === "object" && image !== null) {
      return image.originalName || image.name || `Masterpiece #${index + 1}`;
    }
    return `Masterpiece #${index + 1}`;
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1048576).toFixed(2)} MB`;
  };

  const copyToClipboard = (url, index, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Filtered images based on search query
  const filteredImages = images.filter((img, idx) =>
    getImageName(img, idx).toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#060609] text-zinc-100 selection:bg-violet-500 selection:text-white">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-48 left-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[140px]" />
        <div className="absolute top-1/3 -right-32 h-[450px] w-[450px] rounded-full bg-fuchsia-600/10 blur-[130px]" />
        <div className="absolute -bottom-48 left-1/3 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[140px]" />
      </div>

      {/* Sticky Glass Header */}
      <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-[#060609]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-600 shadow-lg shadow-violet-500/25">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white">
                Img
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Nest
                </span>
              </h1>
              <p className="text-xs text-zinc-400">Cloud Visual Vault</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-300 shadow-inner shadow-violet-500/10">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
              {images.length} {images.length === 1 ? "Asset" : "Assets"} Stored
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        {/* Hero Section */}
        <section className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-violet-300 backdrop-blur-md">
            <span className="text-violet-400">✦</span> Next-Gen Media Workspace
          </div>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Every picture tells a{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              vivid story.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:mx-0 mx-auto">
            Drag, drop, and curate your high-resolution visuals in one seamless
            sanctuary. Instant previews, smart search, and full-screen studio
            inspection built right in.
          </p>
        </section>

        {/* Studio Upload Section */}
        <section className="relative mb-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 shadow-2xl backdrop-blur-2xl sm:p-10">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                Upload Studio
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Drop your files below or browse from your device.
              </p>
            </div>

            {selectedFiles.length > 0 && (
              <button
                type="button"
                onClick={clearSelectedFiles}
                className="text-xs font-medium text-zinc-400 transition hover:text-rose-400"
              >
                Clear all ({selectedFiles.length})
              </button>
            )}
          </div>

          <form onSubmit={handleUpload}>
            {/* Interactive Dropzone */}
            <label
              htmlFor="images"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`group relative flex min-h-56 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-300 ${
                isDragging
                  ? "scale-[1.01] border-violet-400 bg-violet-500/15 shadow-2xl shadow-violet-500/20"
                  : "border-zinc-700/80 bg-[#0b0b10]/60 hover:border-violet-500/60 hover:bg-violet-500/[0.04]"
              }`}
            >
              <div
                className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 text-violet-300 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:text-white ${
                  isDragging ? "scale-110 animate-bounce" : ""
                }`}
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>

              <p className="text-base font-semibold text-zinc-200">
                {isDragging ? (
                  <span className="text-violet-300">
                    Release to drop your images here!
                  </span>
                ) : (
                  <>
                    Drag & drop your images here, or{" "}
                    <span className="text-violet-400 underline decoration-violet-500/40 underline-offset-4 group-hover:text-violet-300">
                      browse files
                    </span>
                  </>
                )}
              </p>

              <p className="mt-2 text-xs text-zinc-500">
                Supports PNG, JPG, JPEG, WEBP, GIF • Multiple files allowed
              </p>

              <input
                ref={fileInputRef}
                id="images"
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            {/* Live Visual Previews of Selected Files */}
            {previews.length > 0 && (
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Ready to upload ({previews.length})
                  </span>
                  <span className="text-xs text-zinc-500">
                    Total:{" "}
                    {formatSize(
                      previews.reduce((acc, item) => acc + item.size, 0)
                    )}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {previews.map((file, index) => (
                    <div
                      key={`${file.name}-${index}`}
                      className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/90"
                    >
                      <div className="aspect-square w-full overflow-hidden bg-zinc-950">
                        <img
                          src={file.url}
                          alt={file.name}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => removeSelectedFile(index)}
                        title="Remove image"
                        className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/75 text-zinc-300 backdrop-blur-md transition hover:bg-rose-500 hover:text-white"
                      >
                        ✕
                      </button>

                      <div className="p-2">
                        <p className="truncate text-xs font-medium text-zinc-200">
                          {file.name}
                        </p>
                        <p className="text-[10px] text-zinc-500">
                          {formatSize(file.size)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Status Alerts */}
            {error && (
              <div
                role="alert"
                className="mt-5 flex items-center justify-between rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">⚠️</span>
                  <span>{error}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setError("")}
                  className="text-rose-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
            )}

            {message && (
              <div
                role="status"
                className="mt-5 flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">✨</span>
                  <span>{message}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMessage("")}
                  className="text-emerald-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Submit Bar */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div className="text-xs text-zinc-500">
                {selectedFiles.length > 0
                  ? `${selectedFiles.length} image(s) queued for cloud storage`
                  : "Select or drag images above to begin"}
              </div>

              <button
                type="submit"
                disabled={uploading || selectedFiles.length === 0}
                className="relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:from-violet-500 hover:to-fuchsia-500 hover:shadow-violet-500/40 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
              >
                {uploading ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Uploading to Vault...
                  </>
                ) : (
                  <>
                    <span>Upload to Gallery</span>
                    <span className="rounded-md bg-white/20 px-1.5 py-0.5 text-xs">
                      {selectedFiles.length}
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>
        </section>

        {/* Gallery Section */}
        <section>
          {/* Gallery Toolbar */}
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Curated Gallery
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Click any image to inspect in full-screen studio view.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 sm:w-64 sm:flex-initial">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search images..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-2 pl-9 pr-4 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-violet-500 focus:bg-white/[0.07]"
                />
                <svg
                  className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-zinc-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Grid Density Toggle */}
              <div className="flex rounded-xl border border-white/10 bg-white/[0.03] p-1">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                    viewMode === "grid"
                      ? "bg-violet-600 text-white shadow"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Comfort
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("compact")}
                  className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                    viewMode === "compact"
                      ? "bg-violet-600 text-white shadow"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Compact
                </button>
              </div>

              {/* Refresh Button */}
              <button
                type="button"
                onClick={fetchImages}
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-violet-500/50 hover:bg-white/[0.08] hover:text-white disabled:opacity-50"
              >
                <span className={loading ? "animate-spin" : ""}>↻</span>
                <span>{loading ? "Syncing..." : "Refresh"}</span>
              </button>
            </div>
          </div>

          {/* Loading Skeleton */}
          {loading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]"
                >
                  <div className="h-64 animate-pulse bg-white/[0.05]" />
                  <div className="p-4 space-y-2">
                    <div className="h-4 w-2/3 animate-pulse rounded bg-white/[0.05]" />
                    <div className="h-3 w-1/3 animate-pulse rounded bg-white/[0.03]" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredImages.length === 0 ? (
            /* Empty State */
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.01] px-6 py-24 text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] text-4xl shadow-inner">
                🖼️
              </div>
              <h4 className="text-xl font-bold text-white">
                {searchQuery ? "No matching images found" : "Your vault is empty"}
              </h4>
              <p className="mt-2 max-w-sm text-sm text-zinc-500">
                {searchQuery
                  ? `We couldn't find any image matching "${searchQuery}". Try clearing your search filter.`
                  : "Upload your first batch of images using the studio dropzone above to populate your personal gallery."}
              </p>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="mt-5 rounded-xl bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20"
                >
                  Reset Search
                </button>
              )}
            </div>
          ) : (
            /* Image Cards Grid */
            <div
              className={`grid gap-6 ${
                viewMode === "compact"
                  ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              }`}
            >
              {filteredImages.map((image, index) => {
                const imageUrl = getImageUrl(image);
                const imageName = getImageName(image, index);

                return (
                  <article
                    key={image._id || image.id || imageUrl || index}
                    onClick={() => imageUrl && setLightboxIndex(index)}
                    className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101017] transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-950/40"
                  >
                    <div
                      className={`relative overflow-hidden bg-zinc-950 ${
                        viewMode === "compact" ? "h-48" : "h-64"
                      }`}
                    >
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={imageName}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs text-zinc-600">
                          Image URL unavailable
                        </div>
                      )}

                      {/* Top Badge */}
                      <div className="absolute top-3 left-3 rounded-lg bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-zinc-300 backdrop-blur-md">
                        #{index + 1}
                      </div>

                      {/* Quick Action Overlay on Hover */}
                      {imageUrl && (
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <div className="flex items-center justify-between gap-2">
                            <button
                              type="button"
                              onClick={(e) =>
                                copyToClipboard(imageUrl, index, e)
                              }
                              className="flex-1 rounded-xl border border-white/15 bg-white/10 py-2 text-xs font-medium text-white backdrop-blur-md transition hover:bg-white/20"
                            >
                              {copiedIndex === index
                                ? "✓ Copied Link"
                                : "Copy URL"}
                            </button>

                            <a
                              href={imageUrl}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              title="Open original in new tab"
                              className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-xs text-white backdrop-blur-md transition hover:bg-violet-600"
                            >
                              ↗
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Footer */}
                    <div className="flex items-center justify-between gap-2 border-t border-white/[0.06] bg-[#101017] px-4 py-3">
                      <p className="truncate text-sm font-medium text-zinc-200 group-hover:text-violet-300 transition-colors">
                        {imageName}
                      </p>
                      <span className="shrink-0 text-[11px] text-zinc-500">
                        Inspect
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </main>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl animate-fadeIn"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg text-white transition hover:bg-rose-500"
          >
            ✕
          </button>

          {/* Previous Button */}
          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  (prev) =>
                    (prev - 1 + filteredImages.length) % filteredImages.length
                );
              }}
              className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white transition hover:bg-violet-600 md:left-8"
            >
              ←
            </button>
          )}

          {/* Main Lightbox Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[90vh] max-w-5xl flex-col items-center overflow-hidden rounded-2xl border border-white/15 bg-[#0e0e14] shadow-2xl"
          >
            <div className="relative flex max-h-[75vh] w-full items-center justify-center bg-black">
              <img
                src={getImageUrl(filteredImages[lightboxIndex])}
                alt={getImageName(filteredImages[lightboxIndex], lightboxIndex)}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="flex w-full flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 py-4">
              <div>
                <h4 className="text-base font-semibold text-white">
                  {getImageName(filteredImages[lightboxIndex], lightboxIndex)}
                </h4>
                <p className="text-xs text-zinc-400">
                  Image {lightboxIndex + 1} of {filteredImages.length}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={(e) =>
                    copyToClipboard(
                      getImageUrl(filteredImages[lightboxIndex]),
                      lightboxIndex,
                      e
                    )
                  }
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-200 transition hover:bg-white/15"
                >
                  {copiedIndex === lightboxIndex ? "✓ Copied!" : "Copy Link"}
                </button>
                <a
                  href={getImageUrl(filteredImages[lightboxIndex])}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-violet-500"
                >
                  Open Original ↗
                </a>
              </div>
            </div>
          </div>

          {/* Next Button */}
          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
              }}
              className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white transition hover:bg-violet-600 md:right-8"
            >
              →
            </button>
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t border-white/[0.08] bg-[#060609]/80 px-5 py-8 text-center text-xs text-zinc-500">
        <p>
          <span className="font-semibold text-zinc-300">ImgNest</span> · Crafted
          with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default App;