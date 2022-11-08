import FeaturedProduct from "./FeaturedProduct";
import { featuredProducts } from "../data/featuredProducts";

const FeaturedProducts = () => {
  return (
    <div className="mt-5 p-7">
      <div className="flex flex-wrap items-center justify-center">
        {featuredProducts.map((product) => (
          <FeaturedProduct
            key={product.id}
            img={product.img}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
