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
var page_1 = require("./page");
var HelpersPage = (function (_super) {
    __extends(HelpersPage, _super);
    function HelpersPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelpersPage.prototype.sidebar = function () {
        return (<div className="l-vmenu">
                <helpers_1.VMenuLink index={true}>← Home</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#helpers">Helper Classes</helpers_1.VMenuLink>
            </div>);
    };
    HelpersPage.prototype.main = function () {
        return (<div>
                <p> This is a quick guide for class names used on the style guide. These helpers will eventually be replaced by actual code snippets.</p>
                <helpers_1.Section title="helpers">
                    <code>.l-float-left</code>
                    <code>.l-float-right</code>
                    <code>.l-clear</code>

                    <code>.l-inline</code>

                    <code>.l-hidden</code>
                    <code>.l-no-margin</code>
                    <code>.l-no-padding</code>

                    <code>.l-center-txt</code>
                    --- only center text
                    <code>.l-hidden</code>

                    <code>.l-align--abscenter </code>
                    --- centers element exactly in the middle of the page both horizontally/vertically
                    <code>.l-align--horizontal</code>
                    --- centers div only horizontally
                </helpers_1.Section>
            </div>);
    };
    return HelpersPage;
}(page_1.StyleGuidePage));
exports.HelpersPage = HelpersPage;
