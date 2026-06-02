import Layout from "../components/Layout";

export default function Cart() {
  return (
    <Layout>
      <h1>Shopping Cart</h1>

      <img
        src="/cart.png"
        alt="Cart"
        className="hero-image"
      />

      <ul>
        <li>Wireless Headphones</li>
        <li>Gaming Mouse</li>
      </ul>

      <h3>Total: $158</h3>
    </Layout>
  );
}
