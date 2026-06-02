import Link from "next/link";
import { useStore } from "../context/StoreContext";

export default function Navbar() {
  const { cart } = useStore();

  // ✅ total cart quantity (safe fallback)
  const cartCount = cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        CommerceOS
      </div>

      {/* NAV LINKS */}
      <div className="nav-links">

        <Link href="/">Dashboard</Link>

        <Link href="/products">Products</Link>

        {/* CART WITH BADGE */}
        <Link href="/cart">
          <div style={{ position: "relative", display: "inline-block" }}>
            Cart

            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-12px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "12px",
                  padding: "2px 6px",
                  minWidth: "18px",
                  textAlign: "center",
                }}
              >
                {cartCount}
              </span>
            )}
          </div>
        </Link>

        <Link href="/checkout">Checkout</Link>

        <Link href="/admin">Analytics</Link>

      </div>
    </nav>
  );
}
