import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import AdsData from "../data/adsData";

const SLUG_TO_CATEGORY = {
  "downtown-billboard": "Downtown Billboard",
  "highway-display": "Highway Display",
  "shopping-mall-board": "Shopping Mall Board",
  "event-promotion": "Event Promotion",
  "city-center-led": "City Center LED",
  "corporate-ad-space": "Corporate Ad Space",
};

export default function CategoryPhotos() {
  const { categorySlug } = useParams();
  const categoryName = SLUG_TO_CATEGORY[categorySlug];
  const items = categoryName ? AdsData[categoryName] || [] : [];

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">
        <header className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {categoryName || "Billboard Category"}
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Browse available locations and details for this category.
            </p>
          </div>
          <Link
            to="/"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← Back to Home
          </Link>
        </header>

        {items.length === 0 ? (
          <div className="text-gray-600 text-sm">
            No entries found for this category.
          </div>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.location}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/800x450?text=Billboard";
                      }}
                    />
                  )}
                </div>
                <div className="p-4 space-y-2 flex-1 flex flex-col">
                  <h2 className="text-base font-semibold text-gray-900">
                    {item.location}
                  </h2>
                  {item.size && (
                    <p className="text-xs text-gray-600">Size: {item.size}</p>
                  )}
                  {item.expiryDate && (
                    <p className="text-xs text-gray-500">
                      Available till {item.expiryDate}
                    </p>
                  )}
                  <div className="mt-auto flex items-center justify-between pt-2 text-sm">
                    {typeof item.price === "number" && (
                      <span className="font-semibold text-emerald-600">
                        ₹{item.price.toLocaleString("en-IN")}
                      </span>
                    )}
                    {typeof item.available === "boolean" && (
                      <span
                        className={
                          "inline-flex px-2 py-0.5 rounded-full text-xs font-medium " +
                          (item.available
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-red-50 text-red-700")
                        }
                      >
                        {item.available ? "Available" : "Not Available"}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}
      </main>
    </>
  );
}
