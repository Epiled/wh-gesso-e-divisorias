import { RouterProvider } from "react-router";
import PublicRoutes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={PublicRoutes} />
    </>
  );
}

export default App;
