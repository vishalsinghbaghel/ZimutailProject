// src/components/Navbar/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";

export  function Navbar() {
  return (
    <header className={css.navbar}>
      <div className={css.inner}>
        {/* Menu links */}
        <nav className={css.menu}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${css.homelink} ${isActive ? css.active : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${css.aboutlink} ${isActive ? css.active : ""}`
            }
          >
            About us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${css.contactlink} ${isActive ? css.active : ""}`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/seller"
            className={({ isActive }) =>
              `${css.sellerlink} ${isActive ? css.active : ""}`
            }
          >
            Seller
          </NavLink>
         
        </nav>
       <h2 className="zim">Zimutail</h2>
        {/* Icons + Auth */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className={css.icons}>
            <button className={css.iconBtn} aria-label="Search">
              🔍
            </button>
            <button className={css.iconBtn} aria-label="Favorites">
              ❤️
            </button>
            <button className={css.iconBtn} aria-label="Location">
              📍
            </button>
            <button className={css.iconBtn} aria-label="Cart">
              🛍️
            </button>
            <button className={css.iconBtn} aria-label="Profile">
              👤
            </button>
          </div>

          <div className={css.auth}>
            <button className={css.signup}>Sign up</button>
            <button className={css.login}>Login</button>
          </div>
        </div>
      </div>
    </header>
  );
}
