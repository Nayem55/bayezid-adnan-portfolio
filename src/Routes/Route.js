import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";



import TodaysSale from "../Pages/Homepage/Homepage";
import Home from "../Pages/Homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <TodaysSale/>,
      },
      {
        path: "/home",
        element: <Home/>,
      },

    ],
  },

]);

export default router;
