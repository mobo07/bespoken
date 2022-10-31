import Navbar from "../components/Navbar";
import { YouthSizes, AdultSizes } from "../data/types";
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineSave } from "react-icons/ai";
import LeftPanel from "../components/LeftPanel";
import Footer from "../components/Footer";

const youthSizes: YouthSizes[] = ["YXS", "YS", "YXL"];
const adultSizes: AdultSizes[] = ["S", "M", "L", "XL", "2XL"];
const colors = [
  "bg-black",
  "bg-white",
  "bg-red-700",
  "bg-blue-500",
  "bg-[#faf0bb]",
];

const DesignLab = () => {
  return (
    <div className="">
      <Navbar />

      <div className="flex px-3 h-[calc(100vh_-_70px)]">
        {/* Left Panel */}
        <LeftPanel />

        {/* Right Panel */}
        <div className="px-6 flex-1 flex flex-col justify-between">
          {/* Colors */}
          <div className="">
            <h3 className="font-semibold text-lg text-[#300710]">Color:</h3>
            <div className="my-4 flex items-center">
              {colors.map((color, idx) => (
                <div
                  key={idx}
                  className={`w-8 h-8 rounded-full ${color} border border-slate-200 mr-3 cursor-pointer`}
                ></div>
              ))}
            </div>
          </div>
          {/* Sizes */}
          <div className="">
            <h3 className="font-semibold text-lg text-[#300710]">Size:</h3>
            <p className="my-4 text-sm">Youth Sizes</p>
            <div className="my-2">
              {youthSizes.map((size, idx) => (
                <span
                  key={idx}
                  className="text-xl mr-3 px-2 py-1 rounded-md hover:bg-[#0000001a] cursor-pointer transition duration-300"
                >
                  {size}
                </span>
              ))}
            </div>
            <p className="my-4 text-sm">Adult Sizes</p>
            <div className="my-2">
              {adultSizes.map((size, idx) => (
                <span
                  key={idx}
                  className="text-xl mr-3 px-2 py-1 rounded-md hover:bg-[#0000001a] cursor-pointer transition duration-300"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
          {/* Buttons */}
          <div className="w-full flex justify-end items-center my-5">
            <button className="px-2 w-20 h-8 mx-4 flex items-center justify-center rounded-md bg-[#300710] text-white text-sm">
              Price{" "}
              <span className="ml-2">
                <BsCreditCard />
              </span>
            </button>
            <button className="px-2 w-20 h-8 mx-4 flex items-center justify-center rounded-md border border-[#300710] text-sm">
              Save{" "}
              <span className="ml-2">
                <AiOutlineSave />
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default DesignLab;
