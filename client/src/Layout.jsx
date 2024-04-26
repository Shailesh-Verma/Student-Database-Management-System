import React from "react";
import { Link, Outlet } from "react-router-dom";
import home from './Assets/home-icon.png'
import view from './Assets/view.png'

const Layout = () => {
  return (
    <div>
      <nav className="nav-container">
        <ul className="navlink-container">
          <li>
            <Link to="/">Home 
            <span className="img-container">
            <img src={home} alt="Home Icon" height="15px" width="18px"></img>
            </span>
            </Link>
          </li>
          <li>
            <Link to="/viewall">ViewAll 
            <span className="img-container">
            <img src={view} alt="View Icon" height="15px" width="18px"></img>
            </span>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
