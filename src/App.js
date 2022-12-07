import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Componets/Header";
import Home from "./Componets/Home";
import Checkout from "./Componets/Checkout";
import Search from "./Componets/Search";
import Login from "./Componets/Login";
import Footer from "./Componets/Footer";
import Categories from "./Componets/Categories";
import { useStateValue } from "../src/ContextAPI/StateProvider";
// import { auth } from "./FireBase/Firebase";
import { Unsubscribe } from "@material-ui/icons";
import SearchItem from "./Componets/SearchItem";

function App() {
  const [{ user }, dispatch] = useStateValue();

  //code to run on a given condition
  useEffect(() => {
    // auth.onAuthStateChanged((authUser) => {
    //   if (authUser) {
    //     //loggrd in
    //     dispatch({
    //       type: "SET_USER",
    //       user: authUser,
    //     });
    //   } else {
    //     //logged out
    //     dispatch({
    //       type: "SET_USER",
    //       user: null,
    //     });
    //   }
    // });
    return () => {
      Unsubscribe();
    };
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/computing">
            <Header />
            <Categories section="computing" categoryId='' />
            <Footer />
          </Route>

          <Route path="/sporting">
            <Header />
            <Categories section="Sports" categoryId=''/>
            <Footer />
          </Route>

          <Route path="/electronics">
            <Header />
            <Categories section="Electronics" categoryId='638c529f62b5585bdd0e0f5d'/>
            <Footer />
          </Route>

          <Route path="/phoneTablets">
            <Header />
            <Categories section="Phones and Tablets" categoryId='638c528c62b5585bdd0e0f54'/>
            <Footer />
          </Route>

          <Route path="/supermarket">
            <Header />
            <Categories section="Supermarket" categoryId='638c529462b5585bdd0e0f58'/>
            <Footer />
          </Route>
          <Route path="/search/:q">
            <Header />
            <SearchItem/>
            <Footer />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
