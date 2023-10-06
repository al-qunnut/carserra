import logo from "../assets/logo.png";
import hero_img from "../assets/hero_img.svg";
import { AiOutlineSearch } from "react-icons/ai";

function Hero() {
  return (
    <>
      <div className="px-4 py-8 lg:p-[3rem] bg-gray-100 first-letter ">
        <div className="space-y-10 bg-rose-50 px-5 py-12 rounded-[20px] max-w-[900px] m-auto border border-blue-400">
          <h1 className="text-[18px]  text-center font-semibold text-purple-800">
            Finding a dream car is not that easy, but we made it easy for you in
            just one click you may able to get market details
          </h1>
          <div className="flex justify-center">
            <img src={logo} alt="" className="w-[150px] object-contain " />
          </div>
          <div className="flex justify-between px-4 items-center  rounded-full bg-white max-w-fit m-auto">
            <input
              type="text"
              className="py-2 px-4 focus:outline-none rounded-full"
            />
            <AiOutlineSearch size="20px" />
          </div>

          <div className="p-4 border-brown-600 border rounded-[18px]">
            <h3>Recent Searches:</h3>
            <p>Tesla</p>
            <p>Juke</p>
            <p>Fortuner</p>
            <p>Thundra</p>
            <p>Elentra</p>
          </div>
        </div>
      </div>

      <div className="mt-[30px] px-4 py-8 flex flex-col md:flex-row gap-4 md:gap-10">
        <img
          src={hero_img}
          className="max-w-[85%] md:max-w-[500px]  m-auto"
          alt=""
        />
        <div className="space-y-10 bg-rose-50 px-5 py-12 rounded-[20px] max-w-[900px] m-auto border border-blue-400">
          <div className="text-[20px]  font-extrabold text-purple-800 flex gap-3">
            why
            <span className="flex gap-1">
              <img src={logo} alt="" className="w-[150px] object-contain " /> ?
            </span>
          </div>
          <p>
            We've a variety of market details for cars like suzuki, toyota
            nissan, kia, tesla. ford and honda. You may find updated market
            price model and complete specifications of your dream car. So you
            may buy it
          </p>
          <button className="bg-purple-400 p-4 rounded-lg text-white">
            Get Market Details
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
