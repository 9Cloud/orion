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
var helpers_1 = require("orion/ui/helpers");
var React = require("react");
var link_1 = require("tide/router/link");
var page_1 = require("./page");
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.intro = function () {
        return (<helpers_1.Section title="Introduction">
                <p className="l-row-gut-4">
                    At it's core, Orion is a lightweight framework built with html & css.
                    You can use it just by including the main.scss file included with the distribution, and nothing else.
                    <br />
                    <br />
                    Where it really shines though is when you use the entire stack of UI components that come bundled with Orion, and built in React.
                </p>
            </helpers_1.Section>);
    };
    Home.prototype.examples = function () {
        return (<helpers_1.Section title="Examples">
                <helpers_1.SubSection title="Login">
                    <p>Simple example pages of a login flow, that leverage Orion's form library.</p>
                    <ul>
                        <li><link_1.Link to="login">Login Page</link_1.Link></li>
                        <li><link_1.Link to="register">Sign-up Page</link_1.Link></li>
                        <li><link_1.Link to="reset_password">Reset Password Pge</link_1.Link></li>
                    </ul>
                </helpers_1.SubSection>
                <helpers_1.SubSection title="Application Examples">
                    <p>More complicated examples, of in-app pages.</p>
                    <ul>
                        <li><link_1.Link to="example">Picture Gallery</link_1.Link></li>
                    </ul>
                </helpers_1.SubSection>

            </helpers_1.Section>);
    };
    Home.prototype.sidebar = function () {
        return (<div className="l-vmenu">
                <helpers_1.VMenuLink hash="#">Home</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#introduction">Introduction</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#examples">Examples</helpers_1.VMenuLink>
            </div>);
    };
    Home.prototype.main = function () {
        return [
            this.intro(),
            this.examples()
        ];
    };
    return Home;
}(page_1.StyleGuidePage));
exports.Home = Home;
