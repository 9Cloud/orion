import React, {PropTypes} from "react";
import classNames from "classnames/bind";
import {Link, IndexLink} from 'tide/router/link';
import {Icon} from 'orion/ui/helpers';

/*
 Usage

 <NavHeader>
     <div className="l-col-push-1 l-col-lg-10">
     <NavList>

       <NavItem>
            <IndexLink to="/" activeClass="active" onlyActiveOnIndex={true}>Home</IndexLink>
       </NavItem>

       <NavItem to="colors">Colors</NavItem>

     </NavList>
     </div>
 </NavHeader>

 The children of a header should be contained within a NavList.
 The children of a NavList should be components of classes NavItem or NavDropdown.

*/
export const NavHeader = (props) => (
    <header className="header l-clearfix">
        <div className="pg-container">
            <IndexLink to="/"><h1 className="logo">{props.site_name ? props.site_name : null}</h1></IndexLink>
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

     4. Conditional Rendering

        <NavItem to="typography" anchor="Typography" when={this.user.is_interested_in_typography} />
 */
export class NavItem extends React.Component{
    static propTypes = {
        // Will be used to create a link
        to: React.PropTypes.string,
        params: React.PropTypes.object,
        // Either anchor or children must be defined
        //anchor: isRequiredIf(React.PropTypes.node, props => !props.children),
        // Only does something if to is defined
        onlyActiveOnIndex: React.PropTypes.bool,
        //children: isRequiredIf(React.PropTypes.node, props => !props.anchor),
        when: React.PropTypes.bool
    };

    static defaultProps ={
        to: null,
        anchor: "",
        params: null,
        onlyActiveOnIndex: false,
        when: true
    };

    render() {
        let {to, params, anchor, onlyActiveOnIndex, children, when} = this.props;

        // We didn't meet the condition to render this link, render nothing
        if (!when) {
            return <noscript/>;
        }

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
                          params={params}
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
    Nav Item with an icon instead of text.

    <NavIcon to="/messages" icon="inbox"/>

 */
export const NavIcon = ({to, icon, when, children}) => {
    if (!when) {
        return <noscript/>;
    }
    return <NavItem to={to} anchor={<Icon type={icon}/>} children={children}/>;
};

/*
 Usage

     <NavDropdown anchor="Examples">
         <li>Item One</li>
         <li>Item Two</li>
         <li>Item Three</li>
     </NavDropdown>

     Inner elements must be list items. These will appear as the dropdown.
*/
export const NavDropdown = ({to, params, anchor, children}) => {
    return (
        <NavItem to={to} params={params}
                 anchor={anchor}>
            <ul className="l-nav-dd">
                {children}
            </ul>
        </NavItem>
    )
};


/*
 Usage

 <NavList position="left">
    <NavItem to="colors">Colors</NavItem>
 </NavList>

*/
export const NavList = ({children, className, position}) => {
    let classes = classNames(
        [className, "l-nav-list"],
        {
            "l-float-left" : position == "left",
            "l-float-right": position == "right"
        }
    );

    return (
        <ul className={classes}>{children}</ul>
    )
};
