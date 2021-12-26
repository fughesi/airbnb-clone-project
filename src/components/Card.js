import React from "react"
import Star from "../images/star.png"


export default function Card(props) {
    return (
        <>
        <div id="cardContainer">
            {/* <h6>SOLD OUT</h6> */}
            <img src={props.img} alt="." />
            <div id="cardText">
                <p><img src={Star} alt="star" /> {props.rating}<span>{props.reviewCount} • {props.location}</span></p>
                <p>{props.title}</p>
                <p><span>From ${props.price}</span> / person</p>
            </div>
            
        </div>
        </>
    )
}