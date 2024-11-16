import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import News from "../components/News";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import SecureRoute from "../secure/SecureRoute";
import NewsDetails from "../pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <h3>NOt Found</h3>,
    children: [
      {
        path: "",
        element: <Navigate to="category/01"></Navigate>,
      },
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "category/:id",
            element: <News></News>,
            loader: ({ params }) =>
              fetch(
                `https://openapi.programming-hero.com/api/news/category/${params.id}`
              ),
          },
        ],
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "career",
        element: <Career></Career>,
      },
    ],
  },
  {
    path: "news/:newsId",
    element: <NewsDetails></NewsDetails>,
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.newsId}`),
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    errorElement: <h3>Not Found</h3>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
