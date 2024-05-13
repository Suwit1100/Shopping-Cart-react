import React from 'react'
import "../css/Item.css"
import { useCart } from '../context/CartContext';
function Item(props) {
    const { id, name, price, image, quantity } = props;
    const { formatMoney } = useCart();
    return (
        <div>
            <div className="card">
                <img src={image} alt={id} />
                <div className="product">
                    <p className="name">ชื่อสินค้า : {name}</p>
                    <p className="price">ราคา : {formatMoney(price)} บาท</p>
                </div>
                <div className="quantity">
                    <button>+</button>
                    <input type="text" value={quantity} />
                    <button>-</button>
                </div>
                <div className="total-price">{formatMoney(quantity * price)}</div>
                <button>ลบสิ้นค้า</button>
            </div>
        </div>
    )
}

export default Item