import products from "../data/product";

// สร้าง Reducer
const CartReducer = (state, action) => {
    if (action.type === "CALTOTAL") {
        const { amount, total } = state.products.reduce((caltotal, e) => {
            const { price, quantity } = e;
            caltotal.total += (price * quantity);
            caltotal.amount += (quantity);
            return caltotal
        },
            {
                amount: 0,
                total: 0
            }
        )
        return {
            ...state,
            amount,
            total
        };
    }
    if (action.type === "REMOVEITEM") {
        const id = action.paylode;
        const result = state.products.filter((e) => e.id !== id);
        return {
            ...state,
            products: result
        };
    }
    return state
}
export default CartReducer;