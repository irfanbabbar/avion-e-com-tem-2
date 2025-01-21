import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
    id: string;
    image: string;
    description: string;
    size: string;
    discount: number;
    title: string;
    price: number;
    tags: string[];
  }
  
  const ProductCard = ({ image, description, size, title, price }: ProductCardProps) => {
    return (
      <div className="flex flex-col">
        <div className="overflow-hidden mb-4">
          <Image
            src={image}
            alt={title}
            width={100}
            height={300}
            className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-lg  text-orange-400 mb-4">£{price}</p>
        <p className="text-gray-600">{description}</p>
        <p className="text-orange-400 mb-4">Size: {size}</p>

        <Link href='/popularproduct'className=" text-center mt-4 bg-[#2A254B] text-gray-300 py-2 px-4 rounded hover:bg-orange-600 transition-colors">
          View Details
        </Link>
      </div>
    );
  };
  
  export default ProductCard;