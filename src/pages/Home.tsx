import Navbar from "../components/Navbar";
import { BsArrowRight } from "react-icons/bs";
import heroImg1 from "../assets/images/hero-img1.png";
import heroImg2 from "../assets/images/hero-img2.png";
import pencilIcon from "../assets/icons/pencil-icon.png";
import tickIcon from "../assets/icons/tick-icon.png";
import bagIcon from "../assets/icons/bag-icon.png";
import ProductCategories from "../components/ProductCategories";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProducts";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />

      {/* Hero Section */}
      <div className="w-[98%] mx-auto py-7 px-5 flex items-center bg-[#FDEEEE]">
        {/* Hero Text */}
        <div className="flex-1">
          <h1 className="text-[#550417] font-bold text-6xl my-6">
            Made with <br /> care, and made <br /> to order.
          </h1>
          <p className="text-[#1E0108] text-lg my-6">
            Tasteful on-demand garment <br /> customisation.
          </p>
          <NavLink
            to="/designlab"
            className="bg-white w-max my-4 text-sm flex items-center px-2 py-1 shadow-sm rounded-md font-medium hover:scale-105 transition"
          >
            Start Designing
            <span className="ml-2">
              <BsArrowRight />
            </span>
          </NavLink>
        </div>

        {/* Hero Img */}
        <div className="flex-1 flex items-center">
          <div className="flex-1">
            <img
              className=" h-full w-full object-cover"
              src={heroImg1}
              alt="hero-img1"
            />
          </div>
          <div className="flex-1">
            <img
              className="w-full h-full object-cover"
              src={heroImg2}
              alt="hero-img2"
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full flex items-center justify-evenly my-6">
        <div className="flex items-center">
          <img
            className="w-[30px] h-[30px] mr-3 object-cover"
            src={pencilIcon}
            alt="pen-icon"
          />
          <p className="text-sm text-[#300710] font-semibold">Find a design.</p>
        </div>
        <div className="flex items-center">
          <img
            className="w-[30px] h-[30px] mr-3 object-cover"
            src={tickIcon}
            alt="tick-icon"
          />
          <p className="text-sm text-[#300710] font-semibold">
            Select desired garment type and size.
          </p>
        </div>
        <div className="flex items-center">
          <img
            className="w-[30px] h-[30px] mr-3 object-cover"
            src={bagIcon}
            alt="bag-icon"
          />
          <p className="text-sm text-[#300710] font-semibold">
            Place your order.
          </p>
        </div>
      </div>

      {/* Product Categories */}
      <ProductCategories />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
