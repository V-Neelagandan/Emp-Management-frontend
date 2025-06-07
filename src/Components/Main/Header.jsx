import { useNavigate, Link } from "react-router-dom";
import '../../CSS/Header.css'

const Header = () => {
  const username = sessionStorage.getItem("username");
  const password = sessionStorage.getItem("password");
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");
    navigate("/");
  };
  return (
    <>
      <div className="header" id="header">
        <nav
          style={{ height: "50px", width: "100%" }}
          className="navbar navbar-expand-lg bg-body-primary"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <h4>Employee Management System</h4>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                {username && password && (
                  <>
                    <li className="nav-item">
                      <Link to={"/View"} className="nav-link">
                        View All Employees
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/Add"} className="nav-link">
                        Add Employee
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a to="logout" className="nav-link" onClick={logout}>
                        Log out
                      </a>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
              </ul>
              <form className="d-flex p-1" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
              <button className="btn btn-outline-info" type="submit">
                Search
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
