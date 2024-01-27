import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects"
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Fragment>
        <Home />
      </React.Fragment>
    ),
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);