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
var Interactions = (function (_super) {
    __extends(Interactions, _super);
    function Interactions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Interactions.prototype.main = function () {
        return (<helpers_1.Section title="States" slug="states">
                <helpers_1.SubSection title="With Background">
                    <helpers_1.Notice>This is a notice.</helpers_1.Notice>
                    <helpers_1.Blurb>This is a blurb.</helpers_1.Blurb>
                    <helpers_1.Warning>This is a warning. And your last in fact.</helpers_1.Warning>
                    <helpers_1.Success>This is a success. No a triumph!</helpers_1.Success>
                    <helpers_1.Info>This is a informational.</helpers_1.Info>
                    <helpers_1.Danger>This is a dangerous thing.</helpers_1.Danger>
                    <helpers_1.ErrorState>This is a state of error.</helpers_1.ErrorState>
                    <helpers_1.BlankState>This is a blank state.</helpers_1.BlankState>
                </helpers_1.SubSection>


                <helpers_1.SubSection title="Without Background">
                    <helpers_1.Notice boxed={false}>This is a notice.</helpers_1.Notice>
                    <helpers_1.Blurb boxed={false}>This is a blurb.</helpers_1.Blurb>
                    <helpers_1.Warning boxed={false}>This is a warning. And your last in fact.</helpers_1.Warning>
                    <helpers_1.Success boxed={false}>This is a success. No a triumph!</helpers_1.Success>
                    <helpers_1.Info boxed={false}>This is a informational.</helpers_1.Info>
                    <helpers_1.Danger boxed={false}>This is a dangerous thing.</helpers_1.Danger>
                    <helpers_1.ErrorState boxed={false}>This is a state of error.</helpers_1.ErrorState>
                    <helpers_1.BlankState boxed={false}>This is a blank state.</helpers_1.BlankState>
                </helpers_1.SubSection>

                <helpers_1.Section title="Animations">
                    <div className="icon-heartbeat"></div>
                    <div className="icon-heart"></div>
                </helpers_1.Section>
            </helpers_1.Section>);
    };
    Interactions.prototype.sidebar = function () {
        return (<div className="l-vmenu">
                <helpers_1.VMenuLink index={true}>← Home</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#states">State Notices</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#animations">Animations</helpers_1.VMenuLink>
            </div>);
    };
    return Interactions;
}(page_1.StyleGuidePage));
exports.Interactions = Interactions;
