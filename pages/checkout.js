import Layout from "../components/Layout";
import { useStore } from "../context/StoreContext";

export default function Checkout() {

  const {
    cart,
    checkout
  } = useStore();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const tax = subtotal * 0.1;

  const total = subtotal + tax;

  return (
    <Layout>

      <h1 style={{ marginBottom: "30px" }}>
        Secure Checkout
      </h1>

      <div className="checkout-grid">

        <div className="checkout-form">

          <h2>Customer Details</h2>

          <input
            placeholder="Full Name"
          />

          <input
            placeholder="Email Address"
          />

          <input
            placeholder="Phone Number"
          />

          <input
            placeholder="Shipping Address"
          />

          <h2
            style={{
              marginTop: "25px"
            }}
          >
            Payment Method
          </h2>

          <input
            placeholder="Card Number"
          />

          <input
            placeholder="Expiry Date"
          />

          <input
            placeholder="CVV"
          />

        </div>

        <div className="checkout-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>

          <div className="summary-row">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="summary-row total-row">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            className="primary-btn"
            style={{
              width: "100%",
              marginTop: "20px"
            }}
            onClick={checkout}
          >
            Place Order
          </button>

        </div>

      </div>

    </Layout>
  );
}
