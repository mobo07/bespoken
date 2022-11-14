import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  return (
    <nav className="w-full h-[70px] px-4 py-3 bg-white flex items-center justify-between">
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
        <li className="nav-link relative mx-4 text-sm cursor-pointer">Login</li>
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
            badgeContent={3}
          >
            <AiOutlineShoppingCart />
          </Badge>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
