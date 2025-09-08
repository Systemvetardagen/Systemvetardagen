// src/app/Router.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFoundPage } from "@/pages";
import RootLayout from "./RootLayout";

import {
  LandingPage,
  AboutPage,
  CompaniesPage,
  CompanyPage,
  CompanySignupPage,
  VisitInfoPage,
  SignupPage,
  StudentDashboardPage,
} from "@/pages";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/studentdashboard" element={<StudentDashboardPage />} />

        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/companies/:companyId" element={<CompanyPage />} />
        <Route
          path="/companies/signup"
          element={<CompanySignupPage temp="Hello world" />}
        />

        <Route path="/visit-info" element={<VisitInfoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
