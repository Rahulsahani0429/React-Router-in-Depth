import { NavLink, Link, Outlet } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <Link to="/">MyLogo</Link>
        </div>
        <div>
          <ul>
            <li>
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/Login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/college">
                College
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/users">
                Users
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/users/list">
                List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
