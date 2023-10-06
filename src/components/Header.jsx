/* eslint-disable react/prop-types */
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logo from "../assets/logo.png";
import NavBar from "./NavBar";
function Header({ handleNav, showNav }) {
  const className = "z-50 cursor-pointer lg:hidden";
  return (
    <div className="p-4 lg:p-[3rem] flex gap-2 justify-between">
      <img className="w-[150px] object-contain " src={logo} alt="" />
      <NavBar showNav={showNav} />
      {!showNav && (
        <AiOutlineMenu
          className={className}
          onClick={() => handleNav()}
          size="30px"
        />
      )}
      {showNav && (
        <AiOutlineClose
          className={className.concat(" text-white")}
          onClick={() => handleNav()}
          size="30px"
        />
      )}
    </div>
  );
}

export default Header;
