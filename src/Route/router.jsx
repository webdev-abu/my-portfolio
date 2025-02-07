import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Page/ErrorPage";
import ProjectDetails from "../Components/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);

export default router;
