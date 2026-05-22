import { createBrowserRouter, Outlet } from "react-router";
import { Menu } from "../components/Menu";
import { CallToAction } from "../components/CallToAction";
import { Footer } from "../components/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ServicesPage from "../pages/ServicesPage";

const Layout = () => {
  return (
    <>
      <Menu />
      <main>
        <Outlet />
      </main>
      <CallToAction />
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
        path: "quem-somos",
        Component: AboutPage,
      },
      {
        path: "servicos",
        Component: ServicesPage,
      },
      {
        path: "contato",
        Component: ContactPage,
      },
    ],
  },
]);

export default PublicRoutes;
