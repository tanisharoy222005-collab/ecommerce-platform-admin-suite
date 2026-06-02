import Layout from "../components/Layout";
import { useStore } from "../context/StoreContext";

export default function Checkout() {
  const {
    cart,
    checkout
  } = useStore();

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <Layout>
      <h1>Checkout</h1>

      <h2>
        Order Total: ${total}
      </h2>

      <button
        className="primary-btn"
        onClick={checkout}
      >
        Place Order
      </button>
    </Layout>
  );
}
