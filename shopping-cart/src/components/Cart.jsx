import React from 'react'
import Item from './Item'
import { useCart } from '../context/CartContext'
function Cart() {
    const { products } = useCart()
    return (
        <div>
            {products.map((item) => {
                return (
                    <Item key={item.id} {...item}></Item>
                );
            })}
        </div>
    )
}

export default Cart