import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Products = () => {
  return (
    <div className="">
      <Navbar />
      <div className="my-3 p-4">
        <h1 className="mb-4 text-2xl font-semibold text-[#550417]">Products</h1>
        <div className="my-4 flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-lg font-medium text-[#550417]">
              Filter Products:
            </p>
            <select className="border border-slate-200 outline-none p-2 rounded-sm text-sm mx-2 cursor-pointer">
              <option>White</option>
              <option>Black</option>
              <option>Blue</option>
            </select>
            <select className="border border-slate-200 outline-none p-2 rounded-sm text-sm mx-2 cursor-pointer">
              <option>XL</option>
              <option>M</option>
              <option>S</option>
            </select>
          </div>
          <div className="flex items-center">
            <p className="text-lg font-medium text-[#550417]">Sort Products:</p>
            <select className="border border-slate-200 outline-none p-2 rounded-sm text-sm mx-2 cursor-pointer">
              <option>Newest</option>
              <option>Price (asc)</option>
              <option>Price (desc)</option>
            </select>
          </div>
        </div>

        <FeaturedProducts />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
