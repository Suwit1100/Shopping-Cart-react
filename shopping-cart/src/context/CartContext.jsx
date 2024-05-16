import { createContext, useContext, useEffect, useReducer } from "react";
import products from "../data/product.js";
import CartReducer from "../reducer/CartReducer.js";
// สร้าง Context เปล่าๆ
const CartContext = createContext()
const initState = {
    products: products,
    amount: 0,
    total: 0
};

// สร้าง Provider ไว้กระจายข้อมูล
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initState)
    useEffect(() => {
        dispatch({ type: "CALTOTAL" })
    }, [state.products])

    function formatMoney(money) {
        return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    function removeItem(id) {
        console.log(id);
        dispatch({ type: "REMOVEITEM", paylode: id })
    }

    function increQuantity(id) {
        console.log(id);
        dispatch({ type: "INCREQUANTITY", paylode: id })
    }

    function decreQuantity(id) {
        console.log(id);
        dispatch({ type: "DECREQUANTITY", paylode: id })
    }
    return (
        <CartContext.Provider value={{ ...state, formatMoney, removeItem, increQuantity, decreQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

//นำ Context ออกไปใช้
export const useCart = () => {
    return useContext(CartContext)
}