import SingleProduct from "./Product";
import { useEffect, useState } from "react";
import { fetchProducts } from "../axios";
import { CustomOutfitState, FiltersState, Product } from "../data/types";
import { AxiosResponse } from "axios";
import SkeletonLoader from "./UI/SkeletonLoader";

interface Props {
  queryParams?: [string, string] | undefined;
  filters?: FiltersState;
}

const Products = ({ queryParams, filters }: Props) => {
  const [products, setProducts] = useState<CustomOutfitState>({
    outfit: undefined,
    loading: false,
    error: false,
  });
  const [filteredProducts, setFilteredProducts] = useState<
    Product[] | undefined
  >(undefined);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let res: AxiosResponse<Product[], any>;
        setProducts((prev: CustomOutfitState) => ({ ...prev, loading: true }));
        if (!queryParams) {
          res = await fetchProducts.get<Product[]>("products?custom=false");
        } else
          res = await fetchProducts.get<Product[]>(
            `products?${queryParams[0]}=${queryParams[1]}`
          );

        //SET PRODUCTS
        queryParams?.join("=") === "custom=false"
          ? setProducts((prev: CustomOutfitState) => ({
              ...prev,
              loading: false,
              outfit: res.data.slice(0, 12),
            }))
          : setProducts((prev: CustomOutfitState) => ({
              ...prev,
              loading: false,
              outfit: res.data,
            }));
        //SET FILTERED PRODUCTS
        if (products.outfit && filters && (filters.color || filters.size)) {
          const arr = products.outfit?.filter((product) =>
            Object.entries(filters).every((el) =>
              product[el[0] as "color" | "size"].includes(el[1])
            )
          );
          setFilteredProducts(arr);
        }
      } catch (err) {
        setProducts((prev: CustomOutfitState) => ({
          ...prev,
          loading: false,
          error: true,
        }));
      }
    };

    getProducts();
  }, [queryParams, filters]);

  return (
    <>
      {products.loading ? (
        <SkeletonLoader type="products" />
      ) : (
        <div className="mty-5 p-7">
          <div className="flex flex-wrap items-center justify-center">
            {filteredProducts ? (
              filteredProducts.map((product) => (
                <SingleProduct key={product._id} product={product} />
              ))
            ) : products.outfit ? (
              products.outfit.map((product) => (
                <SingleProduct key={product._id} product={product} />
              ))
            ) : (
              <p className="text-center">Cannot fetch items.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
