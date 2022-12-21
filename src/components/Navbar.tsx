import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useAppSelector } from "../redux/hooks";

const Navbar = () => {
  const cartQuantity = useAppSelector((state) => state.cart.cartQuantity);
  const { user } = useAppSelector((state) => state.user);

  return (
    <nav className="fixed top-0 z-50 w-full h-[4.3rem] px-4 py-3 bg-white flex items-center justify-between">
      {/* Nav logo */}
      <NavLink to="/" className="nav-logo font-normal text-3xl text-[#B73554]">
        Bespoken.
      </NavLink>

      {/* Nav links */}
      <ul className="flex items-center">
        <NavLink
          to="/products"
          className="nav-link relative mx-4 text-sm cursor-pointer"
        >
          Products
        </NavLink>
        <NavLink
          to="/designlab"
          className="nav-link relative mx-4 text-sm cursor-pointer"
        >
          Design Lab
        </NavLink>
        <li className="nav-link relative mx-4 text-sm cursor-pointer">
          About Us
        </li>
        {user ? (
          <li className="mx-2 text-xl cursor-pointer w-8 h-8 rounded-full flex items-center justify-center transition duration-300 hover:bg-[#0000001a]">
            <BsPerson />
          </li>
        ) : (
          <NavLink
            to="/login"
            className="nav-link relative mx-4 text-sm cursor-pointer"
          >
            Login
          </NavLink>
        )}
        {/* <li className="mx-2 text-xl cursor-pointer w-8 h-8 rounded-full flex items-center justify-center transition duration-300 hover:bg-[#0000001a]">
          <BsPerson />
        </li> */}
        <NavLink to="/cart" className="mx-2 text-xl cursor-pointer">
          <Badge
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#B73554",
                color: "white",
              },
            }}
            badgeContent={cartQuantity}
          >
            <AiOutlineShoppingCart />
          </Badge>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
