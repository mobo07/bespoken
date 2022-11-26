import ProductCategory from "./ProductCategory";

interface Category {
  id: number;
  name: "T-shirts" | "Sweat-shirts" | "Hoodies";
  type: "t-shirt" | "sweat-shirt" | "hoodie";
  img: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "T-shirts",
    type: "t-shirt",
    img: "assets/images/tshirt-category.png",
  },
  {
    id: 2,
    name: "Sweat-shirts",
    type: "sweat-shirt",
    img: "assets/images/sweatshirt-category.png",
  },
  {
    id: 3,
    name: "Hoodies",
    type: "hoodie",
    img: "assets/images/hoodies-category.png",
  },
];

const ProductCategories = () => {
  return (
    <div className="px-7">
      <div className="w-full flex items-center justify-around mt-6">
        {categories.map((category) => (
          <ProductCategory
            key={category.id}
            name={category.name}
            type={category.type}
            img={category.img}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
