import Image from "../assets/img/banner.png";
import DivisoriaEucatexPage from "../pages/ServicesPage/DivisoriaEucatexPage";
import DrywallPage from "../pages/ServicesPage/DrywallPage";
import ForroDePVCPage from "../pages/ServicesPage/ForroDePVCPage";
import ForroModularPage from "../pages/ServicesPage/ForroModularPage";
import ForrosDeGessoPage from "../pages/ServicesPage/ForrosDeGessoPage";
import ForrovidPage from "../pages/ServicesPage/ForrovidPage";
import LuminariasPage from "../pages/ServicesPage/LuminariasPage";
import SancaPage from "../pages/ServicesPage/SancaPage";

export const servicesRoutes = [
  {
    id: "forro-de-gesso",
    text: "Forro de Gesso",
    image: Image,
    route: "/forro-de-gesso",
    component: ForrosDeGessoPage,
  },
  {
    id: "sanca",
    text: "Sanca",
    image: Image,
    route: "/sanca",
    component: SancaPage,
  },
  {
    id: "luminarias",
    text: "Luminárias",
    image: Image,
    route: "/luminarias",
    component: LuminariasPage,
  },
  {
    id: "divisoriaEucatex",
    text: "Divisória Eucatex",
    image: Image,
    route: "/divisoriaEucatex",
    component: DivisoriaEucatexPage,
  },
  {
    id: "forrovid",
    text: "Forrovid",
    image: Image,
    route: "/forrovid",
    component: ForrovidPage,
  },
  {
    id: "forroDePVC",
    text: "Forro De PVC",
    image: Image,
    route: "/forroDePVC",
    component: ForroDePVCPage,
  },
  {
    id: "forroModular",
    text: "Forro Modular",
    image: Image,
    route: "/forroModular",
    component: ForroModularPage,
  },
  {
    id: "drywall",
    text: "Drywall",
    image: Image,
    route: "/drywall",
    component: DrywallPage,
  },
];