import { AiFillDelete } from "react-icons/ai";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Cart = () => {
  return (
    <div className="">
      <Navbar />

      {/* Wrapper */}
      <div className="my-4 px-6">
        <h3 className="font-medium text-xl my-3">Cart</h3>
        <hr className="border-none h-[2px] bg-[#D9D9D9] mb-7" />

        <div className="w-full flex">
          <div className="flex-[2]">
            {/* Cart Item */}
            <div className="flex justify-between my-4">
              <div className="flex">
                <div className="w-44 h-44 bg-[#EEE7E7] rounded-md">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src="assets/images/ft-category-img6.jfif"
                    alt=""
                  />
                </div>
                <div className="mx-4 flex flex-col justify-evenly">
                  <div className="">
                    <p className="font-medium text-lg">Relaxed Fit T-shirt</p>
                    <p className="text-sm">N5,000</p>
                  </div>
                  <div className="flex">
                    <select className="border border-slate-200 outline-none px-2 py-1 rounded-md text-sm mx-2 cursor-pointer">
                      <option>XL</option>
                      <option>M</option>
                      <option>S</option>
                    </select>
                    <select className="border border-slate-200 outline-none px-2 py-1 rounded-md text-sm mx-2 cursor-pointer">
                      <option>black</option>
                      <option>blue</option>
                      <option>white</option>
                    </select>
                    <div className="border border-slate-200 mx-2 px-[2px] py-1 flex items-center justify-between rounded-md">
                      <span className="mx-2 cursor-pointer font-semibold text-xl select-none">
                        -
                      </span>
                      1
                      <span className="mx-2 cursor-pointer font-semibold text-xl select-none">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-7 py-4 flex flex-col items-center justify-around">
                <p className="font-semibold text-lg">N5,000</p>
                <button className="flex items-center w-fit rounded-md px-2 py-1 hover:bg-[rgba(0,0,0,.1)]">
                  <AiFillDelete /> <span className="ml-1 text-sm">Delete</span>
                </button>
              </div>
            </div>

            {/* Cart Item */}
            <div className="flex justify-between my-4">
              <div className="flex">
                <div className="w-44 h-44 bg-[#EEE7E7] rounded-md">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src="assets/images/ft-category-img7.jfif"
                    alt=""
                  />
                </div>
                <div className="mx-4 flex flex-col justify-evenly">
                  <div className="">
                    <p className="font-medium text-lg">Relaxed Fit T-shirt</p>
                    <p className="text-sm">N5,000</p>
                  </div>
                  <div className="flex">
                    <select className="border border-slate-200 outline-none px-2 py-1 rounded-md text-sm mx-2 cursor-pointer">
                      <option>XL</option>
                      <option>M</option>
                      <option>S</option>
                    </select>
                    <select className="border border-slate-200 outline-none px-2 py-1 rounded-md text-sm mx-2 cursor-pointer">
                      <option>black</option>
                      <option>blue</option>
                      <option>white</option>
                    </select>
                    <div className="border border-slate-200 mx-2 px-[2px] py-1 flex items-center justify-between rounded-md">
                      <span className="mx-2 cursor-pointer font-semibold text-xl select-none">
                        -
                      </span>
                      1
                      <span className="mx-2 cursor-pointer font-semibold text-xl select-none">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-7 py-4 flex flex-col items-center justify-around">
                <p className="font-semibold text-lg">N5,000</p>
                <button className="flex items-center w-fit rounded-md px-2 py-1 hover:bg-[rgba(0,0,0,.1)]">
                  <AiFillDelete /> <span className="ml-1 text-sm">Delete</span>
                </button>
              </div>
            </div>

            {/* Cart Item */}
            <div className="flex justify-between my-4">
              <div className="flex">
                <div className="w-44 h-44 bg-[#EEE7E7] rounded-md">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src="assets/images/ft-category-img9.jfif"
                    alt=""
                  />
                </div>
                <div className="mx-4 flex flex-col justify-evenly">
                  <div className="">
                    <p className="font-medium text-lg">Relaxed Fit T-shirt</p>
                    <p className="text-sm">N5,000</p>
                  </div>
                  <div className="flex">
                    <select className="border border-slate-200 outline-none px-2 py-1 rounded-md text-sm mx-2 cursor-pointer">
                      <option>XL</option>
                      <option>M</option>
                      <option>S</option>
                    </select>
                    <select className="border border-slate-200 outline-none px-2 py-1 rounded-md text-sm mx-2 cursor-pointer">
                      <option>black</option>
                      <option>blue</option>
                      <option>white</option>
                    </select>
                    <div className="border border-slate-200 mx-2 px-[2px] py-1 flex items-center justify-between rounded-md">
                      <span className="mx-2 cursor-pointer font-semibold text-xl select-none">
                        -
                      </span>
                      1
                      <span className="mx-2 cursor-pointer font-semibold text-xl select-none">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-7 py-4 flex flex-col items-center justify-around">
                <p className="font-semibold text-lg">N5,000</p>
                <button className="flex items-center w-fit rounded-md px-2 py-1 hover:bg-[rgba(0,0,0,.1)]">
                  <AiFillDelete /> <span className="ml-1 text-sm">Delete</span>
                </button>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="flex-1">
            {/* Wrapper */}
            <div className="p-4 w-full">
              <div className="w-full flex flex-col items-center border-2 border-slate-200 rounded-md p-2">
                <h2 className="font-light text-[#300710] text-2xl text-center mt-2 tracking-wider">
                  ORDER SUMMARY
                </h2>

                <div className="my-5 w-full">
                  <div className="flex items-center justify-between my-6 font-medium">
                    <p className="">Subtotal</p>
                    <span className="">N15,000</span>
                  </div>
                  <div className="flex items-center justify-between my-6 font-medium">
                    <p className="">Estimated Shipping</p>
                    <span className="">N2,500</span>
                  </div>
                  <div className="flex items-center justify-between my-6 font-medium">
                    <p className="">Shipping discount</p>
                    <span className="">10%</span>
                  </div>
                  <div className="flex items-center justify-between my-6 font-semibold text-xl">
                    <p className="">Total</p>
                    <span className="">N15,250</span>
                  </div>
                </div>
                <button className="font-medium text-white text-center w-[80%] py-2 my-5 bg-[#550417]">
                  CHECKOUT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
