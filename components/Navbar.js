import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        CommerceOS
      </div>

      <div className="nav-links">
        <Link href="/">Dashboard</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/checkout">Checkout</Link>
        <Link href="/admin">Analytics</Link>
      </div>
    </nav>
  );
}
