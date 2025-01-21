import Link from "next/link";

export default function AboutUsBanner() {
  return (
    <header className="relative border-t-2 border-b-2 bg-gray-100">
      <div className="container mx-auto flex justify-between items-center p-8 h-[12rem]">
        {/* Main Text */}
        <h1 className="text-left text-2xl w-[35rem]">
          A brand built on the love of craftsmanship, quality and outstanding customer service
        </h1>

        {/* Button */}
        <Link
          href="/product-listing"
          className="text-center mt-4 bg-[#504692] text-gray-300 py-2 px-4 hover:bg-orange-600 transition-colors"
        >
          View our products
        </Link>
      </div>
    </header>
  );
}