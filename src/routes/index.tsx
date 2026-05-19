import { createBrowserRouter, Outlet } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { servicesRoutes } from "../constants/servicesRoutes";

const Layout = () => {
  return (
    <>
      <Menu />
      <main style={{ paddingTop: "9rem" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, Component: HomePage },
      {
        path: "home",
        Component: HomePage,
      },
      {
        path: "sobre",
        Component: AboutPage,
      },
      {
        path: "servicos",
        children: [
          { index: true, Component: ServicesPage },
          ...servicesRoutes.map((service) => {
            const { route, component } = service;

            return {
              path: route.replace("/", ""),
              Component: component,
            };
          }),
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
