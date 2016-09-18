import React, {PropTypes} from "react";
import {View} from "tide/components";
import {Spacer} from 'orion/ui/helpers';
import {NavHeader, NavItem, NavDropdown, NavList} from 'orion/ui/header';
import {Link} from 'tide/router/link';
import DevTools from 'mobx-react-devtools';


export class Layout extends View {
    render() {
        return (
          <div>
              <Navigation />
              {this.props.children}
              <DevTools position={{top: 50, right: 0}}/>
              <Spacer />
          </div>
        )
    }
}

export class Navigation extends View {
    render() {
        return (
            <NavHeader>
                <div className="l-col-push-1 l-col-lg-10">
                    <NavList>
                        <NavItem onlyActiveOnIndex={true} anchor="Home" to="home" />
                        <NavItem to="color_page">Colors</NavItem>
                        <NavItem to="forms_page">Forms</NavItem>
                        <NavItem to="interactions_page">Interactions</NavItem>
                        <NavItem to="helpers_page">Helpers</NavItem>
                        <NavItem to="ui_page">UI Components</NavItem>
                        <NavItem to="nav_page">Nav</NavItem>
                        <NavItem to="typography_page">Typography</NavItem>
                        <NavDropdown to={null} anchor="Examples">
                            <li><Link to="login">Login Page</Link></li>
                            <li><Link to="register">Sign-up Page</Link></li>
                            <li><Link to="reset_password">Reset Password Page</Link></li>
                            <li><Link to="example">Picture Show</Link></li>
                        </NavDropdown>
                    </NavList>
                </div>
            </NavHeader>
        )
    }
}