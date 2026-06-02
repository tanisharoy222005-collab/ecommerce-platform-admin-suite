import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const StoreContext = createContext();

export function StoreProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  // ✅ LOAD FROM LOCALSTORAGE (SAFE FOR NEXT.JS SSR)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    setCart(savedCart);
    setOrders(savedOrders);
  }, []);

  // ✅ SAVE CART
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ SAVE ORDERS
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // 🟢 ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1
        }
      ];
    });
  };

  // 🟢 INCREASE QTY
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1
            }
          : item
      )
    );
  };

  // 🔴 DECREASE QTY (auto-remove at 0)
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: (item.quantity || 1) - 1
              }
            : item
        )
        .filter((item) => (item.quantity || 0) > 0)
    );
  };

  // ❌ REMOVE ITEM
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // 🟢 CHECKOUT (SAFE TOTAL CALCULATION)
  const checkout = () => {
    const order = {
      id: "ORD-" + Date.now(),
      date: new Date().toLocaleDateString(),
      items: cart,
      total: cart.reduce(
        (sum, item) =>
          sum +
          item.price *
            (item.quantity || 1),
        0
      ),
      status: "Processing"
    };

    setOrders((prev) => [order, ...prev]);
    setCart([]);
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        orders,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        checkout
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);
