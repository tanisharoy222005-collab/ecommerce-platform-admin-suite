import Layout from "../components/Layout";
import { useStore } from "../context/StoreContext";

export default function Cart() {
  const { cart } = useStore();

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <Layout>
      <h1>Shopping Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - ${item.price}
        </div>
      ))}

      <h2>Total: ${total}</h2>
    </Layout>
  );
}
