import Layout from "../components/Layout";
import { useStore } from "../context/StoreContext";
import Link from "next/link";

export default function Cart() {
  const { cart } = useStore();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const tax = subtotal * 0.1;

  const total = subtotal + tax;

  return (
    <Layout>

      <h1 style={{ marginBottom: "30px" }}>
        Shopping Cart
      </h1>

      <div className="cart-layout">

        <div>

          {cart.length === 0 ? (
            <div className="cart-item">
              Cart is empty
            </div>
          ) : (
            cart.map((item, index) => (
              <div
                className="cart-item"
                key={index}
              >
                <h3>{item.name}</h3>

                <p>
                  {item.description}
                </p>

                <div className="price">
                  ${item.price}
                </div>
              </div>
            ))
          )}

        </div>

        <div className="order-summary">

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

          <Link href="/checkout">
            <button
              className="primary-btn"
              style={{
                width: "100%",
                marginTop: "20px"
              }}
            >
              Proceed To Checkout
            </button>
          </Link>

        </div>

      </div>

    </Layout>
  );
}
