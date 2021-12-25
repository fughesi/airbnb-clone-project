import React from "react"
import Katie from "../images/katie-zaferes.png"
import Star from "../images/star.png"

export default function Card() {
    return (
        <>
        <div id="cardContainer">
            <h6>SOLD OUT</h6>
            <img src={Katie} alt="swimmer" />
            <div id="cardText">
                <p><img src={Star} alt="star" /> 5.0<span>(6) • USA</span></p>
                <p>Life lessons with Katie Zaferes</p>
                <p><span>From $136</span> / person</p>
            </div>
            
        </div>
        </>
    )
}