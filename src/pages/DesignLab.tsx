import Navbar from "../components/Navbar";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import Footer from "../components/Footer";
import { useState, useRef, useCallback, useEffect } from "react";
import { toPng } from "html-to-image";
import { Product } from "../data/types";
import { fetchCustomProducts } from "../productsApi";
import { useQuery } from "@tanstack/react-query";

const DesignLab = () => {
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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outfits)
      setActiveOutfit(
        outfits.filter((outfit) => outfit.type === outfitCategory)[0]
      );
  }, [outfits, outfitCategory]);

  const onButtonClick = useCallback(() => {
    const getImgUrl = async () => {
      try {
        if (ref.current === null) return;
        // const dataUrl = await toPng(ref.current);
        // const link = document.createElement("a");
        // link.download = "my-image-name.png";
        // link.href = dataUrl;
        // link.click();
        console.log("waiting for url...");
        const url = await toPng(ref.current);
        console.log("img is ready!!");
      } catch (error) {
        console.log(error);
      }
    };

    getImgUrl();
  }, [ref]);

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

      <div className="flex mt-[4.3rem] px-3 h-[calc(100vh_-_70px)]">
        <LeftPanel
          ref={ref}
          outfits={outfits.filter((outfit) => outfit.type === outfitCategory)}
          activeOutfit={activeOutfit}
        />
        <RightPanel
          outfits={outfits.filter((outfit) => outfit.type === outfitCategory)}
          activeOutfit={activeOutfit}
          setActiveOutfit={setActiveOutfit}
          setOutfitCategory={setOutfitCategory}
        />
      </div>
      {/* <button
        onClick={onButtonClick}
        className="p-2 text-white bg-[rgba(0,0,0,0.1)]"
      >
        click me
      </button> */}
      <Footer />
    </div>
  );
};

export default DesignLab;
