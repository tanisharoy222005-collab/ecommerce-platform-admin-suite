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

  useEffect(() => {
    const savedCart =
      localStorage.getItem("cart");

    const savedOrders =
      localStorage.getItem("orders");

    if (savedCart)
      setCart(JSON.parse(savedCart));

    if (savedOrders)
      setOrders(JSON.parse(savedOrders));
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );
  }, [cart, orders]);

  const addToCart = (product) => {
    const existing = cart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);
    }
  };

  const removeFromCart = (id) => {
    setCart(
      cart.filter(
        (item) => item.id !== id
      )
    );
  };

  const checkout = () => {
    const total = cart.reduce(
      (sum, item) =>
        sum +
        item.price * item.quantity,
      0
    );

    const order = {
      id: Date.now(),
      date:
        new Date().toLocaleDateString(),
      items: cart,
      total,
      status: "Paid"
    };

    setOrders([...orders, order]);
    setCart([]);
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        orders,
        addToCart,
        removeFromCart,
        checkout
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () =>
  useContext(StoreContext);
