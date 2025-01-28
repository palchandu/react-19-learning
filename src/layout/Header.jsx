import { Link } from "react-router";
import { useTheme } from "../Theme/ThemeContext";
const Header = () => {
  const { theme, toggleTheme } = useTheme("light");
  return (
    <header>
      <nav className={`navbar navbar-expand-lg` + (theme === "dark" ? " navbar-dark bg-dark" : " navbar-light bg-light")}>
        <div className="container-fluid">
          <a className="navbar-brand" to={`/`}>
            Learning React
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={`/`}>
                  Actions
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/hooks`}>
                  Hooks
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item form-check form-switch">
                {theme === "light" ? (
                  <i className="ri-sun-line"></i>
                ) : (
                  <i className="ri-moon-line" style={{color:"black"}}></i>
                )}
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="theme"
                  onClick={toggleTheme}
                  checked={theme === "dark"}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
