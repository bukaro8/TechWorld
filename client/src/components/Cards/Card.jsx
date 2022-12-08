import React from "react";

export default function Product({name, image, price}){
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt="" />
            <h2>{price}</h2>
        </div>

    )
}