import * as React from "react";

export const Avatar = (props) => {
    let size = props.size ? props.size : 50;
    if (props.image) {
        return <img src={props.image} className="l-card-avatar l-avatar"/>;
    } else {
        return <img src={`https://www.gravatar.com/avatar/?s=${size}`} className="l-card-avatar l-avatar"/>;
    }
};