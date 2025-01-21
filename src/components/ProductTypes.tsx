import React from "react";

const ProductTypes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r  flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Product Type Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Product Type</h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Furniture</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Homeware</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Sofas</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Light Fittings</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Accessories</span>
            </label>
          </div>
        </div>

        {/* Price Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Price</h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>0 - 100</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>101 - 250</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>250+</span>
            </label>
          </div>
        </div>

        {/* Designer Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Designer</h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Robert Smith</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Liam Gallagher</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Biggie Smalls</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Thom Yorke</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTypes;