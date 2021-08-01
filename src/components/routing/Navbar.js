import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-link" to="/expenses">
              Expenses
            </NavLink>
            <NavLink className="nav-link" to="/counters">
              Counters
            </NavLink>
            <NavLink className="nav-link" to="/posts">
              Posts
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
