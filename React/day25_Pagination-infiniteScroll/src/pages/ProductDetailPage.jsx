import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";
import {
  ArrowLeft,
  ShoppingCart,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Package,
  Barcode,
  Tag,
  CalendarDays,
  Weight,
  Ruler,
  CheckCircle,
  XCircle,
  AlertCircle,
  Minus,
  Plus,
} from "lucide-react";
import InfiniteProducts from "../components/InfiniteProducts";

const ProductDetailPage = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Fetch product details using the dynamic product ID
  useEffect(() => {
    const getProduct = async () => {
      try {
        setIsPending(true);
        setError("");

        const res = await axios.get(
          `https://dummyjson.com/products/${productId}`,
        );

        setProduct(res.data);
        setSelectedImage(0);
        setQuantity(1);
      } catch (error) {
        console.error("Product API error:", error);

        setError(
          error.response?.status === 404
            ? "Product not found."
            : "Failed to load product details. Please try again.",
        );
      } finally {
        setIsPending(false);
      }
    };

    getProduct();
  }, [productId]);

  // Loading UI
  if (isPending) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-violet-600" />

          <p className="text-sm font-medium text-gray-500">
            Loading product details...
          </p>
        </div>
      </div>
    );
  }

  // Error UI
  if (error || !product) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <AlertCircle size={48} className="mb-4 text-red-500" />

        <h2 className="text-2xl font-bold text-gray-800">
          {error || "Product not found"}
        </h2>

        <p className="mt-2 text-gray-500">
          We couldn't find the product you're looking for.
        </p>

        <Link
          to="/"
          className="mt-6 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const {
    id,
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    sku,
    weight,
    dimensions,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    returnPolicy,
    minimumOrderQuantity,
    images,
    thumbnail,
    tags,
    reviews,
    meta,
  } = product;

  // Calculate the price after discount
  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2,
  );

  const originalPrice = Number(price).toFixed(2);

  const productImages =
    images?.length > 0 ? images : thumbnail ? [thumbnail] : [];

  const isInStock = stock > 0;

  const formatDate = (date) => {
    if (!date) return "Not available";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatRating = (value) => Number(value || 0).toFixed(1);

  const averageReviewRating =
    reviews?.length > 0
      ? reviews.reduce((total, review) => total + review.rating, 0) /
        reviews.length
      : 0;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Back Button */}
        <Link
          to="/product"
          className="mb-6 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-gray-600 transition hover:text-violet-600"
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Product Images */}
          <div className="h-fit rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
            <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-xl bg-gray-50 sm:h-[440px]">
              {productImages.length > 0 ? (
                <img
                  src={productImages[selectedImage]}
                  alt={title}
                  className="h-full w-full object-contain p-4 transition duration-300 hover:scale-105"
                />
              ) : (
                <Package size={80} className="text-gray-300" />
              )}

              {discountPercentage > 0 && (
                <span className="absolute left-4 top-4 rounded-lg bg-red-500 px-3 py-2 text-sm font-bold text-white shadow-sm">
                  {discountPercentage.toFixed(2)}% OFF
                </span>
              )}

              <span
                className={`absolute right-4 top-4 rounded-lg px-3 py-2 text-xs font-bold ${
                  isInStock
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {availabilityStatus}
              </span>
            </div>

            {/* Image Thumbnails */}
            {productImages.length > 1 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {productImages.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`h-20 w-20 overflow-hidden rounded-xl border-2 bg-gray-50 p-1 transition ${
                      selectedImage === index
                        ? "border-violet-600"
                        : "border-gray-200 hover:border-violet-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${title} ${index + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Product ID */}
            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-500">
              <span>Product ID</span>
              <span className="font-semibold text-gray-800">#{id}</span>
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
              {/* Brand and Category */}
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-violet-700">
                  {category}
                </span>

                {brand && (
                  <span className="text-sm font-medium text-gray-500">
                    Brand: {brand}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl">
                {title}
              </h1>

              {/* Rating */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-3 py-2">
                  <Star size={17} className="fill-amber-400 text-amber-400" />

                  <span className="font-bold text-gray-800">
                    {formatRating(rating)}
                  </span>
                </div>

                <span className="text-sm text-gray-500">
                  {reviews?.length || 0} customer reviews
                </span>
              </div>

              {/* Price */}
              <div className="mt-6 border-b border-gray-100 pb-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-3xl font-extrabold text-gray-900">
                    ${discountedPrice}
                  </span>

                  {discountPercentage > 0 && (
                    <>
                      <span className="text-lg text-gray-400 line-through">
                        ${originalPrice}
                      </span>

                      <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-bold text-green-700">
                        Save {discountPercentage.toFixed(2)}%
                      </span>
                    </>
                  )}
                </div>

                <p className="mt-2 text-xs text-gray-500">
                  Prices are displayed in USD, as provided by the API.
                </p>
              </div>

              {/* Description */}
              <div className="pt-5">
                <h2 className="mb-2 text-lg font-bold text-gray-900">
                  Product Description
                </h2>

                <p className="text-sm leading-7 text-gray-600">{description}</p>
              </div>

              {/* Stock */}
              <div className="mt-5 flex items-center gap-3">
                {isInStock ? (
                  <CheckCircle size={20} className="text-green-600" />
                ) : (
                  <XCircle size={20} className="text-red-500" />
                )}

                <p
                  className={`text-sm font-semibold ${
                    isInStock ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {isInStock ? `${stock} units available` : "Out of stock"}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="mt-6">
                <label className="mb-3 block text-sm font-bold text-gray-800">
                  Quantity
                </label>

                <div className="flex w-fit items-center overflow-hidden rounded-xl border border-gray-200">
                  <button
                    type="button"
                    disabled={quantity <= 1}
                    onClick={() =>
                      setQuantity((current) => Math.max(1, current - 1))
                    }
                    className="p-3 text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="min-w-12 text-center font-bold text-gray-800">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    disabled={!isInStock || quantity >= stock}
                    onClick={() =>
                      setQuantity((current) => Math.min(stock, current + 1))
                    }
                    className="p-3 text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {minimumOrderQuantity > 1 && (
                  <p className="mt-2 text-xs text-gray-500">
                    Minimum order quantity: {minimumOrderQuantity}
                  </p>
                )}
              </div>

              {/* Add to Cart Button */}
              <button
                type="button"
                disabled={!isInStock}
                onClick={() => {
                  console.log("Add to cart:", {
                    productId: id,
                    title,
                    quantity,
                    unitPrice: Number(discountedPrice),
                  });
                }}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-violet-600 px-5 py-4 font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none"
              >
                <ShoppingCart size={21} />

                {isInStock ? "Add to Cart" : "Out of Stock"}
              </button>

              <p className="mt-3 text-center text-xs text-gray-400">
                Product information provided by DummyJSON
              </p>
            </div>

            {/* Delivery, Return and Warranty */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4">
                <Truck className="shrink-0 text-violet-600" size={23} />

                <div>
                  <h3 className="text-sm font-bold text-gray-800">Shipping</h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {shippingInformation || "Information unavailable"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4">
                <RotateCcw className="shrink-0 text-violet-600" size={23} />

                <div>
                  <h3 className="text-sm font-bold text-gray-800">Returns</h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {returnPolicy || "Information unavailable"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4">
                <ShieldCheck className="shrink-0 text-violet-600" size={23} />

                <div>
                  <h3 className="text-sm font-bold text-gray-800">Warranty</h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {warrantyInformation || "Information unavailable"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Product Information */}
        <section className="mt-10 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-violet-100 p-3">
              <Package size={24} className="text-violet-600" />
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-gray-900">
                Product Specifications
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Complete technical information about this product.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {[
              ["Product ID", id],
              ["Product Name", title],
              ["Brand", brand],
              ["Category", category],
              ["SKU", sku],
              ["Barcode", meta?.barcode],
              ["Price", `$${originalPrice}`],
              ["Discount", `${discountPercentage}%`],
              ["Rating", `${formatRating(rating)} / 5`],
              ["Available Stock", stock],
              ["Availability", availabilityStatus],
              ["Minimum Order Quantity", minimumOrderQuantity],
              ["Weight", `${weight} units`],
              ["Width", `${dimensions?.width} units`],
              ["Height", `${dimensions?.height} units`],
              ["Depth", `${dimensions?.depth} units`],
              ["Created At", formatDate(meta?.createdAt)],
              ["Last Updated", formatDate(meta?.updatedAt)],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-start justify-between gap-4 border-b border-gray-100 py-4"
              >
                <span className="text-sm text-gray-500">{label}</span>

                <span className="max-w-[60%] break-words text-right text-sm font-semibold text-gray-800">
                  {value ?? "Not available"}
                </span>
              </div>
            ))}
          </div>

          {/* Product Tags */}
          {tags?.length > 0 && (
            <div className="mt-7">
              <div className="mb-3 flex items-center gap-2">
                <Tag size={19} className="text-violet-600" />

                <h3 className="font-bold text-gray-900">Product Tags</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-violet-50 px-4 py-2 text-sm font-medium capitalize text-violet-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* QR Code */}
          {meta?.qrCode && (
            <div className="mt-7 border-t border-gray-100 pt-6">
              <h3 className="mb-3 font-bold text-gray-900">Product QR Code</h3>

              <img
                src={meta.qrCode}
                alt={`QR code for ${title}`}
                className="h-32 w-32 rounded-lg border border-gray-200 p-2"
                loading="lazy"
              />
            </div>
          )}
        </section>

        {/* Customer Reviews */}
        <section className="mt-10 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">
                Customer Reviews
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Feedback from customers who reviewed this product.
              </p>
            </div>

            <div className="rounded-xl bg-amber-50 px-5 py-3">
              <div className="flex items-center gap-2">
                <Star size={21} className="fill-amber-400 text-amber-400" />

                <span className="text-2xl font-extrabold text-gray-900">
                  {formatRating(rating)}
                </span>
              </div>

              <p className="mt-1 text-xs text-gray-500">
                Overall product rating
              </p>
            </div>
          </div>

          {reviews?.length > 0 ? (
            <>
              <div className="mt-5 text-sm text-gray-500">
                Average rating from listed reviews:{" "}
                <span className="font-bold text-gray-800">
                  {averageReviewRating.toFixed(1)} / 5
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {reviews.map((review, index) => (
                  <article
                    key={`${review.reviewerEmail}-${index}`}
                    className="rounded-xl border border-gray-100 p-4 sm:p-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-gray-900">
                          {review.reviewerName}
                        </h3>

                        <p className="mt-1 text-xs text-gray-500">
                          {formatDate(review.date)}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-3 py-2">
                        <Star
                          size={15}
                          className="fill-amber-400 text-amber-400"
                        />

                        <span className="text-sm font-bold text-gray-800">
                          {review.rating} / 5
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      {review.comment}
                    </p>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <p className="mt-6 text-sm text-gray-500">
              No customer reviews available for this product.
            </p>
          )}
        </section>

        {/* Footer Information */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pb-4 text-xs text-gray-400">
          <span className="flex items-center gap-2">
            <Barcode size={15} />
            SKU: {sku}
          </span>

          <span className="flex items-center gap-2">
            <CalendarDays size={15} />
            Updated: {formatDate(meta?.updatedAt)}
          </span>

          <span className="flex items-center gap-2">
            <Weight size={15} />
            Weight: {weight} units
          </span>

          <span className="flex items-center gap-2">
            <Ruler size={15} />
            Dimensions available
          </span>
        </div>
      </div>
      <div>
        <InfiniteProducts />
      </div>
    </div>
  );
};

export default ProductDetailPage;
