import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

interface Props {
  img: string;
  category?: string;
  price?: number;
}

const FeaturedProduct = ({ img }: Props) => {
  return (
    <div className="group relative w-[17.5rem] h-[22rem] bg-[#D9D9D9] m-3">
      <img className="w-full h-full object-cover" src={img} alt="product-img" />
      <div className="absolute top-0 left-0 z-[1] w-full h-full flex items-center justify-center bg-[#00000066] opacity-0 transition duration-200 group-hover:opacity-100">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center m-3 cursor-pointer transition hover:scale-110 hover:bg-[#e9f5f5] text-xl">
          <AiOutlineShoppingCart />
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center m-3 cursor-pointer transition hover:scale-110 hover:bg-[#e9f5f5] text-xl">
          <BiSearchAlt2 />
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center m-3 cursor-pointer transition hover:scale-110 hover:bg-[#e9f5f5] text-xl">
          <AiOutlineHeart />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;

// BiSearchAlt2
// AiOutlineHeart
// AiOutlineHeart
