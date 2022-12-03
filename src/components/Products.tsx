import SingleProduct from "./Product";
import { useEffect, useState } from "react";
import { FiltersState, Product } from "../data/types";

interface Props {
  products: Product[] | undefined;
  filters?: FiltersState;
}

const Products = ({ products, filters }: Props) => {
  const [filteredProducts, setFilteredProducts] = useState<
    Product[] | undefined
  >(undefined);

  useEffect(() => {
    if (products && filters && (filters.color || filters.size)) {
      const arr = products.filter((product) =>
        Object.entries(filters).every((el) =>
          product[el[0] as "color" | "size"].includes(el[1])
        )
      );
      setFilteredProducts(arr);
    }
  }, [filters]);

  return (
    <div className="mt-5 p-7">
      <div className="flex flex-wrap items-center justify-center">
        {filteredProducts
          ? filteredProducts.map((product) => (
              <SingleProduct key={product._id} product={product} />
            ))
          : products?.map((product) => (
              <SingleProduct key={product._id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Products;
