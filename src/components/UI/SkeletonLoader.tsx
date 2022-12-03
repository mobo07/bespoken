interface Props {
  type: "products" | "single";
}

const SkeletonLoader = ({ type }: Props) => {
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

  const SingleProductPageLoader = () => {
    return (
      <div className="mt-[4.3rem] flex p-4">
        <div className="blink-2 flex-1 bg-[#e7e2e2] h-[90vh]"></div>
        <div className="flex-1 px-12">
          <div className="blink-2 bg-[#e7e2e2] w-52 h-11"></div>
          <div className="blink-2 bg-[#e7e2e2] my-6 w-[30rem] h-24"></div>
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

  switch (type) {
    case "products":
      return <ProductsLoader />;
    case "single":
      return <SingleProductPageLoader />;

    default:
      return <p className="text-center">loading...</p>;
  }
};

export default SkeletonLoader;