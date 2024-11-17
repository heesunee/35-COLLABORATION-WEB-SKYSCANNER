import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import Layout from "./Layout.tsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 아울렛
    children: [
      { index: true, element: <Home /> },
    ]
  },
]);