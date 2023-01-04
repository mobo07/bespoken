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

const MobileCartItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="w-full my-4">
      <div className="flex">
        <div className="w-36 h-36 bg-[#d6d4d4] rounded-md">
          <img
            className="w-full h-full object-cover rounded-md"
            src={item.customOutfitImg ? item.customOutfitImg : item.img}
            alt=""
          />
        </div>
        <div className="ml-2">
          <div className="flex items-center justify-between mb-1">
            <p className="font-medium text-sm">{item.name}</p>
            <button
              onClick={() => dispatch(removeProduct(item.cartId))}
              className="flex items-center w-fit rounded-md px-2 py-1 hover:bg-[rgba(0,0,0,.1)]"
            >
              <AiFillDelete />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-[#B73554] p-[2.5px] mb-1 rounded-[0.2rem] bg-[#fff3f6] inline-block">
              N{item.price.toLocaleString()}
            </p>
            <p className="font-semibold text-base">
              N{item.totalPrice.toLocaleString()}
            </p>
          </div>
          {/* Dropdowns */}
          <div className="flex flex-wrap">
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
              className="border border-slate-200 outline-none px-2 py-1 rounded-md text-sm mx-2 my-1 cursor-pointer"
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
              className="border border-slate-200 outline-none px-2 py-1 rounded-md text-sm mx-2 my-1 cursor-pointer"
            >
              {item.color.map((el, idx) => (
                <option key={idx} value={el}>
                  {el}
                </option>
              ))}
            </select>
            <div className="border border-slate-200 mx-2 my-1 px-[2px] py-1 flex items-center justify-between rounded-md">
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
    </div>
  );
}; //B73554

export default MobileCartItem;
