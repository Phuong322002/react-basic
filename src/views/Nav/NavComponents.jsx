import React from "react";
import "./nav.scss";
import { Link, NavLink } from "react-router-dom";

class NavComponent extends React.Component {
  render() {
    return (
      <div class="topnav">
        {/* dùng NavLink của react-router-dom   */}
        <NavLink to="/" activeClassName="active" exact={true}>
          Home
        </NavLink>
        <NavLink to="/todo" activeClassName="active">
              Todo
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to ='/user' activeClassName='active'>
          User 
        </NavLink>

        {/* thẻ Link của react-router-dom */}
        {/* <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/about">About</Link> */}

        {/* default */}
        {/* <a class="active" href="/">Home</a>
        <a href="/todo">Todo</a>
        <a href="/about">About</a> */}
      </div>
    );
  }
}

export default NavComponent;
