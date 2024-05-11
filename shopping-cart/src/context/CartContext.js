import { createContext, useContext } from "react";
// สร้าง Context เปล่าๆ
const CartContext = createContext()

//นำ Context ออกไปใช้
export const useCart = () => {
    return useContext(CartContext)
}