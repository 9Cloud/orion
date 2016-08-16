import React, {PropTypes} from "react";
import classNames from "classnames/bind";
import {Link} from 'react-router';
import {slugify} from 'orion/utils/string';
import {Div} from './div';

// Loading Icon
export const LoadingDiv = (props) => {
    let text = props.text || "Loading ...";
    return (
        <div centerText><span className="l-spinner"></span>
            <div>{text}</div>
        </div>
    )
};

export const LoadingDivLarge = (props) => {
    let text = props.text || "Loading ...";
    return (
        <Div centerText className="l-row-gut-2" style={{"fontSize": '3rem', "marginTop": '2em'}}>
            <span style={{width: '100px', height: '100px'}} className="l-spinner"></span>
            <div>{text}</div>
        </Div>);
};

// Regular Icon
export const Icon = (props) => {
    let {onClick, ...others} = props;

    if (onClick) {
        return <a href="" onClick={onClick}><span className={`l-col-gut-sm icon-${props.type}`} {...others}/></a>
    } else {
        return <span className={`l-col-gut-sm icon-${props.type}`} {...others}/>
    }
};

// Horizontal Spacer
export const Spacer = (props) => <div className={`l-clear l-row-gut-${props.size ? props.size : 'half'}`}></div>;


/// Paragraphs ///

// Markdown paragraph
export const MarkDown = (props) => (
    <div dangerouslySetInnerHTML={{__html: props.children} }></div>
);