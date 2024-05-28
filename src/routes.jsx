import Layout from "@components/layout";
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";
import Music from "@pages/Music";
import Picture from "@pages/Picture";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/music",
        element: <Music />,
      },
      {
        path: "/picture",
        element: <Picture />,
      },
    ],
  },
]);

export default router;
