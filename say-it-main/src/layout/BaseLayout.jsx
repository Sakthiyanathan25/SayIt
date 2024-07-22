import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";

const BaseLayout = () => {
  const location = useLocation();
  return (
    <main className="w-full h-full">
      <Header />
      <div className="w-full flex items-center">
        {location.pathname === "/" ? (
          <>
            <Home />
          </>
        ) : (
          <>
            <Outlet />
          </>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default BaseLayout;
