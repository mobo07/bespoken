// export type YouthSizes = "YXS" | "YS" | "YXL";
// export type AdultSizes = "S" | "M" | "L" | "XL" | "2XL";

export interface DragState {
    dragging: boolean;
    offsetX: number;
    offsetY: number;
    left: number | undefined;
    top: number | undefined;
}

export type ImgOptions = {
    size: string
}

export interface Product {
    _id: string;
    name: string;
    type: string;
    desc: string;
    color: string[];
    size: string[];
    img: string;
    customizable: boolean;
    price: string;
    inStock: boolean;
};

export interface CartProduct extends Product {
  cartId: string;
  selectedColor: string;
  selectedSize: string;
  customImg?: string;
  customOutfitImg?: string;
  quantity: number;
  totalPrice: number;
}

export interface CustomOutfitState {
    outfit: Product[] | undefined,
    loading: boolean,
    error: boolean
  };

export interface SingleOutfitState {
    outfit: Product | undefined,
    loading: boolean,
    error: boolean
  };

export interface FiltersState {
  size?: string,
  color?: string,
  sort?: string,
};

export interface CartState {
  products: CartProduct[],
  amount: number,
  cartQuantity: number,
}

export interface UserChoiceState {
  color: string;
  size: string;
  quantity: number;
}

export interface RegisterDetails {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}
export interface LoginDetails {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}

export type UserState = {
  user: IUser | null
};