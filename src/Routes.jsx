import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import ErrorElement from "./components/feedbackElements/ErrorElement"
import Home from "./pages/Home"
import { homeLoader } from "./components/loaders/DataLoader";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppLayout />}>
        <Route
          index
          element={<Home />}
          loader={homeLoader}
          errorElement={<ErrorElement />}
        />
      </Route>
    </Route>,
  ),
);

export default routes;
