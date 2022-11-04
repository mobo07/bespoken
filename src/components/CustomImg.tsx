import { memo } from "react";
import { ImgOptions } from "../data/types";

interface Props {
  img: string;
  imgOpts: ImgOptions;
}

const CustomImg = ({ img, imgOpts }: Props) => {
  return (
    <div
      id="target-img"
      className="absolute h-full w-full cursor-grab select-none transition origin-center z-10"
      style={{ scale: `${imgOpts.size}` }}
    >
      <div className="absolute top-0 left-0 w-full h-full"></div>
      <img className="w-full h-full object-cover" src={img} alt="" />
    </div>
  );
};

export default memo(CustomImg);
