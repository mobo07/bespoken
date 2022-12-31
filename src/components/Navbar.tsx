import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useAppSelector } from "../redux/hooks";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./UI/Sidebar";
import { useState } from "react";

const Navbar = () => {
  const cartQuantity = useAppSelector((state) => state.cart.cartQuantity);
  const { user } = useAppSelector((state) => state.user);

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 z-50 w-full h-[4.3rem] px-4 py-3 bg-white flex items-center justify-between">
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div className="flex items-center w-fit">
        {/* Hamburger Icon */}
        <GiHamburgerMenu
          className="mr-3 cursor-pointer md:hidden"
          size={20}
          onClick={() => setOpenSidebar(!openSidebar)}
        />
        {/* Nav logo */}
        <NavLink
          to="/"
          className="nav-logo font-normal text-2xl text-[#B73554] md:text-3xl"
        >
          Bespoken.
        </NavLink>
      </div>

      {/* Nav items (for mobile devices/smaller viewports) */}
      <div className="md:hidden">
        {user ? (
          <span className="mx-2 text-xl cursor-pointer w-8 h-8 rounded-full flex items-center justify-center transition duration-300 hover:bg-[#0000001a]">
            <BsPerson />
          </span>
        ) : (
          <>
            <NavLink
              to="/register"
              className="relative p-2
               text-sm cursor-pointer bg-[#B73554] text-white"
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="nav-link relative mx-2 text-sm cursor-pointer"
            >
              Login
            </NavLink>
          </>
        )}
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
      </div>

      {/* Nav links */}
      <ul className="hidden md:flex md:items-center">
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
          <>
            <NavLink
              to="/register"
              className="nav-link relative mx-4 text-sm cursor-pointer"
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="nav-link relative mx-4 text-sm cursor-pointer"
            >
              Login
            </NavLink>
          </>
        )}
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
