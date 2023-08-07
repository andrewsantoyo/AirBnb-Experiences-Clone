import React from "react";
import katieZaferes from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card() {
    return ( 
        <div className="card">
            <img src={katieZaferes} alt="Katie Zaferes" class="card--image"/>
            <div class="card--stats">
                <img src={star} alt="star" class="card--star"/>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}