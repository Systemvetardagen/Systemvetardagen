import { Outlet, useLocation } from "react-router-dom";
import { Navbar, Footer } from "@/components";
import { useEffect } from "react";

export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col grow bg-background text-text">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
