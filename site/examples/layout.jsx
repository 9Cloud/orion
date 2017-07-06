"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var tide_1 = require("tide");
var helpers_1 = require("orion/ui/helpers");
var header_1 = require("orion/ui/header");
var link_1 = require("tide/router/link");
var mobx_react_devtools_1 = require("mobx-react-devtools");
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        return (<div>
              <Navigation />
              {this.props.children}
              <mobx_react_devtools_1.default position={{ top: 50, right: 0 }}/>
              <helpers_1.Spacer />
          </div>);
    };
    return Layout;
}(tide_1.View));
exports.Layout = Layout;
var Navigation = (function (_super) {
    __extends(Navigation, _super);
    function Navigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navigation.prototype.render = function () {
        return (<header_1.NavHeader>
                <div className="l-col-push-1 l-col-lg-10">
                    <header_1.NavList>
                        <header_1.NavItem onlyActiveOnIndex={true} anchor="Home" to="home"/>
                        <header_1.NavDropdown to={null} anchor="Auth Examples">
                            <li><link_1.Link to="login">Login</link_1.Link></li>
                            <li><link_1.Link to="register">Register</link_1.Link></li>
                            <li><link_1.Link to="reset_password">Reset Password</link_1.Link></li>
                        </header_1.NavDropdown>
                    </header_1.NavList>
                </div>
            </header_1.NavHeader>);
    };
    return Navigation;
}(tide_1.View));
exports.Navigation = Navigation;
