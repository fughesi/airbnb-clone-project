import React from "react"
import Star from "../images/star.png"


export default function Card(props) {
    console.log(props.info)
    
    let badgeText
    if (props.info.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.info.location === "Online") {
        badgeText = "Online"
    }

    return (
        <>
        <div id="cardContainer">
            <div id="cardFlex">
                {badgeText && <h6>{badgeText}</h6>}
                <img src={props.info.coverImg} alt="." />
                <div id="cardText">
                    <p><img src={Star} alt="star" /> {props.info.stats.rating}<span> ({props.info.stats.reviewCount}) • {props.info.location}</span></p>
                    <p>{props.info.title}</p>
                    <p><span>From ${props.info.price}</span> / person</p>
                </div>
            </div>
        </div>
        </>
    )
}