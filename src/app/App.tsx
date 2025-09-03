import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Navbar, Footer } from "@/ui/layout";
import ScrollToTop from "@/lib/utilities/ScrollToTop";

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

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/studentdashboard" element={<StudentDashboardPage />} />

        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/companies/:companyId" element={<CompanyPage />} />
        <Route
          path="/companies/signup"
          element={<CompanySignupPage temp={"Hello world"} />}
        />

        <Route path="/visit-info" element={<VisitInfoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </QueryClientProvider>
  );
};

export default App;
