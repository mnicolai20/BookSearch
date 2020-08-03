import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            {
                props.image,
                props.title,
                props.authors,
                props.description,
                props.link
            }
        </div>
    )
}

export default Card;