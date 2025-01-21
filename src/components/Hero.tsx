import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bg-[#2A254B] text-white">
      {/* Content Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 py-8 md:py-16">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            The furniture brand for the future, with timeless designs
          </h1>
          {/* Subheading */}
          <p className="text-gray-300">
            A new era in eco-friendly furniture with Avion, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
          {/* Button */}
          <Link href='/product-listing'className="px-6 py-3 bg-white text-[#2A254B] font-medium rounded-lg hover:bg-gray-100">
            View collection
          </Link>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0">
          {/* Chair Image */}
          <Image
            src="/chair.png"
            alt="Chair"
            width={200}
            height={200}
            className="w-3/4 h-auto drop-shadow-xl"
          />
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
