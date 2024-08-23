import { createBrowserRouter } from "react-router-dom";
//** Pages **//
import App from "./App";
import Page from "./pages/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/page",
        element: <Page />,
      },
    ],
  },
]);

export { router };
