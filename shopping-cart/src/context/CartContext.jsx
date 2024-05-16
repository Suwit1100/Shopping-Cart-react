import { createContext, useContext, useEffect, useReducer } from "react";
import products from "../data/product.js";
import CartReducer from "../reducer/CartReducer.js";
// สร้าง Context เปล่าๆ
const CartContext = createContext()
const initState = {
    products: products,
    amouth: 0,
    total: 0
};
function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

// สร้าง Provider ไว้กระจายข้อมูล
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initState)
    useEffect(() => {
        dispatch({ type: "CALTOTAL" })
        console.log(result);
    }, [state.products])
    return (
        <CartContext.Provider value={{ ...state, formatMoney }}>
            {children}
        </CartContext.Provider>
    )
}

//นำ Context ออกไปใช้
export const useCart = () => {
    return useContext(CartContext)
}