import React from "react";
import { CartState } from "../Context/Context";
import { productReducer } from "../Context/reducers";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
    productState: { byFastDelivery, searchQuery, byStock, sort, byRating },
  } = CartState();

  const transfromProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= byRating);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= byRating);
      console.log(sortedProducts);
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.category.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  };

  console.log(transfromProducts());

  return (
    <main className="home">
      <Filters />
      <div className="product-container">
        {transfromProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
