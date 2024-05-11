import { createContext, useContext } from "react";
import products from "../data/product";
// สร้าง Context เปล่าๆ
const CartContext = createContext()
const initState = {
    products: products,
    amouth: 0,
    total: 0
};

//นำ Context ออกไปใช้
export const useCart = () => {
    return useContext(CartContext)
}