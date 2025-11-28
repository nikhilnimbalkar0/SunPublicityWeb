import React from "react";
import Navbar from "../component/Navbar";

export default function HoardingsDisplay() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Hoarding Showcase
        </h1>
        <p className="text-sm md:text-base text-gray-600 mb-4">
          Explore available hoarding locations across different categories using
          the gallery and map views.
        </p>
        <p className="text-sm text-gray-600">
          Use the navigation links at the top to browse by category, view the
          Maharashtra map, or manage your wishlist and account.
        </p>
      </main>
    </>
  );
}
