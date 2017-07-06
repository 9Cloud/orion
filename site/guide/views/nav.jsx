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
var header_1 = require("orion/ui/header");
var helpers_1 = require("orion/ui/helpers");
var React = require("react");
var page_1 = require("./page");
var NavComponent = (function (_super) {
    __extends(NavComponent, _super);
    function NavComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavComponent.prototype.sidebar = function () {
        return (<div className="l-vmenu">
                <helpers_1.VMenuLink index={true}>← Home</helpers_1.VMenuLink>
            </div>);
    };
    NavComponent.prototype.navbar = function () {
        return (<helpers_1.Section title="Navigation Bar" key="1">
                <p className="l-row-gut-2"> This navigation bar is used globally across the site. </p>
                <header_1.NavHeader>
                    <div className="l-col-push-1 l-col-lg-10">
                        <header_1.NavList>
                            <header_1.NavItem anchor="hello"/>
                            <header_1.NavItem anchor="world"/>
                            <header_1.NavItem anchor="there"/>
                        </header_1.NavList>
                    </div>
                </header_1.NavHeader>
            </helpers_1.Section>);
    };
    NavComponent.prototype.main = function () {
        return [
            this.navbar()
        ];
    };
    return NavComponent;
}(page_1.StyleGuidePage));
exports.NavComponent = NavComponent;
