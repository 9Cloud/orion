import classNames from "classnames/bind";
import {Icon} from 'orion/ui/helpers';
import * as React from "react";
import {View} from "tide";
import {IndexLink, Link} from 'tide/router/link';

export const NavHeader = (props) => {
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
    let class_name = classNames(props.className, "header l-clearfix");
    return (
        <header className={class_name}>
            <IndexLink to="/" className="logo"><h1>{props.site_name ? props.site_name : null}</h1></IndexLink>
            <nav className="l-nav-container">
                <div className="icon-menu" id="l-nav-icon-menu"></div>
                {props.children}
            </nav>
        </header>
    )
};

export class NavItem extends View {
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
    static defaultProps = {
        to: null,
        anchor: "",
        params: null,
        onlyActiveOnIndex: false,
        when: true
    };

    props: {
        to: string,   // Will be used to create a link
        params?: any, // Params to interpolate into the string given in 'to'
        onlyActiveOnIndex?: any,
        when?: boolean,
        // Either anchor or children must be defined
        anchor?: React.ReactNode,
        children?: React.ReactNode,
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


interface NavIconProps {
    to: string,
    icon: string,
    when?: boolean,
    children?: React.ReactNode, // anchor text?
    params?: any                // Parameters used on link
}

export const NavIcon = ({to, icon, when, children}: NavIconProps) => {
    /*
        Nav Item with an icon instead of text.

        Usage:
            <NavIcon to="/messages" icon="inbox"/>
     */
    if (!when) {
        return <noscript/>;
    }
    return <NavItem to={to} anchor={<Icon type={icon}/>} children={children}/>;
};


interface NavDropdownProps {
    to: string,
    children: React.ReactNode,
    anchor?: React.ReactNode,
    params?: any // Parameters used on link
}

export const NavDropdown = ({to, params, anchor, children}: NavDropdownProps) => {
    /*
     Usage

         <NavDropdown anchor="Examples">
             <li>Item One</li>
             <li>Item Two</li>
             <li>Item Three</li>
         </NavDropdown>

         Inner elements must be list items. These will appear as the dropdown.
    */
    return (
        <NavItem to={to} params={params} anchor={anchor}>
            <ul className="l-nav-dd">
                {children}
            </ul>
        </NavItem>
    )
};


interface NavListProps {
    children: React.ReactNode,
    className?: string,
    position?: "left" | "right"
}

export const NavList = ({children, className, position}: NavListProps) => {
    /*
     Usage

     <NavList position="left">
        <NavItem to="colors">Colors</NavItem>
     </NavList>

    */
    let classes = classNames(
        [className, "l-nav-list"],
        {
            "l-float-left": position == "left",
            "l-float-right": position == "right"
        }
    );

    return (
        <ul className={classes}>{children}</ul>
    )
};
