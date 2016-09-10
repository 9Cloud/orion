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
                        <NavItem onlyActiveOnIndex={true} anchor="Home" />
                        <NavDropdown to={null} anchor="Auth Examples">
                            <li><Link to="login">Login</Link></li>
                            <li><Link to="register">Register</Link></li>
                            <li><Link to="reset_password">Reset Password</Link></li>
                        </NavDropdown>
                    </NavList>
                </div>
            </NavHeader>
        )
    }
}