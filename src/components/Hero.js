import React from "react"
import Photogrid from "../images/photo-grid.png"

export default function Hero() {
    return (
        <>
        <div id="heroContainer">
            <img src={Photogrid} alt="grid in hero section" />
            <h3>Online Experience</h3>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
        </>
    )
}