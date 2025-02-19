import AuthLayout from "@/Layouts/AuthLayout";
import MainLayout from "@/Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />
    },
    {
        path: '/auth',
        element: <AuthLayout />
    }
])