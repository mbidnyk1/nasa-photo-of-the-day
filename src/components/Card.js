import React from "react";

const Card = props => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <img src={props.url} alt='Lost in space' />
            <p>{props.desc}</p>
            <p>copyright:{props.copyright}</p>
        </div>
    );
};

export default Card;