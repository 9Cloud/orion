import React from "react";
import classNames from "classnames/bind";
import {slugify} from "tide/utils/string";

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
