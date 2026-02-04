import { NavLink, Outlet } from "react-router-dom";
import "./navbar.css";

export default function College() {
  return (
    <div className="college" style={{ textAlign: "center" }}>
      <h1>Welcome to College Page</h1>

      <NavLink className="link" to="">
        Student
      </NavLink>

      <NavLink className="link" to="department">
        Department
      </NavLink>

      <NavLink className="link" to="details">
        Details
      </NavLink>

      <hr />

      {/* Child routes render here */}
      <Outlet />
    </div>
  );
}
