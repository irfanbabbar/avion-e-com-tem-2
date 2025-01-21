import { FaSearch, FaShoppingCart, FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Search Icon */}
        <Link href="https://www.google.com/">
        <FaSearch />
        </Link>

        {/* Center: Logo */}
        <div className="text-2xl font-bold ml-28 text-gray-800">Avion</div>

        {/* Right: Icons */} 
        <div className="flex items-center  space-x-6">
          <Link href="/shippodata">
            Order tracking
          </Link>
          <Link href="/cart">
            <FaShoppingCart />
          </Link>
          <Link href="/contact">
          <FaRegUserCircle />
          </Link>
            </div>
        </div>

      {/* Navigation */}
      <nav className="w-full bg-gray-100  border-t">
        <div className="container mx-auto px-4 py-2 flex items-center justify-center space-x-8">
          {[
            "Plant pots",
            "Ceramics",
            "Tables",
            "Chairs",
            "Crockery",
            "Tableware",
            "Cutlery",
          ].map((item, index) => (
            <Link
              key={index}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
