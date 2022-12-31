const Footer = () => {
  return (
    <div className="w-full bg-[#FDEEEE] p-9 flex md:justify-center">
      {/* Footer Links */}

      {/* Wrapper */}
      <div className="w-full h-full flex justify-between md:w-[50%]">
        <ul>
          <p className="font-semibold mb-3">Shop</p>
          <li className="nav-link relative cursor-pointer mb-1 text-sm w-max">
            Products
          </li>
          <li className="nav-link relative cursor-pointer mb-1 text-sm w-max">
            Login
          </li>
          <li className="nav-link relative cursor-pointer mb-1 text-sm w-max">
            Register
          </li>
          <li className="nav-link relative cursor-pointer mb-1 text-sm w-max">
            Bulk orders
          </li>
        </ul>
        <ul>
          <p className="font-semibold mb-3">About</p>
          <li className="nav-link relative cursor-pointer mb-1 text-sm w-max">
            About Us
          </li>
          <li className="nav-link relative cursor-pointer mb-1 text-sm w-max">
            Jobs
          </li>
          <li className="nav-link relative cursor-pointer mb-1 text-sm w-max">
            Partners
          </li>
        </ul>
        <ul>
          <p className="font-semibold mb-3">Help</p>
          <li className="nav-link relative cursor-pointer mb-1 text-sm w-max">
            Deliveries
          </li>
          <li className="nav-link relative cursor-pointer mb-1 text-sm w-max">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
