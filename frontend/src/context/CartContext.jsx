import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const exist = cart.find((i) => i._id === item._id);

    if (exist) {
      setCart((prevCart) =>
        prevCart.map((i) =>
          i._id === item._id ? { ...exist, qty: exist.qty + 1 } : i
        )
      );
      return;
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const addToCartFromSingleProduct = (item, qty) => {
    const exist = cart.find((i) => i._id === item._id);

    if (exist) {
      setCart((prevCart) =>
        prevCart.map((i) => (i._id === item._id ? { ...exist, qty: qty } : i))
      );
      return;
    } else {
      setCart([...cart, { ...item, qty: qty }]);
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  const incrementQty = (item) => {
    console.log(item);

    setCart((prevCart) =>
      prevCart.map((i) =>
        i._id === item._id ? { ...i, qty: item.qty + 1 } : i
      )
    );
  };

  const decrementQty = (item) => {
    console.log(item);
    if (item.qty === 1) {
      removeFromCart(item._id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((i) =>
        i._id === item._id ? { ...item, qty: item.qty - 1 } : i
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQty,
        decrementQty,
        addToCartFromSingleProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
