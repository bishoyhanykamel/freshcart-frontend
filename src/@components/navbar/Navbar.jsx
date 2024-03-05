import { Logo } from "@assets";
import { Link } from "react-router-dom";

import {HOME_PATH, LOGIN_PATH, PRODUCTS_PATH, REGISTER_PATH, CATEGORIES_PATH, CART_PATH, BRANDS_PATH} from '@routes';


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to={HOME_PATH}>
            <img src={Logo} alt="" />
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={HOME_PATH}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={CART_PATH}>
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={PRODUCTS_PATH}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={BRANDS_PATH}>
                  Brands
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={CATEGORIES_PATH}>
                  Categories
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={LOGIN_PATH}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={REGISTER_PATH}>
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
