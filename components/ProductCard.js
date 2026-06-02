import { useStore } from "../context/StoreContext";

export default function ProductCard({
  product
}) {
  const { addToCart } = useStore();

  return (
    <div className="card">
      <div className="card-content">
        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <h2>${product.price}</h2>

        <button
          onClick={() =>
            addToCart(product)
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
