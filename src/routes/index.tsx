import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
  useLocation,
} from "react-router";

import { Menu } from "../components/Menu";
import { CallToAction } from "../components/CallToAction";
import { Footer } from "../components/Footer";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ServicesPage from "../pages/ServicesPage";

import { servicesRoutes } from "../constants/servicesRoutes";
import { LayoutContainer, LayoutMain } from "./styles";

const Layout = () => {
  const location = useLocation();

  const isContactPage = location.pathname === "/contato";

  return (
    <LayoutContainer>
      <Menu />
      <LayoutMain>
        <Outlet />
      </LayoutMain>
      {!isContactPage && <CallToAction />}
      <Footer />
      <ScrollRestoration />
    </LayoutContainer>
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
        path: "quem-somos",
        Component: AboutPage,
      },
      {
        path: "servicos",
        children: [
          { index: true, Component: ServicesPage },
          ...servicesRoutes.map((service) => {
            const { link, component } = service;

            return {
              path: link.replace("/", ""),
              Component: component,
            };
          }),
        ],
      },
      {
        path: "contato",
        Component: ContactPage,
      },
    ],
  },
]);

export default PublicRoutes;
