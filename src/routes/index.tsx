import { createBrowserRouter, Outlet } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import ForrosDeGessoPage from "../pages/ServicesPage/ForrosDeGessoPage";
import Gesso3DPage from "../pages/ServicesPage/Gesso3DPage";
import SancaPage from "../pages/ServicesPage/SancaPage";
import MolduraPage from "../pages/ServicesPage/MolduraPage";
import LuminariasPage from "../pages/ServicesPage/LuminariasPage";

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
          {
            path: "forro-de-gesso",
            Component: ForrosDeGessoPage,
          },
          {
            path: "gesso-3d",
            Component: Gesso3DPage,
          },
          {
            path: "Sanca",
            Component: SancaPage,
          },
          {
            path: "Moldura",
            Component: MolduraPage,
          },
          {
            path: "luminarias",
            Component: LuminariasPage,
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
