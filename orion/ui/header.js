import React, {PropTypes} from "react";
import classNames from "classnames/bind";
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';

export const Header = (props) => (
    <header className="header l-clearfix sticky">
        <div className="pg-container">
            <IndexLink to="/"><h1 className="logo">Site Name</h1></IndexLink>
            <nav className="nav-container">
                <div className="icon-menu" id="nav-icon-menu"></div>
                {props.children}
            </nav>
        </div>
    </header>
);

export const NavItem = ({to, children}) => {
    if(to){
        return <li className="nav-item"><Link activeClassName="active" to={to}>{children}</Link></li>
    }else{
        return <li className="nav-item">{children}</li>
    }
};

export const NavList = ({children}) => (<ul className="nav-list">{children}</ul>);
