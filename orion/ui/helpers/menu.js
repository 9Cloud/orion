import React, {PropTypes} from "react";
import classNames from "classnames/bind";
import {Link} from 'react-router';
import {slugify} from 'orion/utils/string';

export const VMenuLink = ({to, index, hash, children})=> {
    if (to) {
        return <Link to={to} className="l-vmenu-item" activeClassName="l-vmenu-item--active"
                     onlyActiveOnIndex={false}>{children}</Link>;
    }
    if (index) {
        return <Link to="/" className="l-vmenu-item l-vmenu-item--primary" activeClassName="l-vmenu-item--active"
                     onlyActiveOnIndex={true}>{children}</Link>;
    }

    let hash_matches = location.hash == hash;
    let index_hash = hash == "#" && location.hash == "";
    let active_class = (hash_matches || index_hash) ? "l-vmenu-item--active" : "";

    return (
        <a className={`l-vmenu-item ${active_class}`}
           href={hash}>
            {children}
        </a>
    )
};