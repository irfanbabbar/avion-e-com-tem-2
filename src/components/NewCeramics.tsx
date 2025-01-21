// components/NewCeramics.jsx
import Image from 'next/image'
import Link from 'next/link'

const NewCeramics = () => {
 
const products = [
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
  
];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-light mb-12">New ceramics</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product._id} className="flex flex-col">
            <div className="relative aspect-square bg-[#E8ECF0] mb-0">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={1000}
                height={500}
                className= " min-w-full min-h-fit w-fit h-[450px] object-cover hover:opacity-90 transition-opacity"
              />
            </div>
            <h3 className="text-lg font-light">{product.name}</h3>
            <p className="text-lg  text-orange-400 mb-4">£{product.price}</p>
            <p className="text-lg font-medium text-orange-400 mb-4">{product.discountPercentage}Discount %0</p>
            <Link href={`/product/${product._id}`} passHref className="text-center mt-4 bg-[#2A254B] text-gray-300 py-2 px-4 rounded hover:bg-orange-600 transition-colors">
          View Details
        </Link>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link 
          href="/product-listing" 
          className="text-blue-600 hover:underline"
        >
          View collection
        </Link>
      </div>
    </section>
  )
}

export default NewCeramics
