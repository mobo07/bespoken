export type YouthSizes = "YXS" | "YS" | "YXL";
export type AdultSizes = "S" | "M" | "L" | "XL" | "2XL";

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