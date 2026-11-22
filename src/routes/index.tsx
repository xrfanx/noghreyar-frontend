// وظیفه : تعریف و مدیریت روت های برنامه


import { Routes, Route } from "react-router-dom";

import { ROUTES } from "./paths";

import PublicLayout from "../layouts/public/PublicLayout";
import AuthLayout from "../layouts/auth/AuthLayout";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";



import HomePage from "../pages/public/HomePage";
import ContactPage from "../pages/public/ContactPage";
import AboutPage from "../pages/public/AboutPage";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

import DashboardPage from "../pages/dashboard/DashboardPage";
import TransactionsPage from "../pages/dashboard/TransactionsPage";
import WalletPage from "../pages/dashboard/WalletPage";


import NotFoundPage from "../pages/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
        <Route path={ROUTES.WALLET} element={<WalletPage />} />
        <Route path={ROUTES.TRANSACTIONS} element={<TransactionsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default AppRoutes;