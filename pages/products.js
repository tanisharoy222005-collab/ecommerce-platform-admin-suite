import { useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Products() {
  const [search, setSearch] =
    useState("");

  const filtered =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <Layout>

      <h1
        style={{
          marginBottom: "20px"
        }}
      >
        Product Catalog
      </h1>

      <input
        className="search-box"
        placeholder="Search products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="grid">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </Layout>
  );
}
