import React from "react";

const Product = ({ product, handleAddToCart }) => {
  const { name, img, price } = product;

  return (
    <div className="w-1/3 p-4 flex justify-center items-stretch">
      <div className="rounded-lg shadow-lg bg-white max-w-sm text-center">
        <img className="rounded-t-lg" src={img} alt="" />
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2 font-sans">
            {name}
          </h5>
          <h2 className="text-blue-600 text-2xl font-semibold mb-4 font-sans">
            Price: <span className="price">${price}</span>
          </h2>
          <button
            type="button"
            onClick={() => handleAddToCart(product)}
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
