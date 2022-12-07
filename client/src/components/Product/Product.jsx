import React from "react";

export default function Product({name, image, price}){
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt="" />
            <h3>{price}</h3>
        </div>

    )
}