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
var ColorsPage = (function (_super) {
    __extends(ColorsPage, _super);
    function ColorsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorsPage.prototype.colors = function () {
        return (<helpers_1.Section title="Colors">
                <helpers_1.SubSection title="Primary Colors">
                    <p className="l-row-gut-4">Primary colors are used for call to action buttons and links. </p>

                    <ColorExample cls="l-bgcolor--primary-color" hex="#FF97A3"/>
                    <ColorExample cls="l-bgcolor--primary--dark" hex="#923939"/>
                    <ColorExample cls="l-bgcolor--primary--light" hex="#EEE2E2"/>
                </helpers_1.SubSection>

                <helpers_1.SubSection title="Secondary Colors">
                    <p className="l-row-gut-4">Secondary colors are used for background colors. </p>

                    <ColorExample cls="l-bgcolor--secondary-color" hex="#262626"/>

                    <helpers_1.Spacer size="4"/>

                    <ColorExample cls="l-bgcolor--secondary-dark" hex="#212121"/>
                    <ColorExample cls="l-bgcolor--secondary--darker" hex="#191919"/>
                    <ColorExample cls="l-bgcolor--secondary--darkest" hex="#000000"/>

                    <helpers_1.Spacer size="4"/>

                    <ColorExample cls="l-bgcolor--secondary--light" hex="#3A3A3A"/>
                    <ColorExample cls="l-bgcolor--secondary--lighter" hex="#C1C1C1"/>
                    <ColorExample cls="l-bgcolor--secondary--lightest" hex="#FFFFFF"/>
                </helpers_1.SubSection>

                <helpers_1.SubSection title="UI Colors">
                    <p className="l-row-gut-4">
                        UI colors are colorful pieces that can be used for components like
                        modals, spinners, tags etc..
                    </p>

                    <ColorExample cls="l-bgcolor--ui-blue" hex="#4B889D"/>
                    <ColorExample cls="l-bgcolor--ui-green" hex="#5f9d47"/>
                    <ColorExample cls="l-bgcolor--ui-yellow" hex="#9d7a33"/>
                    <ColorExample cls="l-bgcolor--ui-red" hex="#9d575f"/>

                    <ColorExample cls="l-bgcolor--ui-faded-blue" hex="?"/>
                    <ColorExample cls="l-bgcolor--ui-faded-green" hex="?"/>
                    <ColorExample cls="l-bgcolor--ui-faded-yellow" hex="?"/>
                    <ColorExample cls="l-bgcolor--ui-faded-red" hex="?"/>
                </helpers_1.SubSection>
            </helpers_1.Section>);
    };
    ColorsPage.prototype.borders = function () {
        return (<helpers_1.Section title="Borders">
                <p>Just like colors, borders are customizable </p>

                Classes available are:
                <ul>
                    <li>.l-border--[color type]--[full, top, left, right, bottom]</li>
                </ul>

                <helpers_1.SubSection title="Primary">
                    <ExampleBorderSection type="primary-color"/>
                    <ExampleBorderSection type="primary--dark"/>
                    <ExampleBorderSection type="primary--light"/>
                </helpers_1.SubSection>

                <helpers_1.SubSection title="Secondary">
                    <ExampleBorderSection type="secondary-color"/>
                    <ExampleBorderSection type="secondary--light"/>
                    <ExampleBorderSection type="secondary--lighter"/>
                    <ExampleBorderSection type="secondary--lightest"/>
                    <ExampleBorderSection type="secondary--dark"/>
                    <ExampleBorderSection type="secondary--darker"/>
                    <ExampleBorderSection type="secondary--darkest"/>
                </helpers_1.SubSection>

                <helpers_1.SubSection title="UI Colors">
                    <ExampleBorderSection type="ui-blue"/>
                    <ExampleBorderSection type="ui-green"/>
                    <ExampleBorderSection type="ui-yellow"/>
                    <ExampleBorderSection type="ui-yellow--light"/>
                </helpers_1.SubSection>
            </helpers_1.Section>);
    };
    ColorsPage.prototype.misc = function () {
        return (<helpers_1.Section title="Misc">
                <helpers_1.SubSection title="Links">
                    <ul>
                        <li><a href="#">This is a normal link without styles</a>.</li>
                        <li><a href="#" className="l-txt-link">This is a link with class .l-txt-link</a>.</li>
                        <li><a href="#" className="l-white-link">This is a link with class .l-white-link</a>.</li>
                    </ul>
                </helpers_1.SubSection>

                <helpers_1.SubSection title="Icons">
                    We use icon fonts from Icomoon.
                    A listing of them is located on <a href="/fonts/icomoon/demo-files/demo.html">here</a>.
                </helpers_1.SubSection>
            </helpers_1.Section>);
    };
    ColorsPage.prototype.sidebar = function () {
        return (<div className="l-vmenu">
                <helpers_1.VMenuLink index={true}>← Home</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#misc">Misc</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#colors">Colors</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#borders">Borders</helpers_1.VMenuLink>
            </div>);
    };
    ColorsPage.prototype.main = function () {
        return [
            this.misc(),
            this.colors(),
            this.borders()
        ];
    };
    return ColorsPage;
}(page_1.StyleGuidePage));
exports.ColorsPage = ColorsPage;
// Helpers
var ColorExample = function (_a) {
    var cls = _a.cls, hex = _a.hex;
    return (<div className="l-col-3 l-row-gut-4">
            <div className={"example-item " + cls}></div>
            <div>.{cls}</div>
            <span>{hex}</span>
        </div>);
};
var ExampleBorderSection = function (_a) {
    var type = _a.type;
    var classes = "example-border l-inline l-bgcolor--secondary--light";
    var color = type == "primary--dark" ? "#262626" : "#923939";
    return (<div>
            <div style={{ backgroundColor: color, width: "44em" }}>.l-border--<b className={"l-" + type}>{type}</b>--[full,
                top, left, right, bottom]
            </div>

            <p className={classes + " l-border--" + type + "--full"}>Full</p>
            <p className={classes + " l-border--" + type + "--top"}>Top</p>
            <p className={classes + " l-border--" + type + "--left"}>Left</p>
            <p className={classes + " l-border--" + type + "--right"}>Right</p>
            <p className={classes + " l-border--" + type + "--bottom"}>Bottom</p>
        </div>);
};
