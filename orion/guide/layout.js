import React, {PropTypes} from "react";
import {Component} from "tide/components";
import {Spacer} from 'orion/ui/helpers';
import {Header, NavItem, NavDropdown, NavList} from 'orion/ui/header';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';

export class Navigation extends Component {
    render() {
        return (
            <Header>
                <div className="l-col-push-1 l-col-lg-10">
                    <NavList>
                        <NavItem onlyActiveOnIndex={true} anchor="Home" />
                        <NavItem to="colors">Colors</NavItem>
                        <NavItem to="forms">Forms</NavItem>
                        <NavItem to="interactions">Interactions</NavItem>
                        <NavItem to="helpers">Helpers</NavItem>
                        <NavItem to="components">UI Components</NavItem>
                        <NavItem to="nav">Nav</NavItem>
                        <NavItem to="typography">Typography</NavItem>
                        <NavDropdown to={null} anchor="Examples">
                            <li><Link to="examples/login">Login Page</Link></li>
                            <li><Link to="examples/signup">Sign-up Page</Link></li>
                            <li><Link to="examples/reset_password">Reset Password Pge</Link></li>
                        </NavDropdown>
                    </NavList>
                </div>
            </Header>
        )
    }
}

export class StyleGuidePage extends Component {
    render() {
        return (
          <div>
              <Navigation />
              <div className="l-col-push-1 l-col-lg-10">
                  <div className="l-col-lg-2 l-sidebar sticky">
                      {this.sidebar()}
                  </div>

                  <div className="l-col-lg-10 l-col-gut-lg">
                      {this.main()}
                  </div>
              </div>

              <Spacer />
          </div>
        )
    }
}