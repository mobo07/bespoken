import { AiFillDelete } from "react-icons/ai";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  editProduct,
  removeProduct,
  changeQuantity,
  clearCart,
} from "../redux/cartSlice";
import { usePaystackPayment } from "react-paystack";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { products, amount } = useAppSelector((state) => state.cart);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const reference = uuidv4();
  const navigate = useNavigate();

  //PAYSTACK CONFIG
  const config = {
    reference,
    email: user ? user.email : "",
    amount: amount * 100,
    publicKey: "pk_test_b39495155f9209f06ff6fd67b195cfe6d86cdc2a",
  };

  const onSuccess = () => {
    // Implementation for whatever you want to do with reference and after success call.
    const validatePayment = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const res = await axios.post(
          `https://encouraging-hare-garment.cyclic.app/api/orders/${reference}`,
          {
            userId: user?.id,
            products,
            address: "heaven",
          },
          {
            headers: {
              token: `Bearer ${token}`,
            },
          }
        );
        // console.log(res);
        if (res.status === 201) {
          dispatch(clearCart());
          navigate("/");
        }
      } catch (error) {
        console.log("PAYSTACK ERROR ->", error);
      }
    };
    validatePayment();
  };

  const onClose = () => {
    console.log("closed");
  };

  //FUNCTION TO CHECK IF USER IS LOGGED-IN
  const handleUser = () => {
    navigate("/login");
  };

  const initializePayment = usePaystackPayment(config);
  return (
    <div className="">
      <Navbar />

      {/* Wrapper */}
      <div className="my-[4.3rem] px-6">
        <h3 className="font-medium text-xl my-3">Cart</h3>
        <hr className="border-none h-[2px] bg-[#D9D9D9] mb-7" />

        {products.length ? (
          <div className="w-full flex flex-col md:flex-row">
            <div className="flex-[2]">
              {/* Cart Items */}
              {products.map((item) => (
                <div key={item.cartId} className="flex justify-between my-4">
                  <div className="flex">
                    <div className="w-44 h-44 bg-[#d6d4d4] rounded-md">
                      <img
                        className="w-full h-full object-cover rounded-md"
                        src={
                          item.customOutfitImg ? item.customOutfitImg : item.img
                        }
                        alt=""
                      />
                    </div>
                    <div className="mx-4 flex flex-col justify-evenly">
                      <div className="">
                        <p className="font-medium text-lg">{item.name}</p>
                        <p className="text-sm">
                          N{item.price.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex">
                        <select
                          onChange={(e) =>
                            dispatch(
                              editProduct({
                                id: item.cartId,
                                prop: "selectedSize",
                                val: e.target.value,
                              })
                            )
                          }
                          value={item.selectedSize}
                          className="border border-slate-200 outline-none px-2 py-1 rounded-md text-sm mx-2 cursor-pointer"
                        >
                          {item.size.map((el, idx) => (
                            <option key={idx} value={el}>
                              {el}
                            </option>
                          ))}
                        </select>
                        <select
                          onChange={(e) =>
                            dispatch(
                              editProduct({
                                id: item._id,
                                prop: "selectedColor",
                                val: e.target.value,
                              })
                            )
                          }
                          value={item.selectedColor}
                          className="border border-slate-200 outline-none px-2 py-1 rounded-md text-sm mx-2 cursor-pointer"
                        >
                          {item.color.map((el, idx) => (
                            <option key={idx} value={el}>
                              {el}
                            </option>
                          ))}
                        </select>
                        <div className="border border-slate-200 mx-2 px-[2px] py-1 flex items-center justify-between rounded-md">
                          <span
                            onClick={() =>
                              dispatch(
                                changeQuantity({
                                  op: "decrease",
                                  id: item.cartId,
                                })
                              )
                            }
                            className="mx-2 cursor-pointer font-semibold text-xl select-none"
                          >
                            -
                          </span>
                          {item.quantity}
                          <span
                            onClick={() =>
                              dispatch(
                                changeQuantity({
                                  op: "increase",
                                  id: item.cartId,
                                })
                              )
                            }
                            className="mx-2 cursor-pointer font-semibold text-xl select-none"
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mx-7 py-4 flex flex-col items-center justify-around">
                    <p className="font-semibold text-lg">
                      N{item.totalPrice.toLocaleString()}
                    </p>
                    <button
                      onClick={() => dispatch(removeProduct(item.cartId))}
                      className="flex items-center w-fit rounded-md px-2 py-1 hover:bg-[rgba(0,0,0,.1)]"
                    >
                      <AiFillDelete />{" "}
                      <span className="ml-1 text-sm">Delete</span>
                    </button>
                  </div>
                </div>
              ))}
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
                      <span className="">N{amount.toLocaleString()}</span>
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
                      <span className="">
                        N{(amount + 2500).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <button
                    className="font-medium text-white text-center w-[80%] py-2 my-5 bg-[#550417]"
                    onClick={
                      !user
                        ? handleUser
                        : () => initializePayment(onSuccess, onClose)
                    }
                  >
                    CHECKOUT NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[70vh] flex items-center justify-center">
            <p className="text-center my-auto">Your shopping cart is empty</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
