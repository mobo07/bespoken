import { ImgOptions } from "../data/types";

interface Props {
  imgOpts: ImgOptions;
  handleImgOpts: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RangeSlider = ({ imgOpts, handleImgOpts }: Props) => {
  return (
    // Wrapper Div
    <div className="mt-3 h-6 w-[45%] ">
      {/* field */}
      <div className="relative flex items-center justify-center h-full">
        <input
          onChange={(e) => handleImgOpts(e)}
          type="range"
          min="0.25"
          max="1.7"
          value={imgOpts.size}
          step=".01"
        />
      </div>
    </div>
  );
};

export default RangeSlider;