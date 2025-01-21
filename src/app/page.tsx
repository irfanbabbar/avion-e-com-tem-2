import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import NewCeramics from "@/components/NewCeramics";
import JoinUs from "@/components/JoinUs";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />
      <NewCeramics />
      {/* <Productlist />
      <ProductTypes />
      <ProductListPage /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-medium text-gray-900 mb-8">
          Our popular products
        </h1>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            id={'product-19'}
            image="https://cdn.sanity.io/images/2l6m4uz5/production/4d749d58f7cf906766229e32feb894a85ac88756-4160x4160.jpg"
            title="Bold Nest"
            price={260}
            description= "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery."
            size="Large"
            discount={0}
            tags={["popular", "new"]}
          />
          <ProductCard
            id="product-18"
            title="Sunny Chic"
            description="A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery."
            price={400}   
            discount={0}
            image="https://cdn.sanity.io/images/2l6m4uz5/production/29e3993cfc3f28149ef0615a5cf933a8100e243b-4000x3907.jpg"
            size="Medium"
            tags={["popular", "new"]}
          />
          <ProductCard
           id="product-17"
           title="Reflective Haven"
           description="A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery."
           price={300}   
           discount={0}
           image= "https://cdn.sanity.io/images/2l6m4uz5/production/1d164807717fdbc56142a73f3dec82fea98d12e5-3902x5853.jpg"
           size="Medium"
           tags={["popular", "new"]}
          />
        </div>

        <div className="text-center mt-8">
          <button className="text-blue-600 hover:text-gray-900 transition-colors duration-300">
            View collection
          </button>
        </div>
      </div>
      <JoinUs />

      <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center py-12">
  <div className="container mx-auto px-4 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* Left Column */}
    <div className="flex flex-col justify-center">
      <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
        From a studio in London to a global brand with over 400 outlets
      </h1>
      <p className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">
        When we started Axon, the idea was simple: Make high-quality furniture affordable and available for the mass market.
      </p>
      <p className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">
        Handmade and lovingly crafted furniture and homeware is what we live, breathe, and design as our Chelsea boutique became the hotbed for the London interior design community.
      </p>
      <Link
        href="/contact"
        className="text-blue-600 underline text-sm lg:text-base font-medium mb-12 hover:text-blue-800 transition-colors duration-300"
      >
        Get in touch
      </Link>
    </div>

    {/* Right Column */}
    <div className="flex justify-center items-center">
      <div className="relative">
        {/* Sofa */}
        <div className="flex w-full max-w-md lg:max-w-lg h-auto gap-2">
          <Image
            src="/imges tem 2/corner sofa.png"
            alt="Sofa"
            height={1000}
            width={1500}
            className="object-cover w-full h-fit"
          />
        </div>
      </div>
    </div>
  </div>
</div>
      <Footer />
    </>
  );
}
