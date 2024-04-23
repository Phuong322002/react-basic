import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import Test2 from "./exmaple/example_class";
import Test from "./exmaple/example";
import TodoComponent from "./Todo/TodoComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListUser from "./Users/listUser";
import DetailUser from "./Users/detailUser";

import NavComponent from "./Nav/NavComponents";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Homepage from "./exmaple/HomeComponent";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavComponent />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Test2/> */}
          {/* <Test/> */}
          {/* <TodoComponent /> */}

          {/* tạo path */}
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/todo">
              <TodoComponent />
            </Route>
            <Route path="/about">
              <Test2 />
            </Route>
            <Route path="/user" exact={true}>
              <ListUser />
            </Route>
            <Route path='/user/:id'>
               <DetailUser/>
            </Route>
          </Switch>
        </header>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;
