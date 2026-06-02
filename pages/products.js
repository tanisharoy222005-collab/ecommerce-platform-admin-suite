import { useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Products() {

  const [search,setSearch] =
    useState("");

  const [sort,setSort] =
    useState("default");

  let filtered =
    products.filter(product =>
      product.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  if(sort === "low"){
    filtered.sort(
      (a,b)=>
      a.price-b.price
    );
  }

  if(sort === "high"){
    filtered.sort(
      (a,b)=>
      b.price-a.price
    );
  }

  if(sort === "rating"){
    filtered.sort(
      (a,b)=>
      b.rating-a.rating
    );
  }

  if(sort === "sales"){
    filtered.sort(
      (a,b)=>
      b.sales-a.sales
    );
  }

  return (

    <Layout>

      <h1>
        Product Catalog
      </h1>

      <input
        className="search-box"
        placeholder=
        "Search products..."
        value={search}
        onChange={(e)=>
          setSearch(
            e.target.value
          )
        }
      />

      <select
        className="date-filter"
        value={sort}
        onChange={(e)=>
          setSort(
            e.target.value
          )
        }
      >

        <option value="default">
          Sort By
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

      <br /><br />

      <div className="grid">

        {filtered.map(
          product=>(
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </Layout>

  );
}
