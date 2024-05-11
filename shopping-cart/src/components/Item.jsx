import React from 'react'
import Image from "../assets/product1.png"
function Item(props) {
    const { id, name, price, image, quantity } = props;
    return (
        <div>
            <div className="card">
                <img src={image} alt={id} />
                <div className="product">
                    <p className="name">ชื่อสินค้า : {name}</p>
                    <p className="price">ราคา : {price} บาท</p>
                </div>
            </div>
        </div>
    )
}

export default Item