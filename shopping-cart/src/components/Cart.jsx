import React from 'react'
import Item from './Item'
import { useCart } from '../context/CartContext'
import "../css/Cart.css"
function Cart() {
    const { products, total, formatMoney } = useCart()
    return (
        <div>
            <h3 className='total'>ยอดรวมที่ต้องชำระ {formatMoney(total)}</h3>
            {products.map((item) => {
                return (
                    <Item key={item.id} {...item}></Item>
                );
            })}
        </div>
    )
}

export default Cart