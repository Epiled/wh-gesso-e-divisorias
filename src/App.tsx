import { RouterProvider } from "react-router";
import PublicRoutes from "./routes";

function App() {
  return <RouterProvider router={PublicRoutes} />;
}

export default App;
