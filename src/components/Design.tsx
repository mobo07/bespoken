import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { TDesign } from "../data/types";

interface Props {
  design: TDesign;
}

const Design = ({ design }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/designlab", {
      state: {
        design,
      },
    });
  };

  return (
    <div className="group relative select-none w-36 h-36">
      <div className="absolute top-0 z-[1] w-full h-full flex items-center justify-center bg-[#00000066] opacity-0 transition duration-200 group-hover:opacity-100">
        <div
          className="w-8 h-8 rounded-full bg-white flex items-center justify-center m-3 cursor-pointer transition hover:scale-110 hover:bg-[#e9f5f5] text-xl"
          onClick={handleClick}
        >
          <BiSearchAlt2 />
        </div>
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center m-3 cursor-pointer transition hover:scale-110 hover:bg-[#e9f5f5] text-xl">
          <AiOutlineHeart />
        </div>
      </div>
      <img
        className="w-full h-full object-cover select-none"
        src={design.img}
        alt=""
      />
    </div>
  );
};

export default Design;
