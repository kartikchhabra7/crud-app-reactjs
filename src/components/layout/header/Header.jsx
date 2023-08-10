import React from "react";
import { Link } from "react-router-dom";
import { CREATE, SHOW } from "../../../utils/constants/routes";
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand ms-2">
          <span style={{ fontfamily: "Signika, sans-serif" }}>CRUD</span>
        </Link>
        <div
          className="collapse navbar-collapse mx-4"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={CREATE}>
                CREATE{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={SHOW}>
                SHOW
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
