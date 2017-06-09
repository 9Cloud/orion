import React from "react"; import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import {Component} from "tide/components";
import {observable} from "mobx";

export const Avatar = (props) => {
    let size = props.size ? props.size : 50;
    if (props.image) {
        return <img src={props.image} className="l-card-avatar l-avatar"/>;
    } else {
        return <img src={`https://www.gravatar.com/avatar/?s=${size}`} className="l-card-avatar l-avatar"/>;
    }
};