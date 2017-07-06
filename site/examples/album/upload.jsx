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
var AlbumUploadPage = (function (_super) {
    __extends(AlbumUploadPage, _super);
    function AlbumUploadPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlbumUploadPage.prototype.render = function () {
        return (<div className="l-col-gut-lg">
                <h1>New Album - Add Album Tags -- Upload</h1>

                <form>
                    <input type="text" className="l-input l-row-gut-2"/> <br /> <br />
                    <textarea name="" id="" cols="30" rows="10" className="l-textarea"></textarea>

                    <h3>Community</h3>
                    <div className="l-select-wrapper">
                        <select name="" className="l-select">
                            <option value="">1</option>
                        </select>
                    </div>

                    <h3>Content Type</h3>
                    <input type="radio"/> Option one
                </form>

                <button>Continue</button>
            </div>);
    };
    return AlbumUploadPage;
}(tide_1.View));
exports.AlbumUploadPage = AlbumUploadPage;
