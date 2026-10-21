import React, { useEffect, useRef, useState } from "react";
import { apiInstance } from "./config/apiInstance";

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const fileInputRef = useRef(null);

  // Fetch all images
  const fetchImages = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await apiInstance.get("/allimg");

      // Adjust this according to your backend response structure.
      const data = response.data;

      const imageList = Array.isArray(data)
        ? data
        : data.images || data.data || [];

      setImages(imageList);
    } catch (err) {
      console.error("Error fetching images:", err);

      setError(
        err.response?.data?.message ||
          "Unable to load images. Please check your backend.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Handle file selection
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files || []);

    setSelectedFiles(files);
    setError("");
    setMessage("");
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
        err.response?.data?.message || "Image upload failed. Please try again.",
      );
    } finally {
      setUploading(false);
    }
  };

  // Get the image URL from each object.
  // Update these property names to match your backend response.
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

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#09090b]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Pixel<span className="text-violet-500">Vault</span>
            </h1>

            <p className="mt-1 text-sm text-zinc-400">
              Your personal image gallery
            </p>
          </div>

          <div className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            {images.length} {images.length === 1 ? "Image" : "Images"}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        {/* Hero Section */}
        <section className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Your creative space
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Every picture tells a story.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            Upload your favorite pictures and keep them organized in one
            beautiful place. Your gallery updates whenever you upload new
            images.
          </p>
        </section>

        {/* Upload Section */}
        <section className="mb-12 rounded-2xl border border-white/10 bg-[#121216] p-5 shadow-2xl sm:p-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Upload your images</h3>

            <p className="mt-2 text-sm text-zinc-400">
              Select one or multiple images from your device.
            </p>
          </div>

          <form onSubmit={handleUpload}>
            <label
              htmlFor="images"
              className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-zinc-700 bg-white/2 p-6 text-center transition hover:border-violet-500 hover:bg-violet-500/5"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15 text-3xl text-violet-400">
                ↑
              </div>

              <p className="font-medium">Click to browse your images</p>

              <p className="mt-2 text-sm text-zinc-500">PNG, JPG, JPEG, WEBP</p>

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

            {/* Selected Files */}
            {selectedFiles.length > 0 && (
              <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="mb-3 text-sm font-medium text-zinc-300">
                  Selected files ({selectedFiles.length})
                </p>

                <div className="space-y-2">
                  {selectedFiles.map((file, index) => (
                    <div
                      key={`${file.name}-${index}`}
                      className="flex items-center justify-between gap-3 text-sm"
                    >
                      <span className="truncate text-zinc-300">
                        {file.name}
                      </span>

                      <span className="shrink-0 text-zinc-500">
                        {(file.size / 1024).toFixed(1)} KB
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            {error && (
              <p
                role="alert"
                className="mt-4 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400"
              >
                {error}
              </p>
            )}

            {message && (
              <p
                role="status"
                className="mt-4 rounded-lg border border-green-500/20 bg-green-500/10 p-3 text-sm text-green-400"
              >
                {message}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={uploading || selectedFiles.length === 0}
                className="rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {uploading ? "Uploading..." : "Upload Images"}
              </button>

              <span className="text-sm text-zinc-500">
                {selectedFiles.length > 0
                  ? `${selectedFiles.length} file(s) ready`
                  : "No files selected"}
              </span>
            </div>
          </form>
        </section>

        {/* Gallery Section */}
        <section>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">Your Gallery</h3>

              <p className="mt-2 text-sm text-zinc-400">
                All your uploaded images in one place.
              </p>
            </div>

            <button
              type="button"
              onClick={fetchImages}
              disabled={loading}
              className="rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-violet-500 hover:text-white disabled:opacity-50"
            >
              {loading ? "Loading..." : "Refresh Gallery ↻"}
            </button>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-72 animate-pulse rounded-2xl border border-white/5 bg-white/5"
                />
              ))}
            </div>
          ) : images.length === 0 ? (
            /* Empty State */
            <div className="rounded-2xl border border-dashed border-white/10 py-20 text-center">
              <div className="mb-4 text-5xl">🖼️</div>

              <h4 className="text-lg font-semibold">No images yet</h4>

              <p className="mt-2 text-sm text-zinc-500">
                Upload your first image to get started.
              </p>
            </div>
          ) : (
            /* Image Cards */
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {images.map((image, index) => {
                const imageUrl = getImageUrl(image);

                return (
                  <article
                    key={image._id || image.id || imageUrl || index}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-[#121216] transition duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-950/20"
                  >
                    <div className="relative h-64 overflow-hidden bg-zinc-900">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={
                            image.originalName ||
                            image.name ||
                            `Gallery image ${index + 1}`
                          }
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-sm text-zinc-500">
                          Image URL not found
                        </div>
                      )}

                      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-4 pt-12">
                        <p className="truncate text-sm font-medium text-white">
                          {image.originalName ||
                            image.name ||
                            `Image ${index + 1}`}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 p-4">
                      <span className="text-xs text-zinc-500">
                        Image #{index + 1}
                      </span>

                      {imageUrl && (
                        <a
                          href={imageUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-zinc-300 transition hover:border-violet-500 hover:text-white"
                        >
                          View Full Image ↗
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </main>

      <footer className="mt-16 border-t border-white/10 px-5 py-6 text-center text-sm text-zinc-500">
        PixelVault · Built with React and Tailwind CSS
      </footer>
    </div>
  );
};

export default App;
