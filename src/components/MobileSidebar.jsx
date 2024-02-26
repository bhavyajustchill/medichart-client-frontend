import React from "react";
import { Link } from "react-router-dom";
import navItems from "../helpers/navItems";

export default function MobileSidebar() {
  const links = navItems();
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200">
        {links.map((navItem, index) => (
          <li>
            <Link
              className=""
              onClick={(e) => {
                document.getElementById("my-drawer-3").click();
              }}
              to={navItem.link}
            >
              {navItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
