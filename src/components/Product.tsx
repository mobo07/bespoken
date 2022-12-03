import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Product } from "../data/types";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { addProduct } from "../redux/cartSlice";

interface Props {
  product: Product;
}

const SingleProduct = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="group flex align-center justfiy-center relative w-[17.5rem] h-[22rem] bg-[#D9D9D9] m-3">
      <img
        className="w-full h-full object-cover"
        src={product.img}
        alt="product-img"
      />
      <div className="absolute top-0 left-0 z-[1] w-full h-full flex items-center justify-center bg-[#00000066] opacity-0 transition duration-200 group-hover:opacity-100">
        <div
          onClick={() =>
            dispatch(
              addProduct({
                ...product,
                quantity: 1,
                selectedColor: product.color[0],
                selectedSize: product.size[0],
                totalPrice: +product.price,
              })
            )
          }
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center m-3 cursor-pointer transition hover:scale-110 hover:bg-[#e9f5f5] text-xl"
        >
          <AiOutlineShoppingCart />
        </div>
        <Link
          to={`/products/${product._id}`}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center m-3 cursor-pointer transition hover:scale-110 hover:bg-[#e9f5f5] text-xl"
        >
          <BiSearchAlt2 />
        </Link>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center m-3 cursor-pointer transition hover:scale-110 hover:bg-[#e9f5f5] text-xl">
          <AiOutlineHeart />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

// BiSearchAlt2
// AiOutlineHeart
// AiOutlineHeart
