import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsCardImage } from "react-icons/bs";
import { ImgOptions } from "../data/types";
import useDragger from "../hooks/useDragger";
import CustomImg from "./CustomImg";
import RangeSlider from "./RangeSlider";

const LeftPanel = () => {
  const [img, setImg] = useState<string | null>();
  const [imgOpts, setImgOpts] = useState<ImgOptions>({
    size: "1",
  });

  useDragger("target-img", "container", img);

  const handleImgOpts = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImgOpts((prevState: ImgOptions) => ({
      ...prevState,
      size: e.target.value,
    }));
  };

  return (
    <div
      id="container"
      className="flex flex-[1.7] bg-[#EEE7E7] h-full overflow-x-hidden touch-none"
    >
      <div className="flex-1 h-full p-3">
        <div className="relative w-[100px] h-[100px] mx-auto my-2 bg-white shadow-md flex items-center justify-center">
          {img ? (
            <CustomImg img={img} imgOpts={imgOpts} />
          ) : (
            <BsCardImage className="text-5xl text-[#300710]" />
          )}
        </div>
        <label
          htmlFor="upload"
          className="px-2 w-20 h-8 mx-auto my-4 flex items-center justify-center bg-white rounded-md text-sm shadow-md cursor-pointer"
        >
          Upload{" "}
          <span className="ml-2">
            <AiOutlineCloudUpload />
          </span>
          <input
            type="file"
            onChange={(e) => setImg(URL.createObjectURL(e.target.files![0]))}
            className="hidden"
            id="upload"
          />
        </label>
      </div>
      <div className="flex-[4] h-full p-3 flex flex-col items-center">
        <div className="mx-auto w-[90%] h-[90%]">
          <img
            className="w-full h-full object-cover"
            src="assets/images/plain-black-shirt.png"
            alt=""
          />
        </div>
        <RangeSlider imgOpts={imgOpts} handleImgOpts={handleImgOpts} />
      </div>
    </div>
  );
};

export default LeftPanel;
