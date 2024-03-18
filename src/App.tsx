import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import School from "./pages/School";
import Blogs from "./pages/Blogs";
import About from "./pages/About";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "school",
          element: <School />,
        },
        {
          path: "blogs",
          element: <Blogs />,
        },
        {
          path: "contact",
          element: <h1>Contact</h1>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
