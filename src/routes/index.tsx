import { createBrowserRouter, Navigate } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: HomePage },
      {
        path: "home",
        element: <Navigate to="/" replace />,
      },
      {
        path: "sobre",
        Component: AboutPage,
      },
      {
        path: "servicos",
        children: [
          { index: true, Component: ServicesPage },
          {
            path: "01",
            Component: ServicesPage,
          },
          {
            path: "02",
            Component: ServicesPage,
          },
        ],
      },
      {
        path: "contato",
        Component: ContactPage,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);

export default PublicRoutes;
