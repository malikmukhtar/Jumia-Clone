import React from "react";
import "../Style/categories.css";
import Heading from "./Heading";
import Product from "./Product";
import Intro from "./Intro";
import { data } from "../Library/stock";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Categories(props) {
  const [products, setProducts] = useState(null);
  const [meta, setMeta] = useState(null);

  const fetchAllCategoryProducts = async (page) => {
    const p = page || 1;
    const response = await axios.get(
      `https://atlas-hack.herokuapp.com/product?&page=${p}&limit=20`
    );
    // console.log('heyyyy', response?.data?.result)
    setProducts(response?.data?.result);
    setMeta(response?.data?.paging);
  };

  useEffect(() => {
    try {
      fetchAllCategoryProducts();
    } catch (error) {
      console.log("Fetch All Category Product Error", error);
    }
  }, []);
  return (
    <div className="home">
      <Intro />
      <Heading heading={props.section} className="heading" />
      <div className="home_row">
        {data
          .filter((filteredData) => filteredData.category === props.section)
          .map((item) => (
            <Product
              id={item.id}
              key={item.id}
              title={item.desc}
              price={item.price}
              rating={item.star}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
}

export default Categories;
