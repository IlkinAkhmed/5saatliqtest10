import { NavLink, useNavigate } from "react-router-dom";
import "./index.scss";
import { useState } from "react";

function MobileNav() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="mobile-nav">
      <div className="mobile-nav-icons">
        <i className="fa-solid fa-search"></i>
        <i
          onClick={() => navigate("/cart")}
          className="fa-solid fa-bag-shopping"
        ></i>
        <i
          onClick={() => navigate("/wishlist")}
          className="fa-regular fa-heart"
        ></i>
        <i
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={`fa-solid ${isNavOpen ? "fa-xmark" : "fa-bars"}`}
        ></i>
      </div>
      <ul className={`nav-texts ${isNavOpen ? "nav-active" : ""}`}>
        <li>
          <NavLink to={"/"} className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className="nav-link">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to={"/add"} className="nav-link">
            Add Page
          </NavLink>
        </li>
        <li>
          <NavLink to={"/blog"} className="nav-link">
            Blog
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
