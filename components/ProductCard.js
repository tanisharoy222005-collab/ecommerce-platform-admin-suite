export default function ProductCard({ product }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <h4>${product.price}</h4>

      <button>Add to Cart</button>
    </div>
  );
}
