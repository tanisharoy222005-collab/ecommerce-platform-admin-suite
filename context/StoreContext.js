import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const StoreContext = createContext();

export function StoreProvider({
  children
}) {

  const [cart, setCart] =
    useState([]);

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {

    const savedCart =
      JSON.parse(
        localStorage.getItem(
          "cart"
        )
      ) || [];

    const savedOrders =
      JSON.parse(
        localStorage.getItem(
          "orders"
        )
      ) || [];

    setCart(savedCart);
    setOrders(savedOrders);

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  useEffect(() => {

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

  }, [orders]);

  const addToCart = (
    product
  ) => {

    setCart((prev) => {

      const existing =
        prev.find(
          (item) =>
            item.id ===
            product.id
        );

      if (existing) {

        return prev.map(
          (item) =>
            item.id ===
            product.id
              ? {
                  ...item,
                  quantity:
                    item.quantity +
                    1
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

  const removeFromCart = (
    id
  ) => {

    setCart((prev) =>
      prev.filter(
        (item) =>
          item.id !== id
      )
    );
  };

  const checkout = () => {

    const order = {

      id:
        "ORD-" +
        Date.now(),

      date:
        new Date().toLocaleDateString(),

      items: cart,

      total: cart.reduce(
        (sum, item) =>
          sum +
          item.price *
            item.quantity,
        0
      ),

      status:
        "Processing"
    };

    setOrders(
      (prev) => [
        order,
        ...prev
      ]
    );

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

export const useStore =
  () =>
    useContext(
      StoreContext
    );
