import { Link } from "react-router-dom";

interface Props {
  img: string;
  name: string;
  type: string;
}

const ProductCategory = ({ img, type, name }: Props) => {
  return (
    <div className="flex-1 mx-5 flex flex-col items-center">
      <div className="w-full h-[50%] bg-[#D9D9D9]">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <p className="mt-5 text-center text-lg font-semibold">{name}</p>
      <Link
        to={`/products?category=${type}`}
        className="w-16 my-4 border border-[#550417] text-[#550417] text-sm font-semibold px-3 py-1 rounded-md shadow-sm hover:bg-[#550417] hover:text-white transition"
      >
        Shop
      </Link>
    </div>
  );
};

export default ProductCategory;
