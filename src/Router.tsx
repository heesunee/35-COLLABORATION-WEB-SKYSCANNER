import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import Layout from "./Layout.tsx";
import Wish from "./pages/wish";
import Reservation from "./pages/reservation";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 아울렛
    children: [
      { index: true, element: <Home /> },
      { path: '/reservation', element: <Reservation /> },
      { path: '/wish', element: <Wish /> },
    ]
  },
]);