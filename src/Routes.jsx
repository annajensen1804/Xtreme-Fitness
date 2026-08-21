import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import ErrorElement from "./components/feedbackElements/ErrorElement"
import Home from "./pages/Home"
import { backofficeLoader, homeLoader } from "./components/loaders/DataLoader";
import Backoffice from "./pages/backoffice/Backoffice";
import Login from "./pages/login/Login";

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

      <Route path="login" element={<Login />} />

      <Route
        path="backoffice"
        element={<Backoffice />}
        loader={backofficeLoader}
        errorElement={<ErrorElement />}
      />
    </Route>,
  ),
);

export default routes;
