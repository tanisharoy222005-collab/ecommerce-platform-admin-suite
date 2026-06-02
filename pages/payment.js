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

      window.location.href =
        `upi://pay?pa=demo@upi&pn=CommerceOS&am=${amount}&cu=INR`;

      return;
    }

    alert(
      "Card Payment Successful"
    );

    window.location.href =
      "/admin";
  };

  return (
    <Layout>

      <h1>
        Payment Gateway
      </h1>

      <div
        className="checkout-summary"
        style={{
          maxWidth: "650px",
          marginTop: "30px"
        }}
      >

        <h2>
          Payment Details
        </h2>

        <p
          style={{
            marginTop: "15px"
          }}
        >
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
            ₹{amount}
          </strong>
        </p>

        {method === "card" && (

          <>
            <input
              placeholder="Card Number"
              style={{
                marginTop: "25px"
              }}
            />

            <input
              placeholder="Card Holder Name"
            />

            <input
              placeholder="MM / YY"
            />

            <input
              placeholder="CVV"
            />
          </>

        )}

        {method === "upi" && (

          <>
            <div
              style={{
                background:
                  "#1e293b",
                padding: "20px",
                borderRadius:
                  "12px",
                marginTop: "25px"
              }}
            >
              Supported Apps

              <br /><br />

              Google Pay

              <br />

              PhonePe

              <br />

              Paytm

              <br />

              BHIM
            </div>
          </>

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
          Pay ₹{amount}
        </button>

      </div>

    </Layout>
  );
}
