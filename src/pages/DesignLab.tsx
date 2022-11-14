import Navbar from "../components/Navbar";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import Footer from "../components/Footer";
import { useState, useRef, useCallback } from "react";
import { toPng } from "html-to-image";

const DesignLab = () => {
  const [clothColor, setClothColor] = useState<string>("black");
  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    const getImgUrl = async () => {
      try {
        if (ref.current === null) return;
        console.log("waiting for url...");
        const url = await toPng(ref.current);
        console.log("img is ready!!");
      } catch (error) {
        console.log(error);
      }
    };

    getImgUrl();

    // toPng(ref.current, { cacheBust: true })
    //   .then((dataUrl) => {
    //     // const link = document.createElement("a");
    //     // link.download = "my-image-name.png";
    //     // link.href = dataUrl;
    //     // link.click();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [ref]);

  return (
    <div className="">
      <Navbar />

      <div className="flex px-3 h-[calc(100vh_-_70px)]">
        <LeftPanel ref={ref} clothColor={clothColor} />
        <RightPanel setClothColor={setClothColor} />
      </div>
      <button
        onClick={onButtonClick}
        className="p-2 text-white bg-[rgba(0,0,0,0.1)]"
      >
        click me
      </button>
      <Footer />
    </div>
  );
};

export default DesignLab;
