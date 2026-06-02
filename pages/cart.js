import Layout from "../components/Layout";
import { useStore } from "../context/StoreContext";
import Link from "next/link";

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useStore();

  // ✅ subtotal with quantity
  const subtotal = cart.reduce(
    (sum, item) =>
      sum + item.price * (item.quantity || 1),
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

        {/* LEFT SIDE - CART ITEMS */}
        <div>

          {cart.length === 0 ? (
            <div className="cart-item">
              Cart is empty
            </div>
          ) : (
            cart.map((item) => (
              <div
                className="cart-item"
                key={item.id}
              >
                <h3>{item.name}</h3>

                <p>{item.description}</p>

                <div className="price">
                  ${item.price}
                </div>

                {/* QUANTITY CONTROLS */}
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <button
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity || 1}
                  </span>

                  <button
                    onClick={() =>
                      increaseQty(item.id)
                    }
                  >
                    +
                  </button>

                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    style={{
                      marginLeft: "10px",
                      color: "red",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}

        </div>

        {/* RIGHT SIDE - SUMMARY */}
        <div className="order-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>
              {cart.reduce(
                (sum, item) =>
                  sum +
                  (item.quantity || 1),
                0
              )}
            </span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <div className="summary-row">
            <span>Tax</span>
            <span>
              ${tax.toFixed(2)}
            </span>
          </div>

          <div className="summary-row total-row">
            <span>Total</span>
            <span>
              ${total.toFixed(2)}
            </span>
          </div>

          <Link href="/checkout">
            <button
              className="primary-btn"
              style={{
                width: "100%",
                marginTop: "20px",
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
