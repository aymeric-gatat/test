import { createBrowserRouter } from "react-router-dom";
//** Pages **//
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export { router };
