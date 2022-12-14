import Navbar from "../components/Navbar";
import { BsArrowRight } from "react-icons/bs";
import heroImg1 from "../assets/images/hero-img1.png";
import heroImg2 from "../assets/images/hero-img2.png";
import pencilIcon from "../assets/icons/pencil-icon.png";
import tickIcon from "../assets/icons/tick-icon.png";
import bagIcon from "../assets/icons/bag-icon.png";
import ProductCategories from "../components/ProductCategories";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/Products";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Product, TDesign } from "../data/types";
import { fetchCustomProducts, fetchDesigns } from "../api";
import SkeletonLoader from "../components/UI/SkeletonLoader";
import Designs from "../components/Designs";

const Home = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[], Error>({
    queryKey: ["products", "custom", "false"],
    queryFn: () => fetchCustomProducts("custom", "false"),
  });

  const designs = useQuery<TDesign[], Error>({
    queryKey: ["designs"],
    queryFn: () => fetchDesigns(),
  });

  return (
    <div className="w-full">
      <Navbar />

      {/* Hero Section */}
      <div className="w-[98%] mx-auto mt-[4.3rem] py-7 px-5 flex items-center bg-gradient-to-br from-[#ffdada] to-[#fff2f2]">
        {/* Hero Text */}
        <div className="flex-1">
          <h1 className="text-[#550417] font-bold my-6 text-4xl md:text-6xl">
            Made with <br /> care, and made <br /> to order.
          </h1>
          <p className="text-[#1E0108] text-sm my-6 md:text-lg">
            Tasteful on-demand garment <br /> customisation.
          </p>
          <NavLink
            to="/designlab"
            className="bg-white w-max my-4 text-xs flex items-center px-2 py-1 shadow-sm rounded-md font-medium hover:scale-105 transition md:text-sm"
          >
            Start Designing
            <span className="ml-2">
              <BsArrowRight />
            </span>
          </NavLink>
        </div>

        {/* Hero Img */}
        <div className="flex-1 items-center hidden md:flex">
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
      <div className="w-full flex flex-col items-center my-6 md:flex-row md:justify-evenly">
        <div className="flex flex-col items-center p-2 my-3 w-[70%] rounded-md shadow-md md:flex-row md:shadow-none md:rounded-none md:p-0 md:w-fit md:my-0">
          <img
            className="w-[30px] h-[30px] my-3 object-cover md:mr-3 md:my-0"
            src={pencilIcon}
            alt="pen-icon"
          />
          <p className="text-sm text-[#300710] font-semibold text-center my-3 md:my-0">
            Find a design.
          </p>
        </div>
        <div className="flex flex-col items-center p-2 my-3 w-[70%] rounded-md shadow-md md:flex-row md:shadow-none md:rounded-none md:p-0 md:w-fit md:my-0">
          <img
            className="w-[30px] h-[30px] my-3 object-cover md:mr-3 md:my-0"
            src={tickIcon}
            alt="tick-icon"
          />
          <p className="text-sm text-[#300710] font-semibold text-center my-3 md:my-0">
            Select desired garment type and size.
          </p>
        </div>
        <div className="flex flex-col items-center p-2 my-3 w-[70%] rounded-md shadow-md md:flex-row md:shadow-none md:rounded-none md:p-0 md:w-fit md:my-0">
          <img
            className="w-[30px] h-[30px] my-3 object-cover md:mr-3 md:my-0"
            src={bagIcon}
            alt="bag-icon"
          />
          <p className="text-sm text-[#300710] font-semibold text-center my-3 md:my-0">
            Place your order.
          </p>
        </div>
      </div>

      {/* Product Categories */}
      <h2 className="text-[#550417] mt-10 mx-7 font-bold text-xl">
        Product Categories
      </h2>
      <ProductCategories />

      {/* Featured Designs */}
      <h2 className="text-[#550417] mt-10 mx-7 font-bold text-xl">
        Featured Designs
      </h2>
      {designs.isLoading ? (
        <SkeletonLoader type="designs" />
      ) : designs.isError ? (
        <p>cannot fetch designs</p>
      ) : (
        <Designs designs={designs.data} />
      )}

      {/* Featured Products */}
      <h2 className="text-[#550417] mt-10 mx-7 font-bold text-xl">
        Featured Products
      </h2>
      {isLoading ? (
        <SkeletonLoader type="products" />
      ) : isError || error ? (
        <p>something went wrong</p>
      ) : (
        <FeaturedProducts products={products?.slice(0, 12)} />
      )}
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
