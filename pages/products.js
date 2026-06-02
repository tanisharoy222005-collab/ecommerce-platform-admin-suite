import { useState, useMemo } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products";

export default function Products() {

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [category, setCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(
      productsData.map(
        (p) => p.category
      )
    )
  ];

  const products = useMemo(() => {

    let filtered = [...productsData];

    if (category !== "all") {
      filtered = filtered.filter(
        (product) =>
          product.category === category
      );
    }

    if (search) {
      filtered = filtered.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          product.brand
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }

    switch (sortBy) {

      case "low":
        filtered.sort(
          (a, b) =>
            a.price - b.price
        );
        break;

      case "high":
        filtered.sort(
          (a, b) =>
            b.price - a.price
        );
        break;

      case "rating":
        filtered.sort(
          (a, b) =>
            b.rating - a.rating
        );
        break;

      case "sales":
        filtered.sort(
          (a, b) =>
            b.sales - a.sales
        );
        break;

      default:
        break;
    }

    return filtered;

  }, [
    search,
    sortBy,
    category
  ]);

  return (

    <Layout>

      <div
        style={{
          marginBottom: "40px"
        }}
      >

        <h1>
          Product Catalog
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginTop: "10px"
          }}
        >
          Browse products,
          compare specifications,
          and add items
          to your cart.
        </p>

      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "2fr 1fr 1fr",
          gap: "15px",
          marginBottom: "35px"
        }}
      >

        <input
          className="search-box"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        <select
          className="search-box"
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
        >
          {categories.map(
            (cat) => (
              <option
                key={cat}
                value={cat}
              >
                {cat}
              </option>
            )
          )}
        </select>

        <select
          className="search-box"
          value={sortBy}
          onChange={(e) =>
            setSortBy(
              e.target.value
            )
          }
        >
          <option value="featured">
            Featured
          </option>

          <option value="low">
            Price Low → High
          </option>

          <option value="high">
            Price High → Low
          </option>

          <option value="rating">
            Best Rated
          </option>

          <option value="sales">
            Best Selling
          </option>

        </select>

      </div>

      <div
        style={{
          marginBottom: "20px",
          color: "#94a3b8"
        }}
      >
        Showing
        {" "}
        {products.length}
        {" "}
        products
      </div>

      <div className="grid">

        {products.map(
          (product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          )
        )}

      </div>

    </Layout>

  );
}
