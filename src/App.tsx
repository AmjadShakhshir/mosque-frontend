import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";

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
          element: <h1>About</h1>,
        },
        {
          path: "services",
          element: <h1>Services</h1>,
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
