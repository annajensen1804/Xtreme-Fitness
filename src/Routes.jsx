import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import ErrorElement from "./components/feedbackElements/ErrorElement"
import Home from "./pages/Home"

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} errorElement={<ErrorElement />} />
      </Route>
    </Route>,
  ),
);

export default routes;
