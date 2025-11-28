import React from "react";

export default function HoardingCard({ hoarding, onClick }) {
  if (!hoarding) return null;

  const handleClick = () => {
    if (onClick) onClick(hoarding);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full text-left bg-white rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden"
    >
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-900">{hoarding.title}</h2>
        {hoarding.locationName && (
          <p className="text-sm text-gray-600">{hoarding.locationName}</p>
        )}
        <div className="flex items-center justify-between text-sm text-gray-700 mt-2">
          {hoarding.size && <span>Size: {hoarding.size}</span>}
          {typeof hoarding.price === "number" && (
            <span className="font-semibold text-emerald-600">
              ₹{hoarding.price.toLocaleString("en-IN")}
            </span>
          )}
        </div>
        {hoarding.expiryDate && (
          <p className="text-xs text-gray-500 mt-1">
            Available till {hoarding.expiryDate}
          </p>
        )}
        {typeof hoarding.available === "boolean" && (
          <p className={
            "inline-flex mt-2 px-2 py-0.5 rounded-full text-xs font-medium " +
            (hoarding.available
              ? "bg-emerald-50 text-emerald-700"
              : "bg-red-50 text-red-700")
          }>
            {hoarding.available ? "Available" : "Not Available"}
          </p>
        )}
      </div>
    </button>
  );
}
