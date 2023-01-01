interface Props {
  type: "products" | "designs" | "single" | "default";
  color?: string;
}

const SkeletonLoader = ({ type, color }: Props) => {
  const ProductsLoader = () => {
    return (
      <div className="mt-5 p-7 h-max">
        <div className="flex flex-wrap items-center justify-center h-max">
          {new Array(8).fill("loading").map((el, idx) => (
            <div
              key={idx}
              className="blink-2 w-[17.5rem] h-[22rem] bg-[#e7e2e2] m-3"
            ></div>
          ))}
        </div>
      </div>
    );
  };

  const DesignsLoader = () => {
    return (
      <div className="mt-5 px-9 w-full overflow-x-hidden">
        <div className="w-full overflow-x-hidden">
          <div className="flex gap-3 w-fit">
            {new Array(12).fill("loading").map((el, idx) => (
              <div key={idx} className="blink-2 bg-[#e7e2e2] w-36 h-36"></div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const SingleProductPageLoader = () => {
    return (
      <div className="mt-[4.3rem] flex flex-col p-4 md:flex-row">
        <div className="blink-2 bg-[#e7e2e2] h-[50vh] md:h-[90vh] md:flex-1"></div>
        <div className="py-5 md:flex-1 md:py-0 md:px-12">
          <div className="blink-2 bg-[#e7e2e2] w-52 h-11"></div>
          <div className="blink-2 bg-[#e7e2e2] my-6 w-full h-24 md:w-[30rem]"></div>
          <div className="blink-2 bg-[#e7e2e2] w-40 h-11"></div>
          <div className="flex items-center my-6">
            <div className="blink-2 bg-[#e7e2e2] w-36 h-10"></div>
            <div className="blink-2 bg-[#e7e2e2] mx-12 w-36 h-10"></div>
          </div>
          <div className="blink-2 bg-[#e7e2e2] w-16 rounded-sm"></div>
        </div>
      </div>
    );
  };

  const CustomOutfitSpinner = () => {
    return (
      <span
        className="loader"
        style={{ borderTop: `3px solid ${color}` }}
      ></span>
    );
  };

  switch (type) {
    case "products":
      return <ProductsLoader />;
    case "designs":
      return <DesignsLoader />;
    case "single":
      return <SingleProductPageLoader />;
    case "default":
      return <CustomOutfitSpinner />;

    default:
      return <p className="text-center">loading...</p>;
  }
};

export default SkeletonLoader;
