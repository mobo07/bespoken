import Navbar from "../components/Navbar";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import Footer from "../components/Footer";
import { useState, useRef, useCallback, useEffect } from "react";
import { toPng } from "html-to-image";
import { CustomOutfitState, Product } from "../data/types";
import { fetchProducts } from "../axios";

const DesignLab = () => {
  const [outfit, setOutfit] = useState<CustomOutfitState>({
    outfit: undefined,
    loading: false,
    error: false,
  });
  const [clothColor, setClothColor] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);

  // FETCH ALL CUSTOMIZABLE OUTFITS
  useEffect(() => {
    const fetchOutfits = async () => {
      try {
        setOutfit((prev: CustomOutfitState) => ({ ...prev, loading: true }));
        const res = await fetchProducts.get<Product[]>(`products?custom=true`);
        setOutfit((prev: CustomOutfitState) => ({
          ...prev,
          loading: false,
          outfit: res.data,
        }));
        setClothColor(res.data[0].img);
      } catch (err) {
        setOutfit((prev: CustomOutfitState) => ({
          ...prev,
          loading: false,
          error: true,
        }));
        console.log(err);
      }
    };
    fetchOutfits();
  }, []);

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

  return (
    <div className="">
      <Navbar />

      {outfit.outfit ? (
        <div className="flex px-3 h-[calc(100vh_-_70px)]">
          <LeftPanel ref={ref} outfit={outfit.outfit} clothColor={clothColor} />
          <RightPanel
            colors={outfit.outfit.map((el) => ({
              id: el._id,
              img: el.img,
              color: el.color,
            }))}
            setClothColor={setClothColor}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center px-3 h-[calc(100vh_-_70px)]">
          {outfit.error ? <p>Cannot fetch items</p> : <p>loading...</p>}
        </div>
      )}
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
