import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>E-Commerce Suite</h2>

      <div>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/checkout">Checkout</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </nav>
  );
}
