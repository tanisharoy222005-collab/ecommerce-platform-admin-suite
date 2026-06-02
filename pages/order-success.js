import Layout from "../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStore } from "../context/StoreContext";

export default function OrderSuccess() {

  const router = useRouter();

  const { amount } =
    router.query;

  const { orders } =
    useStore();

  const latestOrder =
    orders[0];

  return (

    <Layout>

      <div
        style={{
          maxWidth: "800px",
          margin: "60px auto",
          textAlign: "center"
        }}
      >

        <div
          style={{
            fontSize: "80px"
          }}
        >
          ✅
        </div>

        <h1
          style={{
            marginTop: "20px"
          }}
        >
          Payment Successful
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginTop: "10px"
          }}
        >
          Thank you for your purchase.
        </p>

        <div
          className="chart"
          style={{
            marginTop: "40px",
            textAlign: "left"
          }}
        >

          <h2>
            Order Details
          </h2>

          <div
            className="summary-row"
          >
            <span>
              Order ID
            </span>

            <span>
              {
                latestOrder?.id
              }
            </span>
          </div>

          <div
            className="summary-row"
          >
            <span>
              Date
            </span>

            <span>
              {
                latestOrder?.date
              }
            </span>
          </div>

          <div
            className="summary-row"
          >
            <span>
              Amount Paid
            </span>

            <span>
              ${amount}
            </span>
          </div>

          <div
            className="summary-row"
          >
            <span>
              Status
            </span>

            <span>
              Processing
            </span>
          </div>

          <div
            className="summary-row"
          >
            <span>
              Delivery ETA
            </span>

            <span>
              3-5 Business Days
            </span>
          </div>

        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent:
              "center",
            marginTop: "35px"
          }}
        >

          <Link
            href="/products"
          >
            <button
              className="secondary-btn"
            >
              Continue Shopping
            </button>
          </Link>

          <Link
            href="/admin"
          >
            <button
              className="primary-btn"
            >
              View Analytics
            </button>
          </Link>

        </div>

      </div>

    </Layout>
  );
}
