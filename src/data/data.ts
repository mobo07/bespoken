interface Product {
    id: number;
    category: "sweat-shirt" | "t-shirt" | "hoodie";
    img: string;
    price: number;
}

type Products = Product[];

export const featuredProducts: Products = [
    {
        id: 1,
        category: "sweat-shirt",
        img: "assets/images/ft-category-img1.jfif",
        price: 5000,
    },
    {
        id: 2,
        category: "t-shirt",
        img: "https://res.cloudinary.com/douecuprk/image/upload/v1672164269/qoptqu9wek4cmkmtteyg.png",
        // img: "assets/images/ft-category-img2.jfif",
        price: 5000,
    },
    {
        id: 3,
        category: "hoodie",
        img: "assets/images/ft-category-img3.jfif",
        price: 5000,
    },
    {
        id: 4,
        category: "t-shirt",
        img: "assets/images/ft-category-img4.jfif",
        price: 5000,
    },
    {
        id: 5,
        category: "hoodie",
        img: "assets/images/ft-category-img5.jfif",
        price: 5000,
    },
    {
        id: 6,
        category: "t-shirt",
        img: "assets/images/ft-category-img6.jfif",
        price: 5000,
    },
    {
        id: 7,
        category: "hoodie",
        img: "assets/images/ft-category-img7.jfif",
        price: 5000,
    },
    {
        id: 8,
        category: "t-shirt",
        img: "assets/images/ft-category-img9.jfif",
        price: 5000,
    },
    {
        id: 9,
        category: "hoodie",
        img: "assets/images/ft-category-img10.jfif",
        price: 5000,
    },
    {
        id: 10,
        category: "hoodie",
        img: "assets/images/ft-category-img12.jfif",
        price: 5000,
    },
    {
        id: 11,
        category: "t-shirt",
        img: "assets/images/ft-category-img13.jfif",
        price: 5000,
    },
    {
        id: 12,
        category: "hoodie",
        img: "assets/images/ft-category-img14.jfif",
        price: 5000,
    },
];

// T-SHIRT CATEGORY COLORS
interface TshirtCategory {
    name: string;
    colorCode: string;
    path: string;
}

export const tshirts: TshirtCategory[] = [
    {
        name: "black",
        colorCode: "#000",
        path: "assets/images/plain-black-shirt.png",
    },
    {
        name: "white",
        colorCode: "#ffffff",
        path: "assets/images/plain tees/shirt11.png",
    },
    {
        name: "blue",
        colorCode: "#08aac7",
        path: "assets/images/plain tees/shirt1.png",
    },
    {
        name: "green",
        colorCode: "#44f069",
        path: "assets/images/plain tees/shirt2.png",
    },
    {
        name: "pink",
        colorCode: "#e731d8",
        path: "assets/images/plain tees/shirt3.png",
    },
    {
        name: "peach",
        colorCode: "#f5896e",
        path: "assets/images/plain tees/shirt4.png",
    },
    {
        name: "purple",
        colorCode: "#d05bf3",
        path: "assets/images/plain tees/shirt5.png",
    },
    {
        name: "yellow",
        colorCode: "#f5be0a",
        path: "assets/images/plain tees/shirt9.png",
    },
];

export const steps = [
    {
      element: "#outfit-type",
      intro: `<p style="font-family: 'Montserrat', sans-serif">Pick an outfit type</p>`,
    },
    {
      element: "#outfit-color",
      intro: `<p style="font-family: 'Montserrat', sans-serif">Select desired outfit color</p>`,
    },
    {
      element: "#outfit-size",
      intro: `<p style="font-family: 'Montserrat', sans-serif">Choose the outfit size</p>`,
    },
    {
      element: "#design-wrapper",
      intro: `<p style="font-family: 'Montserrat', sans-serif">Upload a custom image design from your device or choose a design from the featured designs section on the home page and drag the image to outfit</p>`,
    },
    {
      element: "#outfit-wrapper",
      intro: `<p style="font-family: 'Montserrat', sans-serif">Place the design in the desired position on the outfit</p>`,
    },
    {
      element: "#atc",
      intro: `<p style="font-family: 'Montserrat', sans-serif">Add to cart!</p>`,
      position: "left",
    },
  ];