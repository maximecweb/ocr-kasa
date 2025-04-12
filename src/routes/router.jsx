import React from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import HomePage from "../pages/Homepage";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import Navbar from "../components/Navbar";
import ApartmentPage from "../pages/ApartmentPage";
import About from "../pages/About";
import { ErrorPageNotFound } from "../pages/ErrorPageNotFound";

const HeaderFooterLayout = () => {
  return (
    <>
      <div id="mainbody">
        <Navbar />
        <Main>
        <Outlet />
        </Main>
      </div>
      <div id="divfooter">
      <Footer />
      </div>
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    // errorElement: <ErrorPageNotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/flat/:id",
        element: <ApartmentPage />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "*",
        element: <Navigate to="/404" />
      },
      {
        path: "/404",
        element: <ErrorPageNotFound /> // Capture toutes les routes inexistantes
      }
    ]
  }
]);
