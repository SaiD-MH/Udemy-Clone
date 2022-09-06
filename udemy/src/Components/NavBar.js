import React from "react";
import { TiThMenu } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";

import NavSection from "./NavSection.module.css";

function NavBar() {
  return (
    <nav className={NavSection._nav_bar}>
      <div className={NavSection._left_section}>
        <TiThMenu size="3em" className={NavSection.mene_logo} />

        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt="Udemy"
          className={NavSection.udemy_logo}
        />
        <span className={NavSection.cat}>Categories</span>

        <form action="">
          <button className={NavSection.to_submit}>
            <IoIosSearch size="1.5em" />
          </button>
          <input
            type="text"
            placeholder="     Search for Anything"
            className={NavSection.searchBar}
          />
        </form>
      </div>

      <div className={NavSection._mid_section}>
        <span>Udemy Business </span>
        <span>Teach On Udemy</span>
      </div>

      <div className={NavSection._right_section}>
        <AiOutlineShoppingCart size="2em" />
        <button className={NavSection._login}>login</button>
        <button className={NavSection._sign_up}> Sign up</button>
        <GrLanguage size="2em" />
      </div>
    </nav>
  );
}

export default NavBar;
