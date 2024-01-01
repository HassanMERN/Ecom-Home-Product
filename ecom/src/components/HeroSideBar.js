import React from "react";
import { catagories } from "../jsonData/catagories";

function HeroSideBar() {
  return (
    <div className="Sidebar col-lg-2">
      <ul className="Sidebar-list ">
        {catagories.map((catagory, index) => {
          return (
            <li className="Sidebar-tabs" key={index}>
              {catagory.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HeroSideBar;
