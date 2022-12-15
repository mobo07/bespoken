import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsCardImage } from "react-icons/bs";
import { ImgOptions, Product } from "../data/types";
import useDragger from "../hooks/useDragger";
import CustomImg from "./CustomImg";
import RangeSlider from "./RangeSlider";

interface Props {
  activeOutfit: Product | undefined;
  outfits: Product[] | undefined;
  img: File | string | undefined;
  setImg: React.Dispatch<React.SetStateAction<File | string | undefined>>;
}

const LeftPanel = (
  { activeOutfit, outfits, img, setImg }: Props,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const [preview, setPreview] = useState<string>();
  const [imgOpts, setImgOpts] = useState<ImgOptions>({
    size: "1",
  });
  const uploadContainerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<number>(0);

  useLayoutEffect(() => {
    const getPosition = () => {
      const imgWrapper = document.getElementById("img-wrapper");
      const uploadContainer = uploadContainerRef.current;
      if (!uploadContainer || !imgWrapper) return;

      let left = uploadContainer.clientWidth;
      let computedStyles = window.getComputedStyle(
        uploadContainer.firstElementChild!
      );
      let marginLeft = computedStyles.getPropertyValue("margin-left");
      setPosition(left - +marginLeft.slice(0, marginLeft.length - 2));
      imgWrapper.style.left = `-${position}px`;
    };
    getPosition();
    window.addEventListener("resize", getPosition);
    const cleanup = () => {
      window.removeEventListener("resize", getPosition);
      return cleanup;
    };
  }, [position, activeOutfit]);

  useEffect(() => {
    if (!img) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) setPreview(reader.result as string);
    };
    reader.readAsDataURL(img as File);
  }, [img]);

  useDragger(
    "target-img",
    "container",
    "img-wrapper",
    activeOutfit?.color[0]!,
    preview
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (file) setImg(file);
  };

  const handleImgOpts = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImgOpts((prevState: ImgOptions) => ({
      ...prevState,
      size: e.target.value,
    }));
  };

  return (
    <div
      id="container"
      className="flex flex-[1.7] bg-[#d3cece] h-full overflow-x-hidden touch-none"
    >
      <div ref={uploadContainerRef} className="flex-1 h-full p-3">
        <div className="relative w-[100px] h-[100px] mx-auto bg-white shadow-md flex items-center justify-center">
          {img ? (
            <CustomImg img={preview} imgOpts={imgOpts} />
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
            accept="image/*"
            onChange={(e) => handleFileInput(e)}
            className="hidden"
            id="upload"
          />
        </label>
      </div>
      <div className="flex-[4] h-full p-3 flex flex-col items-center">
        {/* T-shirts Wrapper */}
        <div ref={ref} className="relative h-full w-full">
          {/* Custom Img Wrapper */}
          <div
            id="img-wrapper"
            className="absolute top-0 left-0 w-[100px] h-[100px]"
          ></div>
          {outfits?.map((cloth) => (
            <div
              key={cloth._id}
              className="absolute mx-auto w-[90%] h-[90%] z-0 opacity-0 transition duration-300"
              style={{
                zIndex: activeOutfit?._id === cloth._id ? "1" : undefined,
                opacity: activeOutfit?._id === cloth._id ? "1" : undefined,
              }}
            >
              <img
                className="w-full h-full object-contain"
                src={activeOutfit?.img}
                alt=""
              />
            </div>
          ))}
        </div>
        {preview ? (
          <RangeSlider imgOpts={imgOpts} handleImgOpts={handleImgOpts} />
        ) : null}
      </div>
    </div>
  );
};

export default React.forwardRef(LeftPanel);
