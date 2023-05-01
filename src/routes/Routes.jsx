import React from "react";
import { Navbar } from "react-bootstrap";
import { createBrowserRouter } from "react-router-dom";
import Header from "../Navbar/Header";
import Home from "../Home/Home";
import IntroPage from "../layouts/IntroPage/IntroPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage></IntroPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
