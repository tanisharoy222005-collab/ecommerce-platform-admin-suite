import Layout from "../components/Layout";
import { useStore } from "../context/StoreContext";

export default function Payment() {

  const {
    cart,
    checkout
  } = useStore();

  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );

  const payNow = () => {

    checkout();

    window.location.href =
      `upi://pay?pa=demo@upi&pn=CommerceOS&am=${total}&cu=INR`;
  };

  return (
    <Layout>

      <h1>
        UPI Payment Gateway
      </h1>

      <div
        className="checkout-summary"
        style={{
          maxWidth: "600px",
          marginTop: "30px"
        }}
      >
        <h2>
          Amount Payable
        </h2>

        <div className="price">
          ₹{total}
        </div>

        <button
          className="primary-btn"
          style={{
            width: "100%",
            marginTop: "20px"
          }}
          onClick={payNow}
        >
          Pay via UPI
        </button>
      </div>

    </Layout>
  );
}
