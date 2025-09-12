
import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";

export  function Navbar() {
  return (
    <header className={css.navbar}>
      <div className={css.inner}>
       
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
     
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className={css.icons}>
            <button className={css.iconBtn} >
              <img src="search.png" />
            </button>
            <button className={css.iconBtn} >
              <img src="heart.png" />
            </button>

            <button className={css.iconBtn} >
              <img src="shopping-bag.png"height="30px"width="30px"/>
            </button>
            <button className={css.iconBtn}>
              <img src="user.png" />
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
