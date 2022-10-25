import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="w-full h-[70px] px-4 py-3 bg-white flex items-center justify-between">
      {/* Nav logo */}
      <h3 className="nav-logo font-normal text-3xl text-[#B73554]">
        Bespoken.
      </h3>

      {/* Nav links */}
      <ul className="flex items-center">
        <li className="nav-link relative mx-4 text-sm cursor-pointer">
          Products
        </li>
        <li className="nav-link relative mx-4 text-sm cursor-pointer">
          Design Lab
        </li>
        <li className="nav-link relative mx-4 text-sm cursor-pointer">
          About Us
        </li>
        <li className="mx-2 text-xl cursor-pointer w-8 h-8 rounded-full flex items-center justify-center transition duration-300 hover:bg-[#0000001a]">
          <BsPerson />
        </li>
        <li className="mx-2 text-xl cursor-pointer">
          <AiOutlineShoppingCart />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
