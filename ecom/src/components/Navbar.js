import React from "react";
import { navbarLinks } from "../jsonData/navbarLinks";
import SearchBar from "./SearchBar";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="Navbar container">
      <div className="Navbar-container row">
        <div
          className="Navbar-logo col-lg-3 col-md-10"
          onClick={() => {
            window.location.href = window.location.origin;
          }}
        >
          Exclusive
        </div>
        <div className="Navbar-links col-lg-5">
          <ul className="Navbar-links-list d-flex">
            {navbarLinks.map((link) => {
              return (
                <li
                  onClick={() => {
                    window.location.href = window.location.origin + link.url;
                  }}
                  className="Navbar-link"
                  key={link.id}
                >
                  {link.label}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="Navbar-options col-lg-4 d-flex">
          <SearchBar />
          <IoHeartOutline className="Navbar-icon" />
          <IoCartOutline className="Navbar-icon" />
          {/* <LuUser2 className="Navbar-user" /> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
