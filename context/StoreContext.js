import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const checkout = () => {
    if (cart.length === 0) return;

    const order = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      items: cart,
      total: cart.reduce(
        (sum, item) => sum + item.price,
        0
      )
    };

    setOrders((prev) => [...prev, order]);
    setCart([]);
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        orders,
        addToCart,
        checkout
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () =>
  useContext(StoreContext);
