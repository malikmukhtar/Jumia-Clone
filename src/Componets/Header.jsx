import React, { useState } from "react";
import "../Style/Header.css";
import { images } from "../Library/images";

import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../ContextAPI/Reducer";
import { useStateValue } from "../ContextAPI/StateProvider";
import axios from "axios";
// import { auth } from "../FireBase/Firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const [input, setInput] = useState("");
  const [autoComplete, setAutoComplete] = useState([]);
  const [{}, dispatch] = useStateValue();
  const history = useHistory();

  function login() {
    if (user) {
      // auth.signOut();
    }
  }

  const handleSearch = () => {
    history.push(`/search/${input}`);
  };

  const handleAutoComplete = async (text) => {
    setInput(text);
    try {
      const response = await axios.get(
        `https://atlas-hack.herokuapp.com/search/auto_complete?term=${text}`
      );
      setAutoComplete(response?.data?.result);
    } catch (error) {
      console.log("Autocomplete error", error);
    }
  };

  const onSuggestHandler = async (text) => {
    setInput(text);
    setAutoComplete([]);
    try {
      const response = await axios.get(
        `https://atlas-hack.herokuapp.com/search?term=${text}`
      );
      // setAutoComplete(response?.data?.result);
      console.log("amala", response);
    } catch (error) {
      console.log("Autocomplete error", error);
    }
  };

  return (
    <>
      <nav className="header">
        <Link to="/">
          <img className="header_logo" src={images.logo} alt="logo" />
        </Link>
        <form action="" className="header_search">
          <div className="header_search">
            <SearchIcon className="header_searchIcon" />
            <input
              value={input}
              onChange={(e) => handleAutoComplete(e.target.value.toLowerCase())}
              type="text"
              placeholder="Search products, brands and categories"
              className="header_searchInput"
            />
          </div>

          {!input ? (
            ""
          ) : (
            <button onClick={handleSearch} className="search_button">
              SEARCH{" "}
            </button>
          )}
        </form>

        <div className="header_nav">
          <Link to={!user && "/"} className="header_link">
            <div onClick={login} className="header_option">
              <span className="header_optionLineOne">
                <AccountCircleOutlinedIcon /> {user?.email}
              </span>
              <span className="header_optionLineTwo">
                {user ? "Sign Out" : "Login"}
              </span>
            </div>
          </Link>
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne gone">
                <HelpOutlineOutlinedIcon />
              </span>
              <span className="header_optionLineTwo gone">Help</span>
            </div>
          </Link>

          <Link to="/checkout" className="header_link ">
            <div className="header_optionBasket">
              <span className="header_optionBasket_title gone">Cart</span>
              <ShoppingCartOutlinedIcon className="cart_img" />
              <span className="header_optionLineTwo header_basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
      <div className="autocomplete-items">
        {autoComplete &&
          autoComplete?.map((auto, i) => (
            <Link to={`/search/${auto.name.toLowerCase()}`}>
              <div
                key={i}
                className="suggestion"
                onClick={() => onSuggestHandler(auto.name.toLowerCase())}
              >
                {auto.name}
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}

export default Header;
