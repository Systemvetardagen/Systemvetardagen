import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import TemporaryLanding from "./pages/Landing/TemporaryLanding";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignupForm from "./pages/SignupForm";
import StudentDashboard from "./pages/StudentDashboard";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

import Companies from "./pages/Companies/Companies";
import CompanySignup from "./pages/Companies/CompanySignup";
import CompanyPage from "./pages/Companies/CompanyPage";

import VisitInfo from "./pages/Info/VisitInfo";
import VisitInfoTest from "./pages/Info/VisitInfoTest";
import About from "./pages/About/About";
import ScrollToTop from "./utilities/ScrollToTop";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/" element={<TemporaryLanding />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />

        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/:companyId" element={<CompanyPage />} />
        <Route
          path="/companies/signup"
          element={<CompanySignup temp={"Hello world"} />}
        />

        <Route path="/visit-info" element={<VisitInfo />} />
        <Route path="/visit-info-test" element={<VisitInfoTest />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </QueryClientProvider>
  );
};

export default App;
