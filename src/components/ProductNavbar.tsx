import { useState } from "react";
import Link from "next/link";


import { 
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
  Bars3Icon
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full">
      {/* Top Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-gray-900 text-gray-100 text-sm py-2 px-4 flex items-center justify-center relative">
          <p className="text-center">
            Free delivery on all orders over $50 with code <strong>easter</strong> checkout
          </p>
          <button
            onClick={() => setShowAnnouncement(false)}
            className="absolute right-4"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <div className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h2 className="text-2xl font-bold tracking-wide">
                Avion
              </h2>
            </Link>
          </div>

          {/* Center - Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["Plant pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery"].map(
              (item) => (
                <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`}>
                  <p className="text-gray-800 hover:text-gray-600 transition-colors">
                    {item}
                  </p>
                </Link>
              )
            )}
          </div>

          {/* Right - Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="https://www.google.com/">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-800 hover:text-gray-600 cursor-pointer" />
            </Link>
            <Link href='/cart'>
            <ShoppingCartIcon className="w-6 h-6 text-gray-800 hover:text-gray-600 cursor-pointer" />
            </Link>
            <Link href='/contact'>
            <UserIcon className="w-6 h-6 text-gray-800 hover:text-gray-600 cursor-pointer" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 hover:text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {menuOpen && (
          <div className="md:hidden bg-gray-200 border-t border-gray-300">
            <div className="flex flex-col space-y-2 py-4 px-4">
              {["Plant pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                  >
                    <p
                      className="text-gray-800 hover:text-gray-600 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </p>
                  </Link>
                )
              )}
              <div className="flex items-center space-x-4 mt-4">
                <MagnifyingGlassIcon className="w-6 h-6 text-gray-800 hover:text-gray-600" />
                <ShoppingCartIcon className="w-6 h-6 text-gray-800 hover:text-gray-600" />
                <UserIcon className="w-6 h-6 text-gray-800 hover:text-gray-600" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>

  );
}
