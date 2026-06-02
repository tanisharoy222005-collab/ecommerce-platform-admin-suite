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

  // ✅ subtotal (quantity-safe)
  const subtotal = cart.reduce(
    (sum, item) =>
      sum + item.price * (item.quantity || 1),
    0
  );

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  // ✅ total item count
  const totalItems = cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <Layout>
      <h1 style={{ marginBottom: "30px" }}>
        Shopping Cart
      </h1>

      <div className="cart-layout">

        {/* LEFT SIDE - ITEMS */}
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
                  {/* MINUS */}
                  <button
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                    disabled={
                      (item.quantity || 1) <= 1
                    }
                    style={{
                      opacity:
                        (item.quantity || 1) <= 1
                          ? 0.4
                          : 1,
                      cursor:
                        (item.quantity || 1) <= 1
                          ? "not-allowed"
                          : "pointer",
                    }}
                  >
                    −
                  </button>

                  {/* QTY */}
                  <span>
                    {item.quantity || 1}
                  </span>

                  {/* PLUS */}
                  <button
                    onClick={() =>
                      increaseQty(item.id)
                    }
                  >
                    +
                  </button>

                  {/* REMOVE */}
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
            <span>{totalItems}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <div className="summary-row">
            <span>Tax (10%)</span>
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
