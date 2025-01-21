// components/Footer.tsx
import Link from "next/link";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2A254B] text-gray-300 py-12 px-4 md:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Menu Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/new-arrivals" className="hover:text-white">
                  New arrivals
                </Link>
              </li>
              <li>
                <Link href="/best-sellers" className="hover:text-white">
                  Best sellers
                </Link>
              </li>
              <li>
                <Link href="/recently-viewed" className="hover:text-white">
                  Recently viewed
                </Link>
              </li>
              <li>
                <Link href="/popularproduct" className="hover:text-white">
                  Popular this week
                </Link>
              </li>
              <li>
                <Link href="/product-listing" className="hover:text-white">
                  All products
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/crockery" className="hover:text-white">
                  Crockery
                </Link>
              </li>
              <li>
                <Link href="/furniture" className="hover:text-white">
                  Furniture
                </Link>
              </li>
              <li>
                <Link href="/homeware" className="hover:text-white">
                  Homeware
                </Link>
              </li>
              <li>
                <Link href="/plant-pots" className="hover:text-white">
                  Plant pots
                </Link>
              </li>
              <li>
                <Link href="/chairs" className="hover:text-white">
                  Chairs
                </Link>
              </li>
              <li>
                <Link href="/crockery" className="hover:text-white">
                  Crockery
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Company Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Our company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/vacancies" className="hover:text-white">
                  Vacancies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Returns policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Join Mailing List Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Join our mailing list
            </h3>
            <div className="flex w-[20rem]">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-[#2A254B] text-white px-1 mt-2 py-2 rounded-l focus:outline-none flex-grow"
              />
              <button className="bg-yellow-50 text-gray-800 px-2 mt-2  py-1 rounded-r hover:bg-yellow-100 transition-colors">
                Sign up
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t bg-[#2A254B] flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">Copyright 2022 Avion LTD</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://www.linkedin.com" className="hover:text-white">
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://www.facebook.com" className="hover:text-white">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://www.instagram.com/accounts/login/?hl=en" className="hover:text-white">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <FaSkype size={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <FaTwitter size={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <FaPinterest size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
