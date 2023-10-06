import React from "react";
import benz from "../assets/benz.png";
import audi from "../assets/audi.png";
import kia from "../assets/kia.png";
import toyota from "../assets/toyota.png";
import suziki from "../assets/suziki.png";
import porsche from "../assets/porsche.png";
import teslas from "../assets/teslas.png";
import bmw from "../assets/bmw.png";

function Market() {
  const cars = [benz, audi, kia, toyota, suziki, porsche, teslas, bmw];
  return (
    <div className=" px-4 py-8 bg-gray-100">
      <h2 className="font-extrabold text-center text-purple-700 mb-3">
        Featured Market:
      </h2>
      <div className=" bg-rose-50 md:grid-cols-4  py-12 grid grid-cols-2 items-stretch justify-stretch gap-4 rounded-[20px]  max-w-[900px] m-auto border border-blue-400">
        {cars.map((car, id) => (
          <img
            key={id}
            src={car}
            alt=""
            className="w-[100px] object-contain m-auto"
          />
        ))}
      </div>
    </div>
  );
}

export default Market;
