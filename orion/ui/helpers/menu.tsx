import * as React from "react";
import {Link} from "tide/router/link";

export const VMenuLink = ({to, index, hash, direct, children,...others})=> {
    if (to) {
        return <Link {...others}
                     to={to}
                     className="l-vmenu-item"
                     activeClassName="l-vmenu-item--active"
                     onlyActiveOnIndex={false}>{children}</Link>;
    }
    if (index) {
        return <Link {...others}
                     to="/"
                     className="l-vmenu-item l-vmenu-item--primary"
                     activeClassName="l-vmenu-item--active"
                     onlyActiveOnIndex={true}>{children}</Link>;
    }

    let active_class, href;
    if(hash){
        let hash_matches = location.hash == hash;
        let index_hash   = hash == "#" && location.hash == "";
        active_class = (hash_matches || index_hash) ? "l-vmenu-item--active" : "";
        href = hash;
    }else{
        href = direct;
        active_class = "";
    }

    return (
        <a {...others}
            className={`l-vmenu-item ${active_class}`}
            href={href}>
                {children}
        </a>
    )
};