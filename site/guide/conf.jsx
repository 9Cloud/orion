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
var conf_1 = require("tide/app/conf");
var layout_1 = require("./layout");
var routes_1 = require("./routes");
/**
 * @class
 */
var AppConf = (function (_super) {
    __extends(AppConf, _super);
    function AppConf() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "guide";
        _this.routes = routes_1.routes;
        _this.layout = layout_1.Layout;
        return _this;
    }
    return AppConf;
}(conf_1.BasicConf));
exports.AppConf = AppConf;
exports.guide_conf = new AppConf();
