import React from "react";
import Product from "../Product/Product";

var products = [{
    name: "Laptop",
    image: "https://www.lenovo.com/medias/lenovo-laptop-ideapad-3-15-intel-hero.png?context=bWFzdGVyfHJvb3R8MjczNzUyfGltYWdlL3BuZ3xoMGQvaDYxLzE0MTkwNTI5Njc1Mjk0LnBuZ3xmYTMyYzBlZmE5NTcyNzAyMTZhZmJlMmFmOTVjMmZmYTM4ZTdjNWFiZWM0YzE5YWQ2YzcxNmM3OTE2MThjZmE4",
    price: "$500"
}, {
    name: "Headphones",
    image: "https://www.sony.com.ar/image/1cc1c23c2224adedbaaa8c3e656bef23?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
    price: "$50"
}, {
    name: "Fridge",
    image: "https://www.lg.com/uk/images/fridge-freezers/md07526643/gallery/D1.jpg",
    price: "$800"
}]

export default function Home(){
    return (
        <div>
            <div>
                {products.map(e => {
                    return (
                        <Product
                            image={e.image}
                            name={e.name}
                            price={e.price}
                        />
                    )
                })}
            </div>
        </div>
    )
}