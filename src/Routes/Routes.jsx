import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import AllApps from "../pages/AllApps/AllApps";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AppDetails from "../pages/AppDetails/AppDetails";
import AppNotFoundPage from "../pages/AppNotFoundPage/AppNotFoundPage";
import InstalledApps from "../pages/InstalledApp/InstalledApps";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/public/appsData.JSON"),
        path: "/",
        Component: Home,
      },
      {
        path: "/all-apps",
        loader: () => fetch("/public/appsData.JSON"),
        Component: AllApps,
      },
      {
        path: "/app-details/:id",
        loader: () => fetch("/public/appsData.JSON"),
        Component: AppDetails,
        errorElement: <AppNotFoundPage></AppNotFoundPage>,
      },
      {
        path: "/installed-app-list",
        loader: () => fetch("/public/appsData.JSON"),
        Component: InstalledApps,
      },
    ],
  },
]);
