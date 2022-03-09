import React from "react";
import image from './airbnb-logo.png'

export default function Navbar (){
    return (
        <nav>
            <img src = {image} alt='airbnb' className = "nav--logo" />
        </nav>
        )
}