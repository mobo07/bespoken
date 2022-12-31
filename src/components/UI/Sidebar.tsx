import { NavLink } from "react-router-dom";
import Backdrop from "./Backdrop";

interface Props {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ openSidebar, setOpenSidebar }: Props) => {
  return (
    <>
      <Backdrop openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div
        style={{ left: openSidebar ? 0 : "-100%" }}
        className="absolute top-[4.3rem] z-50 w-[70%] h-screen bg-white p-4 transition-all duration-500 ease-out md:hidden"
      >
        <ul className="flex flex-col">
          <NavLink
            to="/"
            className="nav-link relative my-3 w-fit text-base font-semibold cursor-pointer"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="nav-link relative my-3 w-fit text-base font-semibold cursor-pointer"
          >
            Products
          </NavLink>
          <NavLink
            to="/designlab"
            className="nav-link relative my-3 w-fit text-base font-semibold cursor-pointer"
          >
            Design Lab
          </NavLink>
          <li className="nav-link relative my-3 w-fit text-base font-semibold cursor-pointer">
            About Us
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
