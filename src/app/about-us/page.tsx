import React from 'react';
import AboutUsHeader from "@/components/AboutUsHeader";
import AboutUsBanner from "@/components/AboutUsBanner";
import FeatureSection from "@/components/FeatureSection";
import JoinUs from "@/components/JoinUs";
import { FaLinkedin, FaFacebook, FaInstagram, FaSkype, FaTwitter, FaPinterest } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
export default function AboutUs() {
  return (
    <>

    
    
      <AboutUsHeader />
      <AboutUsBanner/>
      <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
        {/* Left Content */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg h-[31.5rem]">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
            It started with a small idea
          </h1>
          <p className="text-gray-300 mb-8">
            A global brand with local beginnings, our story begun in a small studio in South London in early 2014
          </p>
          <Link 
            href="/product-listing" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
          >
            View collection
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative h-[400px] md:h-[500px]">
          <div className="rounded-lg overflow-hidden h-full">
            <Image
              src="/imges tem 2/yeloow sofa.png" // Make sure to add your image in public folder
              alt="Modern interior with yellow chair"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="container mx-auto px-4 py-16">

<div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-50 px-6 md:px-20 py-10">
        {/* Left Section: Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            <Image
              src="/imges tem 2/black sofa.png" // Replace with your image path
              alt="Sofa"
              width={500}
              height={500}
              className="w-full h-[450]  object-cover"
            />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gray-200 rounded-full"></div>
          </div>
        </div>
  
        {/* Right Section: Text */}
        <div className="flex-1 mt-10 md:mt-0 md:ml-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Our service isnt just personal, its actually hyper personally
            exquisite
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            When we started Avion, the idea was simple: Make high-quality
            furniture affordable and available for the mass market.
          </p>
          <p className="mt-4 text-gray-600 text-lg">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe, and design so our Chelsea boutique becomes the hotbed
            for the London interior design community.
          </p><br />
          <Link href="/contact" className="mt-6 px-6 py-3 bg-gray-800 text-white text-lg font-medium rounded-md hover:bg-gray-700">
            Get in touch
          </Link>
        </div>
      </div>
</section>
      
      <section>
      <FeatureSection/>
      </section>
      
      <section>
      <JoinUs/>
      </section>
       
<footer className="bg-[#2A254B] text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Avion</h2>
          <div className="text-gray-300 space-y-2">
            <p>21 New York Street</p>
            <p>New York City</p>
            <p>United States of America</p>
            <p>432 34</p>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Social links</h3>
          <div className="flex space-x-4">
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://www.linkedin.com" className="hover:text-white"><FaLinkedin size={20} /></Link>
            <Link href="https://www.facebook.com/" className="hover:text-white"><FaFacebook size={20} /></Link>
            <Link href="https://www.instagram.com/" className="hover:text-white"><FaInstagram size={20} /></Link>
            <Link href="#" className="hover:text-white"><FaSkype size={20} /></Link>
            <Link href="#" className="hover:text-white"><FaTwitter size={20} /></Link>
            <Link href="#" className="hover:text-white"><FaPinterest size={20} /></Link>
          </div>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#" className="hover:text-white">New arrivals</Link></li>
            <li><Link href="#" className="hover:text-white">Best sellers</Link></li>
            <li><Link href="#" className="hover:text-white">Recently viewed</Link></li>
            <li><Link href="/popularproduct" className="hover:text-white">Popular this week</Link></li>
            <li><Link href="/product-listing" className="hover:text-white">All products</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#" className="hover:text-white">Crockery</Link></li>
            <li><Link href="/product-listing" className="hover:text-white">Furniture</Link></li>
            <li><Link href="#" className="hover:text-white">Homeware</Link></li>
            <li><Link href="#" className="hover:text-white">Plant pots</Link></li>
            <li><Link href="/popularproduct" className="hover:text-white">Chairs</Link></li>
            <li><Link href="#" className="hover:text-white">Crockery</Link></li>
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our company</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/about-us" className="hover:text-white">About us</Link></li>
            <li><Link href="#" className="hover:text-white">Vacancies</Link></li>
            <li><Link href="#" className="hover:text-white">Contact us</Link></li>
            <li><Link href="#" className="hover:text-white">Privacy</Link></li>
            <li><Link href="#" className="hover:text-white">Returns policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700">
        <p className="text-gray-400 text-sm">Copyright 2022 Avion LTD</p>
      </div>
    </footer>
      
    </>
  );
}
