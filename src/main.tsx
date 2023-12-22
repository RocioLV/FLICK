import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Welcome";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  // se crea un objeto router utilizando la fx createBrowserRouter que define las rutas y los componentes asociados a esas rutas.
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // crea un punto de entrada en el DOM utilizando la función de createRoot
  // luego renderiza el componente <RouterProvider> dentro de un componente <React.StrictMode>
  // es utilizado para proveer las rutas definidas en el objeto router a los componentes hijos que las necesiten.
  <React.StrictMode>
    <RouterProvider router={router} />
    {/*el componente <RouterProvider> recibe el prop router que contiene las rutas definidas previamente en el objeto router. */}
  </React.StrictMode>
);
