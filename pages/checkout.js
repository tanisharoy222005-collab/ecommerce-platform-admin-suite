import { useState } from "react";
import Layout from "../components/Layout";
import { useStore } from "../context/StoreContext";

export default function Checkout() {

  const { cart } = useStore();

  const [paymentMethod, setPaymentMethod] =
    useState("upi");

  const subtotal = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.1;

  const total = subtotal + tax;

  const proceedToPayment = () => {

    if (paymentMethod === "upi") {
      window.location.href =
        `/payment?method=upi&amount=${total}`;
    }

    if (paymentMethod === "card") {
      window.location.href =
        `/payment?method=card&amount=${total}`;
    }
  };

  return (
    <Layout>

      <h1
        style={{
          marginBottom: "30px"
        }}
      >
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
              marginTop: "30px"
            }}
          >
            Payment Method
          </h2>

          <div
            style={{
              marginTop: "20px"
            }}
          >

            <label
              style={{
                display: "block",
                marginBottom: "15px"
              }}
            >
              <input
                type="radio"
                checked={
                  paymentMethod ===
                  "upi"
                }
                onChange={() =>
                  setPaymentMethod(
                    "upi"
                  )
                }
              />

              {" "}
              UPI Payment
            </label>

            <label
              style={{
                display: "block"
              }}
            >
              <input
                type="radio"
                checked={
                  paymentMethod ===
                  "card"
                }
                onChange={() =>
                  setPaymentMethod(
                    "card"
                  )
                }
              />

              {" "}
              Credit / Debit Card
            </label>

          </div>

        </div>

        <div className="checkout-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>
              {cart.length}
            </span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>
              ₹{subtotal.toFixed(2)}
            </span>
          </div>

          <div className="summary-row">
            <span>Tax</span>
            <span>
              ₹{tax.toFixed(2)}
            </span>
          </div>

          <div className="summary-row total-row">
            <span>Total</span>
            <span>
              ₹{total.toFixed(2)}
            </span>
          </div>

          <button
            className="primary-btn"
            style={{
              width: "100%",
              marginTop: "20px"
            }}
            onClick={
              proceedToPayment
            }
          >
            Proceed To Payment
          </button>

        </div>

      </div>

    </Layout>
  );
}
