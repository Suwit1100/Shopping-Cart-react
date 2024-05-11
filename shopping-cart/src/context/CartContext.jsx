import { createContext, useContext, useReducer } from "react";
import products from "../data/product.js";
import CartReducer from "../reducer/CartReducer.js";
// สร้าง Context เปล่าๆ
const CartContext = createContext()
const initState = {
    products: products,
    amouth: 0,
    total: 0
};

// สร้าง Provider ไว้กระจายข้อมูล
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initState)
    return (
        <CartContext.Provider value={{ ...state }}>
            {children}
        </CartContext.Provider>
    )
}

//นำ Context ออกไปใช้
export const useCart = () => {
    return useContext(CartContext)
}