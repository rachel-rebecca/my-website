import { Outlet, NavLink } from "react-router-dom";

export default function NavbarDesktop () {
    return(
        <div id="navbar_desktop_container">
             <nav className="navbar" id="header_navbar">
        <NavLink
          className="header-li"
          id="nav_home"
          to="/"
          style={{ textDecoration: "none" }}
        >
          Home
        </NavLink>

        <NavLink
          className="header-li"
          id="nav_projects"
          to="/projects"
          style={{ textDecoration: "none" }}
        >
          Projects
        </NavLink>

        <NavLink
          className="header-li"
          id="nav_experience"
          to="/experience"
          style={{ textDecoration: "none" }}
        >
          Experience
        </NavLink>

        <NavLink
          className="header-li"
          id="nav_education"
          to="/education"
          style={{ textDecoration: "none" }}
        >
          Education
        </NavLink>

        <NavLink
          className="header-li"
          id="nav_NavLinks"
          to="/links"
          style={{ textDecoration: "none" }}
        >
          Links
        </NavLink>
        <NavLink
          className="header-li"
          id="nav_contact"
          to="/contact"
          style={{ textDecoration: "none" }}
        >
          Contact
        </NavLink>
      </nav>
        </div>
    )
}