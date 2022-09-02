import { Outlet, NavLink } from "react-router-dom";

export default function NavbarMobile() {
  return (
    <div id="header_navbar_mobile">
      {/* <input aria-describedby="" type="checkbox" id="hamburger_input" className="burger-shower" /> */}

      <nav id="sidebar_menu" role="navigation" aria-label="Main menu">
        <button
          id="hamburger_menu"
          aria-controls="main_menu"
          aria-expanded="true"
          onClick={() => {
            document.querySelector("#main_menu").classList.add("open");
          }}
        ></button>
        <ul id="main_menu">
          <button
            id="main_menu_close"
            aria-label="close"
            onClick={() => {
              document.querySelector("#main_menu").classList.remove("open");
            }}
          >
            &#10006;
          </button>
          <h3>Menu</h3>

          <li>
            <NavLink
              className="mobile-li"
              id="nav_home"
              to="/"
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="mobile-li"
              id="nav_projects"
              to="/projects"
              style={{ textDecoration: "none" }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className="mobile-li"
              id="nav_experience"
              to="/experience"
              style={{ textDecoration: "none" }}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              className="mobile-li"
              id="nav_education"
              to="/education"
              style={{ textDecoration: "none" }}
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              className="mobile-li"
              id="nav_NavLinks"
              to="/links"
              style={{ textDecoration: "none" }}
            >
              Links
            </NavLink>
          </li>
          <li>
            <NavLink
              className="mobile-li"
              id="nav_contact"
              to="/contact"
              style={{ textDecoration: "none" }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="overlay"></div>
    </div>
  );
}
