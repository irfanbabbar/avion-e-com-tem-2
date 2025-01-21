import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Productlist from "@/components/ProductList";
import ProductListPage from "@/components/ProductListPage";

import { client } from "@/sanity/lib/client";

export default async function ProductListing() {
  const query = `*[_type == "product"]{
    _id,
  name,
  description,
  price,
  discountPercentage,
  tags,
  category,
  "imageUrl": image.asset->url
}`;
const list = await client.fetch(query)
  return (
    <>
      <Header />
      <div className="w-full mx-auto">
        <Productlist />
      </div>

      {/* <ProductTypes /> */}
    {list &&  <ProductListPage products={list} />}

      <Footer />
    </>
  );
}
