import { Link } from "react-router-dom";

interface Props {
  img: string;
  name: string;
  type: string;
}

const ProductCategory = ({ img, type, name }: Props) => {
  return (
    <div className="flex-1 flex flex-col items-center my-3 h-[20vh] relative md:mx-5 md:h-fit">
      <div className="w-full h-full bg-[#D9D9D9]">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[5] text-center md:static md:transform-none">
        <p className="text-center text-white text-4xl font-semibold tracking-wide md:mt-3 md:text-lg md:font-semibold md:tracking-normal">
          {name}
        </p>
        <Link
          to={`/products?category=${type}`}
          className="w-20 block mx-auto my-5 bg-[#550417] text-white text-sm font-semibold px-3 py-2 shadow-sm hover:bg-[#550417] hover:text-white transition md:my-2 md:border md:border-[#550417] md:text-[#550417] md:rounded-md md:w-16 md:py-1 md:bg-white"
        >
          Shop
        </Link>
      </div>
    </div>
  );
};

export default ProductCategory;
