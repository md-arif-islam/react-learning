import React, { useEffect, useState } from "react";

const Cart = ({ cart, clearCart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="w-1/4 px-4 relative">
      <div className="fixed bg-blue-600 w-[350px] shadow-lg right-4 bottom-4 top-[116px] p-4">
        <div className="text-center">
          <h1 className="text-xl text-white font-semibold">Order Summary</h1>
        </div>
        <div className="pt-5">
          <h2 className="text-lg font-semibold text-white py-1 flex justify-between">
            <span>Selected Items : </span>
            <span className="items font-sans">{quantity}</span>
          </h2>
          <h2 className="text-lg font-semibold text-white py-1 flex justify-between">
            <span>Total Price : </span>
            <span className="total-price font-sans">{total} $</span>
          </h2>
          <h2 className="text-lg font-semibold text-white pt-1 pb-3 flex justify-between">
            <span>Total Shipping :</span>
            <span className="total-shipping font-sans">{shipping} $</span>
          </h2>
          ``
          <h2 className="text-xl font-semibold text-white pt-3 flex justify-between border-t-2 border-gray-200">
            <span>Total Amount :</span>
            <span className="total-shipping font-sans">
              {grandTotal.toFixed(2)} $
            </span>
          </h2>
        </div>
        <div className="pt-5">
          <button
            onClick={clearCart}
            className=" inline-block px-6 py-2.5 bg-white text-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white-700 hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out"
          >
            Claer Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
