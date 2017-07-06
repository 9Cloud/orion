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
var StyleGuidePage = (function (_super) {
    __extends(StyleGuidePage, _super);
    function StyleGuidePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyleGuidePage.prototype.render = function () {
        return (<div className="l-col-push-1 l-col-lg-10">
                <div className="l-col-lg-2 l-sidebar sticky">
                    {this.sidebar()}
                </div>

                <div className="l-col-lg-10 l-col-gut-lg">
                    {this.main()}
                </div>
            </div>);
    };
    return StyleGuidePage;
}(tide_1.View));
exports.StyleGuidePage = StyleGuidePage;
