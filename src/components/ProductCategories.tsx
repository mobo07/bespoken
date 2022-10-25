import ProductCategory from "./ProductCategory";

interface Category {
  id: number;
  type: "T-shirts" | "Sweat-shirts" | "Hoodies";
  img: string;
}

const categories: Category[] = [
  {
    id: 1,
    type: "T-shirts",
    img: "assets/images/tshirt-category.png",
  },
  {
    id: 2,
    type: "Sweat-shirts",
    img: "assets/images/sweatshirt-category.png",
  },
  {
    id: 3,
    type: "Hoodies",
    img: "assets/images/hoodies-category.png",
  },
];

const ProductCategories = () => {
  return (
    <div className="mt-10 p-7">
      <h2 className="text-[#550417] font-bold text-xl">Product Categories</h2>
      <div className="w-full flex items-center justify-around mt-6">
        {categories.map((category) => (
          <ProductCategory
            key={category.id}
            type={category.type}
            img={category.img}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
