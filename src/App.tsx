import { RouterProvider } from "react-router";
import PublicRoutes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import { WhatsappContact } from "./components/WhatsAppContact";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={PublicRoutes} />
      <WhatsappContact />
    </>
  );
}

export default App;
