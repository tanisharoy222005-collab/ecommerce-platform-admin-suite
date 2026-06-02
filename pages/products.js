import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Products() {
  return (
    <Layout>
      <h1>Product Catalog</h1>

      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </Layout>
  );
}
