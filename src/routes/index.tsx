import { AdminLayout } from "@/components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

const Dashboard = lazy(() => import("@/features/Dashboard"));

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      element: <AdminLayout />,
      children: [
        {
          path: "/*",
          Component: Dashboard,
        },
        {
          path: "/",
          Component: Dashboard,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
