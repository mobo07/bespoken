import Navbar from "../components/Navbar";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import Footer from "../components/Footer";
import { useState } from "react";

const DesignLab = () => {
  const [clothColor, setClothColor] = useState<string>("black");

  return (
    <div className="">
      <Navbar />

      <div className="flex px-3 h-[calc(100vh_-_70px)]">
        <LeftPanel clothColor={clothColor} />
        <RightPanel setClothColor={setClothColor} />
      </div>
      <Footer />
    </div>
  );
};

export default DesignLab;
