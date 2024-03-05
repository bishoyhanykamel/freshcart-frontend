import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "@components";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="container py-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
