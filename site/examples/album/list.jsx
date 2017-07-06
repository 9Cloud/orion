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
var tide_1 = require("tide");
var React = require("react");
var AlbumListingPage = (function (_super) {
    __extends(AlbumListingPage, _super);
    function AlbumListingPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlbumListingPage.prototype.render = function () {
        return (<div>
                <h1>Page Title</h1>

                <div className="l-sidebar-wrapper">
                    <section className="l-sidebar">
                        <h3>Title </h3>
                        <ul>
                            <li><a href="">Item 1</a></li>
                            <li><a href="">Item 2</a></li>
                            <li><a href="">Item 3</a></li>
                        </ul>

                        <h3>Subheading </h3>
                        <ul>
                            <li><a href="">Item 1</a></li>
                            <li><a href="">Item 2</a></li>
                            <li><a href="">Item 3</a></li>
                        </ul>

                        <div className="l-select-wrapper">
                            <select className="l-select">
                                <option value="">Select Option</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </div>
                    </section>
                </div>

                <div className="albumlist l-col-9 l-col-gut-md">
                    <div className="albumlist_container l-row-gut-4 l-clearfix">
                        <div className="l-bgcolor--secondary--darker l-col-2">1</div>
                        <div className="l-bgcolor--secondary--darker l-col-3">2</div>
                        <div className="l-bgcolor--secondary--darker l-col-3">3</div>
                        <div className="l-bgcolor--secondary--darker l-col-3">4</div>
                    </div>

                    <div className="albumlist_container l-row-gut-4 l-clearfix">
                        <div className="l-col-5 l-bgcolor--secondary--darker">
                            <div className=" l-col-6 l-bgcolor--ui-darkred">4</div>
                            <p className="l-col-3">Lorem ipsum text</p>
                        </div>
                        <div className="l-col-5 l-bgcolor--secondary--darker l-col-gut-sm">
                            <div className=" l-col-6 l-bgcolor--ui-darkred">4</div>
                            <p className="l-col-3">Lorem ipsum text</p>
                        </div>
                    </div>

                    <div className="albumlist_container l-col-10 l-row-gut-1">
                        <div className="l-col-4 l-bgcolor--ui-darkred">4</div>
                        <div className="l-col-7">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer
                                took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="l-row-gut-4 l-clearfix"></div>
            </div>);
    };
    return AlbumListingPage;
}(tide_1.View));
exports.AlbumListingPage = AlbumListingPage;
