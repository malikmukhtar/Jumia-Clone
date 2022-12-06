import React, { useEffect } from "react";
import "../Style/Home.css";
import Product from "./Product";
import Intro from "./Intro";
import JumiaBusinesses from "./JumiaBusinesses";
import Heading from "./Heading";
import { data } from "../Library/stock";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState(null);
  const [meta, setMeta] = useState(null);

  const fetchAllProducts = async (page) => {
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
      fetchAllProducts();
    } catch (error) {
      console.log("Fetch All Product Error", error);
    }
  }, []);


  return (
    <div className="home">
      <Intro />
      <JumiaBusinesses />

      <Heading heading="Supermarket" className="heading" />
      <div className="home_row">
        {products
          ?.filter((filrterdData) => filrterdData.category === "638c529462b5585bdd0e0f58").slice(0,5)
          .map((item) => (
            <Product
              id={item._id}
              key={item._id}
              title={item.description}
              price={item.price}
              rating={4}
              image={item.image}
            />
          ))}
      </div>

      <Heading heading="Phones and Tablets" className="heading" />
      <div className="home_row">
        {products
          ?.filter((filrterdData) => filrterdData.category === "638c528c62b5585bdd0e0f54").slice(0,5)
          .map((item) => (
            <Product
              id={item._id}
              key={item._id}
              title={item.description}
              price={item.price}
              rating={3}
              image={item.image}
            />
          ))}
      </div>

      <Heading heading="Electronics" className="heading" />
      <div className="home_row">
        {products
          ?.filter((filrterdData) => filrterdData.category === "638c529f62b5585bdd0e0f5d").slice(0,5)
          .map((item) => (
            <Product
              id={item._id}
              key={item._id}
              title={item.description}
              price={item.price}
              rating={5}
              image={item.image}
            />
          ))}
      </div>

      {/* <Heading heading="Sports" className="heading" />
      <div className="home_row">
        {data
          .filter((filrterdData) => filrterdData.category === "Sports")
          .slice(0, 5)
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
      </div> */}

      {/* <Heading heading="Computing" className="heading" />
      <div className="home_row">
        {data
          .filter((filrterdData) => filrterdData.category === "computing")
          .slice(0, 5)
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
      </div> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
