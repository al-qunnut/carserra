import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="py-10 px-4 bg-purple-400 text-white flex flex-col md:flex-row gap-5 md:gap-10">
      <img
        src={logo}
        className="w-[150px] object-contain md:m-0 m-auto "
        alt=""
      />
      <div>
        <h1 className="font-semibold">Find Support</h1>
        <p>infor@caserra.com</p>
        <p>www.carserra.com</p>
        <p>admin@carserra.com</p>
      </div>
      <div>
        <h1 className="font-semibold">Find Us On</h1>
        <p>Facebook</p>
        <p>Twiter</p>
        <p>Instagram</p>
      </div>
      <div>
        <h1 className="font-semibold">Find Specification</h1>
        <div className="flex gap-4 flex-col md:flex-row">
          <span>
            <p>Toyota</p>
            <p>Honda</p>
            <p>Tesla</p>
          </span>
          <span>
            <p>Porsche</p>
            <p>KIA</p>
            <p>Mercedes</p>
          </span>
          <span>
            <p>BMW</p>
            <p>Audi</p>
            <p>Nissan</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
