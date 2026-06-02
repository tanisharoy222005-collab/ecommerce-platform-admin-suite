import Link from "next/link";
import { useStore } from "../context/StoreContext";

export default function ProductCard({
  product
}) {

  const { addToCart } =
    useStore();

  return (

    <div className="product-card">

      <div className=
      "product-image-placeholder">

        {product.name.charAt(0)}

      </div>

      <div className=
      "product-info">

        <h3>
          {product.name}
        </h3>

        <p>
          {product.description}
        </p>

        <div className=
        "rating">

          ★ {product.rating}

        </div>

        <div className=
        "stock">

          Stock:
          {" "}
          {product.stock}

        </div>

        <div className=
        "price">

          ${product.price}

        </div>

        <Link
          href={`/product/${product.id}`}
        >
          <button
            className=
            "secondary-btn"
          >
            View Details
          </button>
        </Link>

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
