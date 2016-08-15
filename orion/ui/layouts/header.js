import React, {PropTypes} from "react";
import classNames from "classnames/bind";
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';
import isRequiredIf from 'react-proptype-conditional-require';

/*
 Usage

 <Header>
     <div className="l-col-push-1 l-col-lg-10">
     <NavList>

       <NavItem>
            <IndexLink to="/" activeClass="active" onlyActiveOnIndex={true}>Home</IndexLink>
       </NavItem>

       <NavItem to="colors">Colors</NavItem>

     </NavList>
     </div>
 </Header>

 The children of a header should be contained within a NavList.
 The children of a NavList should be NavItems or NavDropdowns.

*/
export const Header = (props) => (
    <header className="header l-clearfix sticky">
        <div className="pg-container">
            <IndexLink to="/"><h1 className="logo">Site Name</h1></IndexLink>
            <nav className="l-nav-container">
                <div className="icon-menu" id="l-nav-icon-menu"></div>
                {props.children}
            </nav>
        </div>
    </header>
);

/*
Usage
    1. Set anchor as a child element.

    <NavItem to="typography">Typography</NavItem>

    2. Set anchor explicitly.

    <NavItem to="typography" anchor="Typography" />

    3. Set anchor with additional non-anchored child elements

        <NavItem to="typography" anchor="Typography">
             <ul className="l-nav-dd">
                 <li>Item One</li>
                 <li>Item Two</li>
                 <li>Item Three</li>
             </ul
        </NavItem>
 */
export class NavItem extends React.Component{
    static propTypes = {
        // Will be used to create a link
        to: React.PropTypes.string,
        // Either anchor or children must be defined
        anchor: isRequiredIf(React.PropTypes.string, props => !props.children),
        // Only does something if to is defined
        onlyActiveOnIndex: React.PropTypes.bool,
        children: isRequiredIf(React.PropTypes.node, props => !props.anchor)
    };

    static defaultProps ={
        to: null,
        anchor: "",
        onlyActiveOnIndex: false,
    };

    render() {
        let {to, anchor, onlyActiveOnIndex, children} = this.props;

        let anchor_element;
        let child_elements;

        if (anchor) {
            anchor_element = anchor;
            child_elements = children;
        } else {
            anchor_element = children;
            child_elements = null;
        }



        if (to) {
            return (
                <li className="l-nav-item">
                    <Link activeClassName="active"
                          to={to}
                          onlyActiveOnIndex={onlyActiveOnIndex}>{anchor_element}</Link>
                    {child_elements}
                </li>
            )
        } else {
            return (
                <li className="l-nav-item">
                    <span className="anchor">{anchor_element}</span>
                    {child_elements}
                </li>
            )
        }
    }
}

/*
 Usage

     <NavDropdown anchor="Examples">
         <li>Item One</li>
         <li>Item Two</li>
         <li>Item Three</li>
     </NavDropdown>

     Inner elements must be list items. These will appear as the dropdown.
*/
export const NavDropdown = ({to, anchor, children}) => {
    return (
        <NavItem to={to} anchor={anchor}>
            <ul className="l-nav-dd">
                {children}
            </ul>
        </NavItem>
    )
};


/*
 Usage

 <NavList>
    <NavItem to="colors">Colors</NavItem>
 </NavList>

*/
export const NavList = ({children, className, type}) => {
    let classes = classNames(
        [className, "l-nav-list"],
        {
            "l-float-left" : type == "left",
            "l-float-right": type == "right"
        }
    );

    return (
        <ul className={classes}>{children}</ul>
    )
};
