import React from "react";
import navItems from "../helpers/navItems";
import { Link } from "react-router-dom";

export default function Header() {
  const links = navItems();
  return (
    <div className="w-full navbar bg-neutral text-neutral-content">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <Link to="/" className="flex-1 px-2 mx-2">
        Lead Management
      </Link>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {links.map((navItem, index) => (
            <li>
              <Link className="btn btn-ghost" to={navItem.link}>
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
