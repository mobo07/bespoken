import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const SingleProduct = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex p-4">
        <div className="flex-1 flex">
          <div className="w-full h-[90vh]">
            <img
              className="w-full h-full object-cover"
              src="/assets/images/ft-category-img2.jfif"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 px-12">
          <h1 className="text-3xl font-light">Naruto Black T-shirt</h1>
          <p className="my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque enim
            ipsa ea porro veniam, odio illum quae modi soluta debitis! Velit
            quas odit doloribus harum, repellat beatae consectetur pariatur nam.
          </p>
          <span className="text-3xl font-light">N2,500</span>
          <div className="flex items-center my-6">
            <div className="flex items-center">
              <p className="mr-3">Color</p>
              <div className="flex items-center">
                <span className="w-8 h-8 rounded-full border border-slate-200 mr-3 cursor-pointer bg-black"></span>
                <span className="w-8 h-8 rounded-full border border-slate-200 mr-3 cursor-pointer bg-white"></span>
              </div>
            </div>
            <div className="flex items-center mx-12">
              <p className="mr-3">Size</p>
              <select className="border border-slate-200 outline-none px-2 py-1 rounded-sm text-sm cursor-pointer">
                <option>XL</option>
                <option>M</option>
                <option>S</option>
              </select>
            </div>
          </div>
          <div className="w-16 border border-slate-200 mx-2 px-[2px] py-1 flex items-center justify-between rounded-sm">
            <span className="mx-2 cursor-pointer font-semibold text-xl select-none">
              -
            </span>
            1
            <span className="mx-2 cursor-pointer font-semibold text-xl select-none">
              +
            </span>
          </div>
          <button className="font-medium text-sm text-center w-max p-2 my-9 border-[1.5px] border-[#550417] transition duration-300 hover:scale-110 hover:bg-[#550417] hover:text-white">
            ADD TO CART
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
