import React, {PropTypes} from "react";
import classNames from "classnames/bind";
import {Link} from 'react-router';
import {slugify} from 'orion/utils/string';
import {Div} from './div';

export const Section = (props) => {
    let {className, title, slug, children, ...other} = props;
    let classes = classNames(["section-container", "l-clear", "l-row-gut-4", className]);
    slug = slug || slugify(title);

    return (
        <div className={classes}>
            <h1 className="section-title"><a name={slug}>{title}</a></h1>
            {children}
        </div>
    );
};

export const SubSection = (props) => {
    let {className, title, children,...other} = props;
    let classes = classNames(["section-container", "l-clear", className]);

    return (
        <div className={classes} {...other}>
            <h3>{title}</h3>
            {children}
        </div>
    );
};
