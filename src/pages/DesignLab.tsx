import Navbar from "../components/Navbar";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import Footer from "../components/Footer";
import { useState, useRef, useCallback, useEffect } from "react";
import { toPng } from "html-to-image";
import { Product } from "../data/types";
import { fetchCustomProducts } from "../api";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { Steps } from "intro.js-react";
import "intro.js/introjs.css";
import { steps } from "../data/data";

const DesignLab = () => {
  const location = useLocation();
  const {
    data: outfits,
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: ["products", "custom", "true"],
    queryFn: () => fetchCustomProducts("custom", "true"),
  });

  const [activeOutfit, setActiveOutfit] = useState<Product>();
  const [outfitCategory, setOutfitCategory] = useState<
    "t-shirt" | "hoodie" | "sweat-shirt"
  >("t-shirt");
  const [img, setImg] = useState<File | string>();
  const ref = useRef<HTMLDivElement>(null);

  // state for introjs
  const [stepsEnabled, setStepsEnabled] = useState<boolean>(false);

  useEffect(() => {
    let introTimer: ReturnType<typeof setTimeout>;
    if (outfits) {
      setActiveOutfit(
        outfits.filter((outfit) => outfit.type === outfitCategory)[0]
      );
      introTimer = setTimeout(() => {
        setStepsEnabled(true);
      }, 0);
    }
    if (!img && location.state) setImg(location.state.img);

    return () => clearTimeout(introTimer);
  }, [outfits, outfitCategory]);

  const convertDivToPng = useCallback(() => {
    const getImgUrl = async () => {
      try {
        if (ref.current === null) return;
        console.log("waiting for url...");
        const url = await toPng(ref.current);
        console.log("url generated successfully");
        return url;
      } catch (error) {
        console.log("Error from divToPng", error);
      }
    };

    return getImgUrl();
  }, [ref]);

  const onExit = () => {
    setStepsEnabled(false);
  };

  if (isLoading) {
    return (
      <div className="">
        <Navbar />
        <div className="flex items-center justify-center px-3 h-[calc(100vh_-_70px)]">
          <p>loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="">
        <Navbar />
        <div className="flex items-center justify-center px-3 h-[calc(100vh_-_70px)]">
          <p>Something went wrong.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col mt-[4.3rem] px-3 h-[150vh] md:h-[calc(100vh_-_70px)] md:flex-row">
        <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={0}
          onExit={onExit}
        />
        <LeftPanel
          ref={ref}
          outfits={outfits.filter((outfit) => outfit.type === outfitCategory)}
          activeOutfit={activeOutfit}
          img={img}
          setImg={setImg}
        />
        <RightPanel
          outfits={outfits.filter((outfit) => outfit.type === outfitCategory)}
          activeOutfit={activeOutfit}
          setActiveOutfit={setActiveOutfit}
          setOutfitCategory={setOutfitCategory}
          img={img}
          convertDivToPng={convertDivToPng}
        />
      </div>
      <Footer />
    </div>
  );
};

export default DesignLab;
