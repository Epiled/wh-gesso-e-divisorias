import Image from "../assets/img/banner.png";
import type { ServiceProp } from "../components/Service";
// import DivisoriaEucatexPage from "../pages/ServicesPage/DivisoriaEucatexPage";
// import DrywallPage from "../pages/ServicesPage/DrywallPage";
// import ForroDePVCPage from "../pages/ServicesPage/ForroDePVCPage";
// import ForroModularPage from "../pages/ServicesPage/ForroModularPage";
// import ForrosDeGessoPage from "../pages/ServicesPage/ForrosDeGessoPage";
// import ForrovidPage from "../pages/ServicesPage/ForrovidPage";
// import LuminariasPage from "../pages/ServicesPage/LuminariasPage";
// import SancaPage from "../pages/ServicesPage/SancaPage";
interface ServiceRoute {
  id: string;
  // component: React.ComponentType;
}

const services: (ServiceRoute & ServiceProp)[] = [
  {
    id: "forro-de-gesso",
    title: "Forro de Gesso",
    text: "Acabamentos modernos em gesso que valorizam o ambiente com elegância e sofisticação.",
    image: Image,
    link: "/forro-de-gesso",
  },
  {
    id: "sanca",
    title: "Sanca",
    text: "Projetos de sancas abertas, fechadas e iluminadas para ambientes mais modernos.",
    image: Image,
    link: "/sanca",
  },
  {
    id: "luminarias",
    title: "Luminárias",
    text: "Estruturas em gesso para iluminação embutida com design moderno e funcional.",
    image: Image,
    link: "/luminarias",
  },
  {
    id: "divisoriaEucatex",
    title: "Divisória Eucatex",
    text: "Divisórias práticas e resistentes para organização de ambientes corporativos.",
    image: Image,
    link: "/divisoriaEucatex",
  },
  {
    id: "forrovid",
    title: "Forrovid",
    text: "Forros removíveis ideais para ambientes comerciais que exigem praticidade.",
    image: Image,
    link: "/forrovid",
  },
  {
    id: "forroDePVC",
    title: "Forro De PVC",
    text: "Soluções em PVC resistentes, econômicas e fáceis de manter no dia a dia.",
    image: Image,
    link: "/forroDePVC",
  },
  {
    id: "forroModular",
    title: "Forro Modular",
    text: "Forros modulares com instalação prática e acabamento profissional.",
    image: Image,
    link: "/forroModular",
  },
  {
    id: "drywall",
    title: "Drywall",
    text: "Paredes e estruturas em drywall com rapidez, leveza e excelente acabamento.",
    image: Image,
    link: "/drywall",
  },
];

export const servicesRoutes = services.toSorted((a, b) => {
  return a.title.localeCompare(b.title);
});