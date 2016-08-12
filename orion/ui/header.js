import React, {PropTypes} from "react";
import classNames from "classnames/bind";
import Link from 'react-router/lib/Link';

export const Header = (props) => (
    <header className="header l-clearfix sticky">
        <div className="pg-container">
            <Link to="/"><h1 className="logo">Site Name</h1></Link>
            <nav className="nav-container">
                <div className="icon-menu" id="nav-icon-menu"></div>
                {props.children}
            </nav>
        </div>
    </header>
);

export const NavItem = ({to, children}) => {
    return <li className="nav-item"><Link to={to}>{children}</Link></li>
};

export const NavList = ({children}) => (<ul className="nav-list">{children}</ul>);
