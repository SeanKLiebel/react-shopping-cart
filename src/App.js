import React, { Component } from 'react';
import store from "./store";
import { Provider } from "react-redux";
import {BrowserRouter, Route, Link} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";

export default class App extends Component {
 render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
      <div className="grid-container">
        <header>
          <Link to="/">React Shopping Cart</Link>
          <Link to="/admin">Admin</Link>
        </header>
        <main>
          <Route path="/admin"component={AdminScreen} />
          <Route path="/"component={HomeScreen} exact />
         
          </main>
        <footer>All rights are reserved</footer>
       </div>
       </BrowserRouter>
     </Provider>
    )
  }
}

