// สร้าง Reducer
const CartReducer = (state, action) => {
    if (action.type === "CALTOTAL") {
        const { amouth, total } = state.products.reduce((caltotal, e) => {
            const { price, quantity } = e;
            caltotal.total += (price * quantity);
            caltotal.amouth += (quantity);
            return caltotal
        },
            {
                amouth: 0,
                total: 0
            }
        )
        return {
            ...state,
            amouth,
            total
        };
    }
    return state;
}
export default CartReducer;