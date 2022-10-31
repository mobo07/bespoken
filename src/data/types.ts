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

// export interface ImgState {
//     size: string;
// }