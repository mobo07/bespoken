import { AiFillDelete } from "react-icons/ai";
import { CartProduct } from "../../data/types";
import {
  changeQuantity,
  editProduct,
  removeProduct,
} from "../../redux/cartSlice";
import { useAppDispatch } from "../../redux/hooks";

interface Props {
  item: CartProduct;
}

const CartItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div key={item.cartId} className="flex justify-between my-4">
      <div className="flex">
        <div className="w-32 h-32 bg-[#d6d4d4] rounded-md md:w-44 md:h-44">
          <img
            className="w-full h-full object-cover rounded-md"
            src={item.customOutfitImg ? item.customOutfitImg : item.img}
            alt=""
          />
        </div>
        <div className="mx-4 flex flex-col justify-evenly">
          <div className="">
            <p className="font-medium text-base md:text-lg">{item.name}</p>
            <p className="text-sm text-[#B73554] p-[2.5px] rounded-[0.2rem] bg-[#fff3f6] inline-block">
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
          <AiFillDelete /> <span className="ml-1 text-sm">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
