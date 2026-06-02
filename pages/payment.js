import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useStore } from "../context/StoreContext";

export default function Payment() {

  const router = useRouter();

  const { checkout } = useStore();

  const {
    method,
    amount
  } = router.query;

  const handlePayment = () => {

    checkout();

    if (method === "upi") {

      alert(
        "Launching UPI Payment..."
      );

      window.location.href =
        `upi://pay?pa=commerceos@upi&pn=CommerceOS&am=${amount}&cu=USD`;

      setTimeout(() => {

        router.push(
          `/order-success?amount=${amount}`
        );

      }, 1500);

      return;
    }

    alert(
      "Card Payment Successful"
    );

    router.push(
      `/order-success?amount=${amount}`
    );
  };

  return (

    <Layout>

      <div className="checkout-progress">

        <div>✓ Cart</div>

        <div>✓ Checkout</div>

        <div>✓ Payment</div>

        <div>Complete</div>

      </div>

      <h1>
        Secure Payment Gateway
      </h1>

      <div
        className="checkout-summary"
        style={{
          maxWidth: "700px",
          marginTop: "30px"
        }}
      >

        <h2>
          Payment Details
        </h2>

        <div
          style={{
            marginTop: "20px"
          }}
        >

          <p>
            Method:
            {" "}
            <strong>
              {method?.toUpperCase()}
            </strong>
          </p>

          <p
            style={{
              marginTop: "10px"
            }}
          >
            Amount:
            {" "}
            <strong>
              ${amount}
            </strong>
          </p>

        </div>

        {method === "card" && (

          <div
            style={{
              marginTop: "25px"
            }}
          >

            <input
              placeholder="Card Number"
            />

            <input
              placeholder="Card Holder Name"
            />

            <input
              placeholder="Expiry Date"
            />

            <input
              placeholder="CVV"
            />

          </div>

        )}

        {method === "upi" && (

          <div
            className="payment-method-box"
          >

            <h3>
              Select UPI App
            </h3>

            <ul>

              <li>
                Google Pay
              </li>

              <li>
                PhonePe
              </li>

              <li>
                Paytm
              </li>

              <li>
                BHIM
              </li>

            </ul>

            <p
              style={{
                marginTop: "15px"
              }}
            >
              UPI ID:
              {" "}
              <strong>
                commerceos@upi
              </strong>
            </p>

          </div>

        )}

        <button
          className="primary-btn"
          style={{
            width: "100%",
            marginTop: "25px"
          }}
          onClick={
            handlePayment
          }
        >
          Pay ${amount}
        </button>

      </div>

    </Layout>

  );
}
