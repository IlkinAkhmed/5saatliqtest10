import { NavLink, useNavigate } from "react-router-dom";
import "./index.scss";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="nav-inner">
        <div className="logo">
          <img
            src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png"
            alt=""
          />
        </div>
        <ul className="nav-texts">
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
        <div className="nav-icons">
          `<i className="fa-solid fa-search"></i>
          <i
            onClick={() => navigate("/cart")}
            className="fa-solid fa-bag-shopping"
          ></i>
          <i
            onClick={() => navigate("/wishlist")}
            className="fa-regular fa-heart"
          ></i>
          `
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
