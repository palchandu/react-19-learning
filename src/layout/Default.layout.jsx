import "../css/default.layout.css";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
const DefaultLayout = () => {
  return (
    <div className="default-layout d-flex flex-column justify-content-between align-item-between">
      <Header />
      <div className="content-area flex-grow-1">
        <Outlet />
      </div>
      <div className="footer-area mb-auto">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
