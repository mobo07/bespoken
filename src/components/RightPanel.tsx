import { AiOutlineShoppingCart } from "react-icons/ai";
import { Product } from "../data/types";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { addProduct } from "../redux/cartSlice";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import SkeletonLoader from "./UI/SkeletonLoader";
import { v4 as uuidv4 } from "uuid";

// PROP TYPES
interface Props {
  outfits: Product[] | undefined;
  activeOutfit: Product | undefined;
  setActiveOutfit: React.Dispatch<React.SetStateAction<Product | undefined>>;
  setOutfitCategory: React.Dispatch<
    React.SetStateAction<"t-shirt" | "sweat-shirt" | "hoodie">
  >;
  img: File | string | undefined;
  convertDivToPng: () => Promise<string | undefined>;
}

const RightPanel = ({
  outfits,
  activeOutfit,
  setActiveOutfit,
  setOutfitCategory,
  img,
  convertDivToPng,
}: Props) => {
  const dispatch = useAppDispatch();
  const [customImgUrl, setCustomImgUrl] = useState<string | undefined>(
    undefined
  );

  // POST CUSTOM OUTFIT IMG TO CLOUDINARY
  const {
    mutate: postCustomOutfit,
    isLoading: customOutfitLoading,
    error,
  } = useMutation({
    mutationFn: (customOutfit: string) => {
      console.log("uploading custom outfit to cloudinary...");
      return axios.post(
        "https://api.cloudinary.com/v1_1/douecuprk/image/upload",
        {
          file: customOutfit,
          upload_preset: "bespoken",
          cloud_name: "douecuprk",
        }
      );
    },
    onSuccess: (data) => {
      console.log("custom outfit upload -> 100%");
      if (activeOutfit)
        dispatch(
          addProduct({
            ...activeOutfit,
            cartId: `${data.data.public_id}`,
            name: `${activeOutfit.name} (item-${data.data.public_id})`,
            selectedColor: activeOutfit.color[0],
            selectedSize: activeOutfit.size[sizeIdx],
            customImg: customImgUrl ? customImgUrl : (img as string),
            customOutfitImg: data.data.secure_url,
            quantity: 1,
            totalPrice: +activeOutfit.price,
          })
        );
    },
    onError: (err) => {
      console.log("POST CUSTOM OUTFIT", err);
    },
  });

  // POST CUSTOM IMG TO CLOUDINARY
  const { isLoading: customImgLoading, mutate: postCustomImg } = useMutation({
    mutationFn: (formData: FormData) => {
      console.log("uplaoding custom img to cloudinary...");
      return axios.post(
        "https://api.cloudinary.com/v1_1/douecuprk/image/upload",
        formData
      );
    },
    onSuccess: async (data) => {
      console.log("custom img upload -> 100%");
      // console.log(data.data);
      setCustomImgUrl(data.data.secure_url);
      const divToPng = (await convertDivToPng()) as string;
      postCustomOutfit(divToPng);
    },
  });

  const [sizeIdx, setSizeIdx] = useState<number>(0);

  //ADD CUSTOM OUTFIT TO CART
  const handleClick = async () => {
    if (!activeOutfit) return;

    if (typeof img === "object") {
      //UPLOAD CUSTOM IMG TO CLOUDINARY
      const formData = new FormData();
      formData.append("file", img);
      formData.append("upload_preset", "bespoken");
      formData.append("cloud_name", "douecuprk");
      postCustomImg(formData);
    } else if (!img) {
      dispatch(
        addProduct({
          ...activeOutfit,
          cartId: uuidv4(),
          selectedColor: activeOutfit.color[0],
          selectedSize: activeOutfit.size[sizeIdx],
          quantity: 1,
          totalPrice: +activeOutfit.price,
        })
      );
    } else {
      const divToPng = (await convertDivToPng()) as string;
      postCustomOutfit(divToPng);
    }
  };

  useEffect(() => {
    setSizeIdx(0);
  }, [activeOutfit?.type]);

  return (
    <div className="px-6 flex-1 flex flex-col justify-between">
      <h1 className="text-2xl my-3 font-light md:my-0 md:text-3xl">
        {activeOutfit?.name}
      </h1>
      {/* Outfit Type */}
      <div className="">
        <h3 className="font-semibold text-lg text-[#300710]">Outfit Type:</h3>
        <div className="relative my-3 py-[0.2rem]">
          <div
            className={`${activeOutfit?.type} absolute bottom-0 h-full rounded-md bg-[#300710] transition-all duration-300`}
          ></div>
          <span
            id="t-shirt"
            onClick={() => setOutfitCategory("t-shirt")}
            className={`relative z-[1] text-sm text-${
              activeOutfit?.type === "t-shirt" ? "white" : "black"
            } w-16 inline-block text-center rounded-md cursor-pointer`}
          >
            T-Shirt
          </span>
          <span
            id="sweat-shirt"
            onClick={() => setOutfitCategory("sweat-shirt")}
            className={`relative z-[1] text-sm text-${
              activeOutfit?.type === "sweat-shirt" ? "white" : "black"
            } w-[6.3rem] inline-block text-center rounded-md cursor-pointer`}
          >
            Sweat-Shirt
          </span>
          <span
            id="hoodie"
            onClick={() => setOutfitCategory("hoodie")}
            className={`relative z-[1] text-sm text-${
              activeOutfit?.type === "hoodie" ? "white" : "black"
            } w-16 inline-block text-center rounded-md cursor-pointer`}
          >
            Hoodie
          </span>
        </div>
      </div>
      {/* Colors */}
      <div className="">
        <h3 className="font-semibold text-lg text-[#300710]">Color:</h3>
        <div className="my-4 flex items-center flex-wrap">
          {outfits?.map((item) => (
            <div
              key={item._id}
              onClick={() => setActiveOutfit(item)}
              className={`w-8 h-8 rounded-full border border-slate-200 m-1 cursor-pointer`}
              style={{ backgroundColor: item.color[0] }}
            ></div>
          ))}
        </div>
      </div>
      {/* Sizes */}
      <div className="">
        <h3 className="font-semibold text-lg text-[#300710]">Size:</h3>
        <div className="relative my-3 py-[0.2rem]">
          <div
            className="absolute bottom-0 h-[0.2rem] w-12 rounded-md bg-[#300710] transition-all duration-300"
            style={{ left: `${3 * sizeIdx}rem` }}
          ></div>
          {activeOutfit?.size.map((size, idx) => (
            <span
              key={idx}
              onClick={() => setSizeIdx(idx)}
              className="w-12 inline-block text-xl text-center rounded-md cursor-pointer"
            >
              {size}
            </span>
          ))}
        </div>
      </div>
      {/* Price */}
      <div className="">
        <h3 className="font-semibold text-lg text-[#300710]">Price:</h3>
        <p>N{activeOutfit?.price}</p>
        {img ? <span>+ N1,000 (custom image)</span> : undefined}
      </div>
      {/* Buttons */}
      <div className="w-full flex justify-end items-center my-5">
        <button
          onClick={handleClick}
          disabled={customOutfitLoading || customImgLoading ? true : false}
          style={{
            cursor:
              customOutfitLoading || customImgLoading
                ? "not-allowed"
                : "pointer",
          }}
          className="px-2 w-[7.43rem] h-8 mx-4 flex items-center justify-center rounded-md border border-[#300710] text-sm"
        >
          {customOutfitLoading || customImgLoading ? (
            <SkeletonLoader type="default" color="#300710" />
          ) : (
            <span className="flex items-center">
              Add to cart{" "}
              <span className="ml-2">
                <AiOutlineShoppingCart />
              </span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default RightPanel;
