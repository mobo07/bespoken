import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Product, SingleOutfitState } from "../data/types";
import { fetchProducts } from "../axios";
import SkeletonLoader from "../components/UI/SkeletonLoader";

const SingleProduct = () => {
  const path = useLocation().pathname.split("/")[2];

  const [product, setProduct] = useState<SingleOutfitState>({
    outfit: undefined,
    loading: false,
    error: false,
  });

  useEffect(() => {
    const getProduct = async () => {
      try {
        setProduct((prev: SingleOutfitState) => ({ ...prev, loading: true }));
        const res = await fetchProducts.get<Product>(`products/${path}`);
        setProduct((prev: SingleOutfitState) => ({
          ...prev,
          loading: false,
          outfit: res.data,
        }));
      } catch (err) {
        setProduct((prev: SingleOutfitState) => ({
          ...prev,
          loading: false,
          error: true,
        }));
      }
    };

    getProduct();
  }, []);

  return (
    <div className="">
      <Navbar />
      {product.loading ? (
        <SkeletonLoader type="single" />
      ) : product.outfit ? (
        <div className="flex p-4">
          <div className="flex-1 flex">
            <div className="w-full h-[90vh]">
              <img
                className="w-full h-full object-contain"
                src={product.outfit.img}
                alt=""
              />
            </div>
          </div>
          <div className="flex-1 px-12">
            <h1 className="text-3xl font-light">{product.outfit.name}</h1>
            <p className="my-6">{product.outfit.desc}</p>
            <span className="text-3xl font-light">N{product.outfit.price}</span>
            <div className="flex items-center my-6">
              <div className="flex items-center">
                <p className="mr-3">Color</p>
                <div className="flex items-center">
                  {product.outfit.color.map((el, idx) => (
                    <span
                      key={idx}
                      className="w-8 h-8 rounded-full border border-slate-200 mr-3 cursor-pointer"
                      style={{ backgroundColor: el }}
                    ></span>
                  ))}
                </div>
              </div>
              <div className="flex items-center mx-12">
                <p className="mr-3">Size</p>
                <select className="border border-slate-200 outline-none px-2 py-1 rounded-sm text-sm cursor-pointer">
                  {product.outfit.size.map((el, idx) => (
                    <option key={idx}>{el}</option>
                  ))}
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
      ) : (
        <p className="text-center">Cannot get item</p>
      )}
      <Footer />
    </div>
  );
};

export default SingleProduct;
