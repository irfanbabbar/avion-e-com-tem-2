// pages/index.js
import Image from "next/image";

export default function ProductList() {
  return (
    <div className="bg-white flex items-center">
      <h1 className="text-white text-lg font-sans"></h1>
      <div className="w-full">
        <Image
          src="/imges tem 2/Page Headers.png"
          alt="All products"
          width={500}
          height={500}
          className="w-full h-100 drop-shadow-xl"
        />
      </div>
    </div>
  );
}
