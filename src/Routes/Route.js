import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Homepage/Homepage";
import Portfolio from "../Pages/Portfolio";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/portfolio",
        element: <Portfolio/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },

    ],
  },

]);

export default router;
