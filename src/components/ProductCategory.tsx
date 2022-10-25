interface Props {
  img: string;
  type: string;
}

const ProductCategory = ({ img, type }: Props) => {
  return (
    <div className="flex-1 mx-5 flex flex-col items-center">
      <div className="w-full h-[50%] bg-[#D9D9D9]">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <p className="mt-5 text-center text-lg font-semibold">{type}</p>
      <button className="w-16 my-4 border border-[#550417] text-[#550417] text-sm font-semibold px-3 py-1 rounded-md shadow-sm hover:bg-[#550417] hover:text-white transition">
        Shop
      </button>
    </div>
  );
};

export default ProductCategory;
