import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./pages/Home"

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppLayout />}>
        <Route
          index
          element={<Home />}
          
        />
      </Route>
    </Route>,
  ),
);

export default routes;
