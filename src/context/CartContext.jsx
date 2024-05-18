import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const isItemAlreadyInCart = cart.find(
      (product) => product.item_details.title === item.title
    );

    if (isItemAlreadyInCart) {
      const newCart = cart.map((prod) =>
        prod.item_details.title === item.title
          ? { ...prod, qty: prod.qty + 1 }
          : prod
      );
      setCart(newCart);
    } else {
      setCart((prevState) => [
        ...prevState,
        { id: cart.length + 1, qty: 1, item_details: item },
      ]);
    }
  };

  const removeFromCart = (itemId) => {
    const newCart = cart.map((prod) =>
      prod.id === itemId ? { ...prod, qty: prod.qty - 1 } : prod
    );
    const filteredCart = newCart.filter((prod) => prod.qty > 0);
    setCart(filteredCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
