import { RouterProvider } from "react-router";
import PublicRoutes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={PublicRoutes} />
    </>
  );
}

export default App;
