import { Outlet, NavLink } from "react-router-dom";
import NavbarDesktop from "../subcomponents/NavbarDesktop";
import NavbarMobile from "../subcomponents/NavbarMobile";

export default function Header() {
  return (
    <div className="header-container">
      <NavbarMobile/>
      <NavbarDesktop/>
     
      <Outlet />
    </div>
  );
}
