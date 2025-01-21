"use client"; // Tells Next.js this file is a Client Component
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFilter } from "react-icons/fa"; // React Icons for sidebar

export default function ProductListingPage({ products = [] }: any) {
  // products is passed in from the Server Component (page.tsx)
  // If you need additional client-side interactivity:
  const [sortOption, setSortOption] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]); // Price filter range (min, max)

  const sortedProducts = [...products]
    .filter(
      (product) =>
        categoryFilter === "all" ||
        product.name.toLowerCase().includes(categoryFilter)
    )
   .filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortOption === "low-high") return a.price - b.price;
      if (sortOption === "high-low") return b.price - a.price;
      return 0;
    });


  const filteredProducts = sortedProducts;

  return (
    <div className="bg-gray-100 px-4 py-2 border-b shadow-md">
      <div className="flex items-center justify-between space-x-4">
        {/* Filters */}
        <div className="flex items-center space-x-4">
          <select
            // onChange={(e: any) => setCategoryFilter(e?.target.value)}
            className="py-2 px-4 rounded-lg bg-gray-200 text-gray-700"
          >
            <option value={"all"}>Category</option>
            <option value={"Simple"}>Simple </option>
            <option value={"Fashion"}>Fashion</option>
          </select>

          <select className="py-2 px-4 rounded-lg bg-gray-200 text-gray-700">
            <option>Product Type</option>
            <option>Sofas</option>
            <option>Chairs</option>
            <option>Ports</option>
            <option>lamp</option>
          </select>

          <div className="flex items-center mb-4 sm:mb-0">
            <label htmlFor="price-range" className="mr-2 text-lg">
              Price Range
            </label>
            <input
              type="range"
              id="price-range"
              min="0"
              max="1000"
              step="10"
              value={priceRange[1]}
              onChange={(e: any) => setPriceRange([0, parseInt(e?.target.value)])}
              className="w-32 "
            />
            <span className="ml-2 text-gray-700">${priceRange[1]}</span>
          </div>

          <div className="flex items-center mb-4 sm:mb-0">
            <FaFilter className="mr-2 text-xl" />
            <select
              value={sortOption}
              onChange={(e: any) => setSortOption(e?.target.value)}
              className="py-2 px-4 rounded-lg bg-gray-200 text-gray-700"
            >
              <option value="default">Sort By</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          <select className="py-2 px-4 rounded-lg bg-gray-200 text-gray-700"     >
            <option>Brand</option>
            <option>Avion</option>
          </select>
        </div>

        {/* Sorting */}

        <div>
          <select 
          className="py-2 px-4 rounded-lg bg-gray-200 text-gray-700"

          >
            <option>Date added</option>
            <option>date</option>
            <option>month</option>
            <option>year</option>
          </select>
        </div>
      </div>

      <div>
        {/* Example: a client-side search input */}

        {/* Render the filtered products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product: any) => (
            <div
              key={product._id} // or product.id, whichever your data has
              className="bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transition-transform"
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="mt-4 text-lg font-medium">{product.name}</h2>
              <p className="text-orange-500">{product.price}</p>
              <p className="text-orange-400">{product.discountPercentage} Discount %0</p>
              <p className="text-gray-600"></p>
              <br />
              <Link
                href={`/product/${product._id}`}
                className="mt-8 bg-[#2A254B] text-white py-2 px-4 rounded hover:bg-orange-500 transition-colors"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
