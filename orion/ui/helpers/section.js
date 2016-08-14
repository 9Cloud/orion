import React, {PropTypes} from "react";
import classNames from "classnames/bind";
import {Link} from 'react-router';
import {slugify} from 'orion/utils/string';
import {Div} from './div';

export const Section = (props) => {
    let slug = props.slug || slugify(props.title);

    return (
        <div className="section-container l-clear l-row-gut-4">
            <h1 className="section-title"><a name={slug}>{props.title}</a></h1>
            {props.children}
        </div>
    );
};

export const SubSection = (props) => {
    return (
        <div className="section-container l-clear">
            <h3>{props.title}</h3>
            {props.children}
        </div>
    );
};
