import React, {PropTypes} from "react";
import classNames from "classnames/bind";
import {Link} from 'react-router';
import {slugify} from 'orion/utils/string';
import {Div} from './div';

// Successful action
export const Success = (props) => <Div className="success" {...props}>{props.children}</Div>;

// Action resulted in error
export const ErrorText = (props) => {
    let withBackground = props.withBackground == true;

    if (withBackground) {
        return <Div className="l-error" {...props}>{props.children}</Div>;
    }
    else {
        return <Div className="l-error-txt " {...props}>{props.children}</Div>
    }

};

// Blank State
export const Blank = (props) => <Div className="l-blank-state" {...props}>{props.children}</Div>;

// Notice
export const Notice = (props) => <Div className="l-notice" {...props}>{props.children}</Div>;