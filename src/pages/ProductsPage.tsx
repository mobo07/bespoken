import Products from "../components/Products";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FiltersState, Product } from "../data/types";
import { useQuery } from "@tanstack/react-query";
import { fetchCustomProducts } from "../productsApi";
import SkeletonLoader from "../components/UI/SkeletonLoader";

const ProductsPage = () => {
  const search = useLocation().search.slice(1).split("=");

  const filteredProducts = useQuery<Product[]>({
    queryKey: ["products", search[0], search[1]],
    queryFn: () => fetchCustomProducts(search[0], search[1]),
    enabled: search.length === 2 ? true : false,
  });

  const products = useQuery<Product[]>({
    queryKey: ["products", "custom", "false"],
    queryFn: () => fetchCustomProducts("custom", "false"),
    enabled: search.length < 2 ? true : false,
  });

  const [filters, setFilters] = useState<FiltersState>({});

  const handleFilters = (
    e: React.ChangeEvent<HTMLSelectElement>,
    name: string
  ) => {
    let target = e.target as HTMLSelectElement;
    setFilters((prev: FiltersState) => ({ ...prev, [name]: target.value }));
  };

  return (
    <div className="">
      <Navbar />
      <div className="my-3 p-4">
        <h1 className="mb-4 text-2xl font-semibold text-[#550417]">Products</h1>
        <div className="my-4 flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-lg font-medium text-[#550417]">
              Filter Products:
            </p>
            <select
              onChange={(e) => handleFilters(e, "color")}
              className="border border-slate-200 outline-none p-2 rounded-sm text-sm mx-2 cursor-pointer"
            >
              <option value="">Color</option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="blue">Blue</option>
            </select>
            <select
              onChange={(e) => handleFilters(e, "size")}
              className="border border-slate-200 outline-none p-2 rounded-sm text-sm mx-2 cursor-pointer"
            >
              <option value="">Size</option>
              <option value="XL">XL</option>
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="S">S</option>
            </select>
          </div>
          <div className="flex items-center">
            <p className="text-lg font-medium text-[#550417]">Sort Products:</p>
            <select className="border border-slate-200 outline-none p-2 rounded-sm text-sm mx-2 cursor-pointer">
              <option>Newest</option>
              <option>Price (asc)</option>
              <option>Price (desc)</option>
            </select>
          </div>
        </div>

        {(search.length < 2 && products.isLoading) ||
        (search.length === 2 && filteredProducts.isLoading) ? (
          <SkeletonLoader type="products" />
        ) : (
          <Products
            products={search.length < 2 ? products.data : filteredProducts.data}
            filters={filters}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
