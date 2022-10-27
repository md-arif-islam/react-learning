import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import products from "../Database/products";
import Product from "../Product/Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shop = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const shoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
    if (shoppingCart) {
      setCart(shoppingCart);
    }
  }, []);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    toast.success("Added Successfully", {
      position: "bottom-right",
      autoClose: 2000,
    });
    setCart(newCart);
    localStorage.setItem("shopping-cart", JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("shopping-cart");
  };

  return (
    <>
      <div className="w-3/4 px4-4">
        <div className="flex flex-wrap">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
      </div>
      <Cart cart={cart} clearCart={clearCart} />
      <ToastContainer />
    </>
  );
};

export default Shop;
