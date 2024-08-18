import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Projects from "./pages/projects"
import { GlobalDataManager } from "./context/GlobalDataManager";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Fragment>
        <App />
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
<GlobalDataManager>
<RouterProvider router={router} />
</GlobalDataManager>
   
  </React.StrictMode>
);