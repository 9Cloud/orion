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
var TypographyPage = (function (_super) {
    __extends(TypographyPage, _super);
    function TypographyPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypographyPage.prototype.sidebar = function () {
        return (<div className="l-vmenu">
                <helpers_1.VMenuLink index={true}>← Home</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#fonts">Fonts</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#headings">Headings</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#paragraphs">Paragraphs</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#tabs">Tabs</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#tooltips">Tooltips</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#modals">Modals</helpers_1.VMenuLink>
            </div>);
    };
    TypographyPage.prototype.main = function () {
        return (<div>
                <h1 className="section_title"><a name="fonts">Fonts</a></h1>

                <p>We use <a href="https://www.google.com/fonts/specimen/Karla">Karla</a></p>

                <h1 className="section_title"><a name="headings">Headings</a></h1>
                <div>
                    <h1>h1. Heading </h1>
                </div>
                <div>
                    <h2>h2. Subtitle </h2>
                </div>
                <div>
                    <h3>h3. Subheading </h3>
                </div>
                <div>
                    <h4>h4. Heading </h4>
                </div>
                <div>
                    <h5>h5. Heading </h5>
                </div>

                <h1 className="section_title"><a name="paragraphs">Paragraphs</a></h1>
                <div>
                    <p className="l-body">
                        Created with <code> .l-body </code>
                    </p>
                    Example:
                    <p className="l-body">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </p>

                    <p className="l-txt--loud">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </p>

                    <p className="l-txt--quiet">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </p>

                    <p className="l-txt--xtr-quiet">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        uding versions of Lorem Ipsum.
                    </p>
                </div>
            </div>);
    };
    return TypographyPage;
}(page_1.StyleGuidePage));
exports.TypographyPage = TypographyPage;
