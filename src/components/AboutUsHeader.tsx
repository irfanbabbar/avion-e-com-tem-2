// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#2A254B] text-white py-2 px-4 text-center text-sm">
        Free delivery on all orders over £50 with code easter checkout.
      </div>

      {/* Main Navigation */}
      <nav className="border-b border-gray-200">
        {/* Upper Nav with Logo and Icons */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Left Side - Logo */}
            <div className="text-2xl font-semibold">
              <Link href="/" className="hover:text-gray-600">
                Avion
              </Link>
            </div>

            {/* Right Side - Links and Icons */}
            <div className="flex items-center space-x-6">
              <Link href="/about-us" className="text-sm hover:text-gray-600 hover:underline">
                About Us
              </Link>
              <Link href="/contact" className="text-sm hover:text-gray-600 hover:underline">
                Contect us
              </Link>
              <Link href="/" className="text-sm hover:text-gray-600 hover:underline">
                Home
              </Link>
              
              {/* Search Icon */}
              <Link href='https://www.google.com' className="hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>

              {/* Cart Icon */}
              <Link href='/cart' className="hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </Link>

              {/* Account Icon */}
              <Link href='/contact' className="hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Lower Nav with Product Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-center items-center">
            <div className="flex space-x-8">
              <Link href="/product-listing" className="text-sm hover:text-gray-600 hover:underline">
                All products
              </Link>
              <Link href="/plant-pots" className="text-sm hover:text-gray-600 hover:underline">
                Plant pots
              </Link>
              <Link href="/ceramics" className="text-sm hover:text-gray-600 hover:underline">
                Ceramics
              </Link>
              <Link href="/tables" className="text-sm hover:text-gray-600 hover:underline">
                Tables
              </Link>
              <Link href="/chairs" className="text-sm hover:text-gray-600 hover:underline">
                Chairs
              </Link>
              <Link href="/crockery" className="text-sm hover:text-gray-600 hover:underline">
                Crockery
              </Link>
              <Link href="/tableware" className="text-sm hover:text-gray-600 hover:underline">
                Tableware
              </Link>
              <Link href="/cutlery" className="text-sm hover:text-gray-600 hover:underline">
                Cutlery
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}