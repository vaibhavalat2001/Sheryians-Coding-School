import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

      {/* Header */}
      <div className="bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-8 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-bold uppercase text-indigo-600 shadow-md">
          {user.firstName.charAt(0)}
          {user.lastName.charAt(0)}
        </div>

        <h2 className="mt-4 text-2xl font-bold capitalize text-white">
          {user.firstName} {user.lastName}
        </h2>

        <p className="mt-1 text-sm text-indigo-100">
          @{user.username}
        </p>
      </div>

      {/* User Details */}
      <div className="space-y-4 p-6">

        {/* Email */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
            📧
          </div>

          <div className="min-w-0">
            <p className="text-xs font-medium uppercase text-gray-400">
              Email
            </p>
            <p className="truncate text-sm font-semibold text-gray-700">
              {user.email}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
            📞
          </div>

          <div>
            <p className="text-xs font-medium uppercase text-gray-400">
              Phone
            </p>
            <p className="text-sm font-semibold text-gray-700">
              {user.phone}
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100">
            📍
          </div>

          <div>
            <p className="text-xs font-medium uppercase text-gray-400">
              Address
            </p>

            <p className="text-sm font-semibold capitalize text-gray-700">
              {user.address.stateCode}, {user.address.address}
            </p>

            <p className="text-sm capitalize text-gray-500">
              {user.address.city} - {user.address.postalCode}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 pt-4">
          <p className="text-center text-xs text-gray-400">
            User ID: #{user.id}
          </p>
        </div>

      </div>
    </div>
  );
};

export default UserCard;

