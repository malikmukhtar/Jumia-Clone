import React from "react";
import "../Style/categories.css";
import Heading from "./Heading";
import Product from "./Product";
import Intro from "./Intro";
import { data } from "../Library/stock";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

function Categories(props) {
  const [products, setProducts] = useState(null);
  const [meta, setMeta] = useState(null);

  const fetchAllCategoryProducts = async (page) => {
    const p = page || 1;
    const response = await axios.get(
      `https://atlas-hack.herokuapp.com/product?&page=${p}&limit=10&categoryId=${props.categoryId}`
    );
    setProducts(response?.data?.result);
    setMeta(response?.data?.paging);
  };

  useEffect(() => {
    try {
      fetchAllCategoryProducts();
    } catch (error) {
      console.log("Fetch All Category Product Error", error);
    }
  }, [props.categoryId]);

  const handlePagination = (page) => {
    fetchAllCategoryProducts(page.selected + 1);
  };



  return (
    <div className="home">
      <Intro />
      <Heading heading={props.section} className="heading" />
      <div className="home_row">
        {products?.map((item) => (
          <Product
            id={item._id}
            key={item._id}
            title={item.name}
            price={item.price}
            rating={4}
            image={item.image}
          />
        ))}
      </div>
      <div className="container-paginate">
        <div>
          Showing 1 to {meta?.limit} of {meta?.totalItems} entries
        </div>

        <div>
          <ReactPaginate
            nextLabel="Next"
            breakLabel="..."
            previousLabel="Prev"
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
            pageCount={meta?.totalPages}
            // activeClassName="active"
            breakClassName="page-item"
            pageClassName={"page-item"}
            breakLinkClassName="page-link"
            // nextLinkClassName={"page-link"}
            pageLinkClassName={"page-link"}
            nextClassName={"page-item next"}
            // previousLinkClassName={"page-link"}
            previousClassName={"page-item prev"}
            onPageChange={(page) => handlePagination(page)}
            // forcePage={props.currentPage !== 0 ? props.currentPage - 1 : 0}
            containerClassName={
              "pagination react-paginate justify-content-end p-1"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;
