import React from "react";
import picture from './picture.png'

export default function Hero (){
    return (
        <div className='hero'>
            <img src ={picture} alt="collage" className= "hero--picture" />
            <h1 className='hero--header'>Online Experirences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
        
        )
}

