import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Product, UserChoiceState } from "../data/types";
import { getProduct } from "../api";
import SkeletonLoader from "../components/UI/SkeletonLoader";
import { useAppDispatch } from "../redux/hooks";
import { addProduct } from "../redux/cartSlice";
import { useQuery } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";

const SingleProduct = () => {
  const productId = useLocation().pathname.split("/")[2];
  const dispatch = useAppDispatch();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery<Product>({
    queryKey: ["products", productId],
    queryFn: () => getProduct(productId),
  });

  const [userChoice, setUserChoice] = useState<UserChoiceState>({
    color: "",
    size: "",
    quantity: 1,
  });

  useEffect(() => {
    if (product) {
      setUserChoice((prev: UserChoiceState) => ({
        ...prev,
        color: product.color[0],
        size: product.size[0],
      }));
    }
  }, []);

  const handleQuantity = (op: "increase" | "decrease") => {
    if (op === "decrease") {
      if (userChoice.quantity === 1) return;
      setUserChoice((prev: UserChoiceState) => ({
        ...prev,
        quantity: prev.quantity - 1,
      }));
    } else
      setUserChoice((prev: UserChoiceState) => ({
        ...prev,
        quantity: prev.quantity + 1,
      }));
  };

  if (isLoading)
    return (
      <div className="">
        <Navbar />
        <SkeletonLoader type="single" />
      </div>
    );

  if (isError)
    return (
      <div className="">
        <Navbar />
        <div className="h-[70vh] flex items-center justify-center">
          <p className="text-center my-auto">Cannot get item</p>
        </div>
        <Footer />
      </div>
    );

  return (
    <div className="">
      <Navbar />
      <div className="flex p-4 mt-[4.3rem]">
        <div className="flex-1 flex">
          <div className="w-full h-[90vh]">
            <img
              className="w-full h-full object-contain"
              src={product.img}
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 px-12">
          <h1 className="text-3xl font-light">{product.name}</h1>
          <p className="my-6">{product.desc}</p>
          <span className="text-3xl font-light">N{product.price}</span>
          <div className="flex items-center my-6">
            <div className="flex items-center">
              <p className="mr-3">Color</p>
              <div className="flex items-center">
                {product.color.map((el, idx) => (
                  <span
                    onClick={() =>
                      setUserChoice((prev: UserChoiceState) => ({
                        ...prev,
                        color: el,
                      }))
                    }
                    key={idx}
                    className="w-8 h-8 rounded-full border border-slate-200 mr-3 cursor-pointer"
                    style={{ backgroundColor: el }}
                  ></span>
                ))}
              </div>
            </div>
            <div className="flex items-center mx-12">
              <p className="mr-3">Size</p>
              <select
                onChange={(e) =>
                  setUserChoice((prev: UserChoiceState) => ({
                    ...prev,
                    size: e.target.value,
                  }))
                }
                className="border border-slate-200 outline-none px-2 py-1 rounded-sm text-sm cursor-pointer"
              >
                {product.size.map((el, idx) => (
                  <option key={idx} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-16 border border-slate-200 mx-2 px-[2px] py-1 flex items-center justify-between rounded-sm">
            <span
              onClick={() => handleQuantity("decrease")}
              className="mx-2 cursor-pointer font-semibold text-xl select-none"
            >
              -
            </span>
            {userChoice.quantity}
            <span
              onClick={() => handleQuantity("increase")}
              className="mx-2 cursor-pointer font-semibold text-xl select-none"
            >
              +
            </span>
          </div>
          <button
            onClick={() =>
              dispatch(
                addProduct({
                  ...(product as Product),
                  cartId: uuidv4(),
                  selectedColor: userChoice.color,
                  selectedSize: userChoice.size,
                  totalPrice: +(product as Product).price * userChoice.quantity,
                  quantity: userChoice.quantity,
                })
              )
            }
            className="font-medium text-sm text-center w-max p-2 my-9 border-[1.5px] border-[#550417] transition duration-300 hover:scale-110 hover:bg-[#550417] hover:text-white"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
