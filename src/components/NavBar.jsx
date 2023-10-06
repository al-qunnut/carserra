/* eslint-disable react/prop-types */
import { useState } from "react";

/* eslint-disable no-unused-vars */
function NavBar({ showNav }) {
  const nav = ["News", "Find a car", "About Us", "Contact"];

  const className = showNav ? "translate-x-0 " : "translate-x-[1000px] ";
  return (
    <div
      className={className.concat(
        "transition-all lg:translate-x-0 w-[60%] lg:w-fit duration-200 lg:bg-white lg:text-black bg-purple-800 z-30 text-white lg:p-0 p-10 absolute lg:relative right-0 top-0 bottom-0"
      )}
    >
      <ul className="flex flex-col gap-12 lg:flex-row lg:mt-0 lg:translate-x-0 lg:font-semibold  mt-12 ">
        {nav.map((nav) => (
          <li
            className="tracking-widest hover:font-extrabold cursor-pointer duration-75 transition-all "
            key={nav}
          >
            {nav}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
