import { useStore } from "../context/StoreContext";

export default function ProductCard({ product }) {
  const { addToCart } = useStore();

  return (
    <div className="product-card">

      <div className="product-image-placeholder">
        {product.name.charAt(0)}
      </div>

      <div className="product-info">

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="rating">
          ★★★★★
        </div>

        <div className="price">
          ${product.price}
        </div>

        <div className="stock">
          In Stock
        </div>

        <button
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}
