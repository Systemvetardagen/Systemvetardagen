import { Outlet } from "react-router-dom";
import { Navbar, Footer} from "@/ui";
import ScrollToTop from "@/lib/utilities/ScrollToTop";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop />
      <main className="flex flex-col grow bg-background text-text">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
