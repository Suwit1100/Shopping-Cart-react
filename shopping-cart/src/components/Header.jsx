import React from 'react'
import "../css/Header.css"
import { useCart } from '../context/CartContext'

function Header() {
    const { amount } = useCart();
    return (
        <>
            <header >
                <span>Shopping Cart </span>
                <span>สินค้าในตระกร้า : {amount}</span>
            </header>
        </>
    )
}

export default Header