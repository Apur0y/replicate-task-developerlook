import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import "./styles/index.css";
import App from "./app/App";
import LegacyIn from "./app/components/home/LegacyIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/animate",
    element: <LegacyIn />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);