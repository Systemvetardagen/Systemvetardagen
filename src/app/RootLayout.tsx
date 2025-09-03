// src/app/routes/RootLayout.jsx
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "@/ui";
import ScrollToTop from "@/lib/utilities/ScrollToTop";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}
