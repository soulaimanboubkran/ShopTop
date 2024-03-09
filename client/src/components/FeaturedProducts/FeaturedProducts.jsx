import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ types, desc }) => {
  const { data, loading, error ,url} = useFetch(
    `/products?populate=*&[filters][types][$eq]=${types}`
  );
 console.log(url)


  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{types} products</h1>
        <p>
         {desc}
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;