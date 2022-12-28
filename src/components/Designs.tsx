import Design from "./Design";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef } from "react";
import { TDesign } from "../data/types";

interface Props {
  designs: TDesign[] | undefined;
}

const Designs = ({ designs }: Props) => {
  const dragging = useRef<boolean>(false);
  const designWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dragWrapper = designWrapper.current;
    if (!dragWrapper) return;

    const onPointerDown = () => {
      dragging.current = true;
      dragWrapper.style.scrollBehavior = "auto";
    };
    const onPointerUp = () => {
      dragging.current = false;
      dragWrapper.style.scrollBehavior = "smooth";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (dragging.current === false) return;
      dragWrapper.scrollLeft -= e.movementX;
    };

    dragWrapper.addEventListener("pointerdown", onPointerDown);
    dragWrapper.addEventListener("pointerup", onPointerUp);
    dragWrapper.addEventListener("pointermove", onPointerMove);
    dragWrapper.addEventListener("pointerleave", onPointerUp);

    const cleanup = () => {
      dragWrapper.removeEventListener("pointerdown", onPointerDown);
      dragWrapper.removeEventListener("pointerup", onPointerUp);
      dragWrapper.removeEventListener("pointermove", onPointerMove);
      dragWrapper.removeEventListener("pointerleave", onPointerUp);
    };
    return cleanup;
  }, []);

  const handleArrows = (direction: "left" | "right") => {
    if (!designWrapper.current) return;
    designWrapper.current.scrollLeft += direction === "left" ? -300 : 300;
  };

  return (
    <div className="relative mt-5 px-9 w-full overflow-x-hidden">
      {/* Left Arrow */}
      <div className="left-arrow absolute top-0 left-0 h-full w-24 flex items-center z-[2]">
        <div
          className="hover:bg-[#e9e8f5] w-12 h-12 ml-3 flex items-center justify-center rounded-full cursor-pointer transition duration-300"
          onClick={() => handleArrows("left")}
        >
          <IoIosArrowBack size={20} />
        </div>
      </div>
      {/* Design Cards Wrapper */}
      <div
        ref={designWrapper}
        className="w-full overflow-x-hidden scroll-smooth touch-none"
      >
        <div className="flex gap-3 w-fit">
          {designs &&
            designs.map((design) => (
              <Design key={design._id} design={design} />
            ))}
        </div>
      </div>
      {/* Right Arrow */}
      <div className="right-arrow absolute top-0 right-0 h-full w-24 flex items-center justify-end z-[2]">
        <div
          className="hover:bg-[#e9e8f5] w-12 h-12 mr-3 flex items-center justify-center rounded-full cursor-pointer transition duration-300"
          onClick={() => handleArrows("right")}
        >
          <IoIosArrowForward size={20} />
        </div>
      </div>
    </div>
  );
};

export default Designs;
