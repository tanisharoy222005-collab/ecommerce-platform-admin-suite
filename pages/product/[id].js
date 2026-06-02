import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import products from "../../data/products";

export default function ProductDetail() {

  const router =
    useRouter();

  const { id } =
    router.query;

  const product =
    products.find(
      p =>
      p.id === Number(id)
    );

  if(!product){
    return null;
  }

  return (

    <Layout>

      <div className="chart">

        <h1>
          {product.name}
        </h1>

        <br />

        <p>
          {product.description}
        </p>

        <br />

        <p>
          Brand:
          {" "}
          {product.brand}
        </p>

        <p>
          SKU:
          {" "}
          {product.sku}
        </p>

        <p>
          Category:
          {" "}
          {product.category}
        </p>

        <p>
          Rating:
          {" "}
          {product.rating}
        </p>

        <p>
          Reviews:
          {" "}
          {product.reviews}
        </p>

        <p>
          Stock:
          {" "}
          {product.stock}
        </p>

        <br />

        <h2>
          ${product.price}
        </h2>

      </div>

    </Layout>
  );
}
