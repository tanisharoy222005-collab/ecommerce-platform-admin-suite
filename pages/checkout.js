import Layout from "../components/Layout";

export default function Checkout() {
  return (
    <Layout>
      <h1>Checkout</h1>

      <img
        src="/checkout.png"
        alt="Checkout"
        className="hero-image"
      />

      <p>
        Secure checkout process with payment gateway integration.
      </p>

      <button>Proceed to Payment</button>
    </Layout>
  );
}
