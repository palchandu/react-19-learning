import "../css/default.layout.css";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "../Theme/ThemeContext";
const DefaultLayout = () => {
   const styles = {
     light: {
       backgroundColor: "#fff",
       color: "#000",
       padding: "20px",
       minHeight: "100vh",
     },
     dark: {
       backgroundColor: "#333",
       color: "#fff",
       padding: "20px",
       minHeight: "100vh",
     },
   };
  const { theme } = useTheme('light');
  return (
    <div className="default-layout d-flex flex-column justify-content-between align-item-center p-4" style={theme === "light" ? styles.light : styles.dark}>
      <div className="header-area">
        <Header />
      </div>
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
