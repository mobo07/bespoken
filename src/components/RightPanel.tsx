import { BsCreditCard } from "react-icons/bs";
import { AiOutlineSave } from "react-icons/ai";
import { Product } from "../data/types";

interface Props {
  outfits: Product[] | undefined;
  activeOutfit: Product | undefined;
  setActiveOutfit: React.Dispatch<React.SetStateAction<Product | undefined>>;
  setOutfitCategory: React.Dispatch<
    React.SetStateAction<"t-shirt" | "sweat-shirt" | "hoodie">
  >;
}

const RightPanel = ({
  outfits,
  activeOutfit,
  setActiveOutfit,
  setOutfitCategory,
}: Props) => {
  return (
    <div className="px-6 flex-1 flex flex-col justify-between">
      <h1 className="text-3xl font-light">{activeOutfit?.name}</h1>
      {/* Outfit Type */}
      <div className="">
        <h3 className="font-semibold text-lg text-[#300710]">Outfit Type:</h3>
        <div className="my-3">
          <span
            id="t-shirt"
            onClick={() => setOutfitCategory("t-shirt")}
            className="text-md mr-3 px-2 py-1 rounded-md hover:bg-[#0000001a] cursor-pointer"
          >
            T-Shirt
          </span>
          <span
            id="sweat-shirt"
            onClick={() => setOutfitCategory("sweat-shirt")}
            className="text-md mr-3 px-2 py-1 rounded-md hover:bg-[#0000001a] cursor-pointer"
          >
            Sweat-Shirt
          </span>
          <span
            id="hoodie"
            onClick={() => setOutfitCategory("hoodie")}
            className="text-md mr-3 px-2 py-1 rounded-md hover:bg-[#0000001a] cursor-pointer"
          >
            Hoodie
          </span>
        </div>
      </div>
      {/* Colors */}
      <div className="">
        <h3 className="font-semibold text-lg text-[#300710]">Color:</h3>
        <div className="my-4 flex items-center">
          {outfits?.map((item) => (
            <div
              key={item._id}
              onClick={() => setActiveOutfit(item)}
              className={`w-8 h-8 rounded-full border border-slate-200 mr-3 cursor-pointer`}
              style={{ backgroundColor: item.color[0] }}
            ></div>
          ))}
        </div>
      </div>
      {/* Sizes */}
      <div className="">
        <h3 className="font-semibold text-lg text-[#300710]">Size:</h3>
        <div className="my-2">
          {activeOutfit?.size.map((size, idx) => (
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
  );
};

export default RightPanel;
