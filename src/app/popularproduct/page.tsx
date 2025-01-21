'use client';

import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

const products = [
    {
        "_id": "product-17",
        "name": "Reflective Haven",
        "description": "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
        "price": 300,
        "discountPercentage": null,
        "tags": [],
        "imageUrl": "https://cdn.sanity.io/images/2l6m4uz5/production/1d164807717fdbc56142a73f3dec82fea98d12e5-3902x5853.jpg"
      },
      {
        "_id": "product-18",
        "name": "Sunny Chic",
        "description": "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
        "price": 400,
        "discountPercentage": null,
        "tags": [],
        "imageUrl": "https://cdn.sanity.io/images/2l6m4uz5/production/29e3993cfc3f28149ef0615a5cf933a8100e243b-4000x3907.jpg"
      },
      {
        "price": 260,
        "discountPercentage": null,
        "tags": [],
        "imageUrl": "https://cdn.sanity.io/images/2l6m4uz5/production/4d749d58f7cf906766229e32feb894a85ac88756-4160x4160.jpg",
        "_id": "product-19",
        "name": "Bold Nest",
        "description": "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery."
      },
      {
        "imageUrl": "https://cdn.sanity.io/images/2l6m4uz5/production/b3bbbd269d31ce9b57b7a867bf0b7f6fdc5b3208-721x759.png",
        "_id": "product-2",
        "name": "The Steel Chair",
        "description": "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery",
        "price": 250,
        "discountPercentage": null,
        "tags": ["product detail", "hero"]
      },
      {
        "description": "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
        "price": 230,
        "discountPercentage": null,
        "tags": [],
        "imageUrl": "https://cdn.sanity.io/images/2l6m4uz5/production/a309259aad5aa63a3b438ed9c42339a1c8375a3a-3264x4902.jpg",
        "_id": "product-20",
        "name": "Cloud Haven Chair"
      },
      {
        "discountPercentage": null,
        "tags": [],
        "imageUrl": "https://cdn.sanity.io/images/2l6m4uz5/production/d32066d0882c1632e027b053564115ed460e09eb-3393x5090.jpg",
        "_id": "product-21",
        "name": "Bright Space",
        "description": "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
        "price": 180
      },
      {
        "imageUrl": "https://cdn.sanity.io/images/2l6m4uz5/production/e2cc69a6c9f9d1ff1fcfbe839844240e16f5f758-305x375.png",
        "_id": "product-22",
        "name": "The Dandy chair",
        "description": "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
        "price": 150,
        "discountPercentage": null,
        "tags": ["new ceramics", "popular products"]
      },
      {
        "_id": "product-23",
        "name": "Vase Set",
        "description": "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
        "price": 150,
        "discountPercentage": null,
        "tags": ["new ceramics"],
        "imageUrl": "https://cdn.sanity.io/images/2l6m4uz5/production/8795ff7bdb3d810dbe0c3eb52cd22116c9115bce-305x375.png"
      },
      {
        "imageUrl": "https://cdn.sanity.io/images/2l6m4uz5/production/7f6146b6625bf94030f2aa896e9b0c847e5f4919-8000x8000.jpg",
        "_id": "product-24",
        "name": "Marble Ease",
        "description": "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
        "price": 419,
        "discountPercentage": null,
        "tags": []
      }
   
];


const TopProducts = () => {
  return (
    <>
    <Header />
    <div className="my-24">
      <h2 className="text-3xl font-semibold text-orange-950 text-center mb-6">Top Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-72 object-cover mb-4"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-orange-950">{product.name}</h3>
              <p className="text-lg font-medium text-orange-400 mb-4">${product.price}</p>
              <p className="text-lg font-medium text-orange-400 mb-4">{product.discountPercentage}Discount %0</p>
              <p className="text-sm font-medium text-gray-400 mb-4">{product.description}</p>

              <Link href={`/product/${product._id}`}>
                <button className="w-full bg-gradient-to-r bg-[#2A254B] text-gray-300 py-2 rounded-lg shadow-md hover:bg-orange-500 transition-all duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
         
        ))}
        
      </div>
      
      <Footer />
    </div>
    </>
  );
};

export default TopProducts;
