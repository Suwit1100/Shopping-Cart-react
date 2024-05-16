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
    return state;
}
export default CartReducer;