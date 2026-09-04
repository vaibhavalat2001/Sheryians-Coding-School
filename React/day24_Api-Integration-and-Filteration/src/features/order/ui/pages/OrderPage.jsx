import React from "react";
import {
  Package,
  Truck,
  CheckCircle2,
  Clock3,
  MapPin,
  ChevronRight,
} from "lucide-react";

const OrderPage = () => {
  const orders = [
    {
      id: "#ORD-10245",
      date: "Sep 02, 2026",
      status: "Delivered",
      statusColor: "text-green-400",
      statusBg: "bg-green-500/10",
      icon: CheckCircle2,
      total: 2298,
      items: 2,
      products: [
        {
          name: "Premium Cotton T-Shirt",
          image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300",
        },
        {
          name: "Classic Sneakers",
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300",
        },
      ],
    },
    {
      id: "#ORD-10244",
      date: "Aug 28, 2026",
      status: "Shipped",
      statusColor: "text-blue-400",
      statusBg: "bg-blue-500/10",
      icon: Truck,
      total: 1299,
      items: 1,
      products: [
        {
          name: "Leather Backpack",
          image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300",
        },
      ],
    },
    {
      id: "#ORD-10243",
      date: "Aug 21, 2026",
      status: "Processing",
      statusColor: "text-yellow-400",
      statusBg: "bg-yellow-500/10",
      icon: Clock3,
      total: 1799,
      items: 1,
      products: [
        {
          name: "Wireless Headphones",
          image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Orders
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Track and manage all your orders in one place.
          </p>
        </div>

        {/* Order Tabs */}
        <div className="mb-6 flex gap-2 overflow-x-auto border-b border-[#262626]">
          <button className="whitespace-nowrap border-b-2 border-purple-500 px-4 pb-3 text-sm font-medium text-purple-400">
            All Orders
          </button>

          <button className="whitespace-nowrap px-4 pb-3 text-sm text-gray-500 transition hover:text-white">
            Processing
          </button>

          <button className="whitespace-nowrap px-4 pb-3 text-sm text-gray-500 transition hover:text-white">
            Shipped
          </button>

          <button className="whitespace-nowrap px-4 pb-3 text-sm text-gray-500 transition hover:text-white">
            Delivered
          </button>
        </div>

        {/* Orders */}
        <div className="space-y-5">
          {orders.map((order) => {
            const StatusIcon = order.icon;

            return (
              <div
                key={order.id}
                className="overflow-hidden rounded-2xl border border-[#262626] bg-[#151515]"
              >
                {/* Order Header */}
                <div className="flex flex-col gap-4 border-b border-[#262626] p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <Package size={19} className="text-purple-400" />

                      <h2 className="font-semibold">{order.id}</h2>
                    </div>

                    <p className="mt-1 text-xs text-gray-500">
                      Placed on {order.date}
                    </p>
                  </div>

                  {/* Status */}
                  <div
                    className={`flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${order.statusBg} ${order.statusColor}`}
                  >
                    <StatusIcon size={15} />
                    {order.status}
                  </div>
                </div>

                {/* Product Section */}
                <div className="p-5">
                  <div className="space-y-4">
                    {order.products.map((product, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4"
                      >
                        {/* Product Image */}
                        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[#202020]">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="min-w-0 flex-1">
                          <h3 className="truncate text-sm font-medium sm:text-base">
                            {product.name}
                          </h3>

                          <p className="mt-1 text-xs text-gray-500">
                            Quantity: 1
                          </p>
                        </div>

                        <ChevronRight
                          size={18}
                          className="text-gray-600"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Footer */}
                <div className="flex flex-col gap-4 border-t border-[#262626] bg-[#121212] p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs text-gray-500">
                      {order.items}{" "}
                      {order.items === 1 ? "item" : "items"}
                    </p>

                    <p className="mt-1 text-lg font-bold">
                      ₹{order.total.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    {order.status === "Delivered" && (
                      <button className="rounded-lg border border-[#333] px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-purple-500 hover:text-white">
                        Buy Again
                      </button>
                    )}

                    <button className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium transition hover:bg-purple-700">
                      View Details
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Delivery Address */}
        <div className="mt-8 rounded-2xl border border-[#262626] bg-[#151515] p-5">
          <div className="flex items-center gap-3">
            <MapPin className="text-purple-400" size={20} />

            <div>
              <h2 className="font-semibold">Default Delivery Address</h2>

              <p className="mt-1 text-sm text-gray-500">
                Your saved address will be used for future orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;