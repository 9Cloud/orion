"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var route_1 = require("tide/router/route");
var object_1 = require("tide/utils/object");
var home_1 = require("./views/home");
var interactions_1 = require("./views/interactions");
var components_1 = require("./views/components");
var helpers_1 = require("./views/helpers");
var typography_1 = require("./views/typography");
var nav_1 = require("./views/nav");
var forms_1 = require("./views/forms");
var colors_1 = require("./views/colors");
var _404_1 = require("./views/404");
var Controller = (function () {
    function Controller() {
        object_1.bind_all_methods(this);
    }
    Controller.prototype.home_page = function (tide, request, params) { tide.render(request, home_1.Home, {}); };
    Controller.prototype.interactions_page = function (tide, request, params) { tide.render(request, interactions_1.Interactions, {}); };
    Controller.prototype.ui_page = function (tide, request, params) { tide.render(request, components_1.UIComponents, {}); };
    Controller.prototype.helpers_page = function (tide, request, params) { tide.render(request, helpers_1.HelpersPage, {}); };
    Controller.prototype.typography_page = function (tide, request, params) { tide.render(request, typography_1.TypographyPage, {}); };
    Controller.prototype.nav_page = function (tide, request, params) { tide.render(request, nav_1.NavComponent, {}); };
    Controller.prototype.forms_page = function (tide, request, params) { tide.render(request, forms_1.FormsPage, {}); };
    Controller.prototype.color_page = function (tide, request, params) { tide.render(request, colors_1.ColorsPage, {}); };
    Controller.prototype.not_found = function (tide, request, params) { tide.render(request, _404_1.NotFound, {}); };
    return Controller;
}());
__decorate([
    mobx_1.action
], Controller.prototype, "home_page", null);
__decorate([
    mobx_1.action
], Controller.prototype, "interactions_page", null);
__decorate([
    mobx_1.action
], Controller.prototype, "ui_page", null);
__decorate([
    mobx_1.action
], Controller.prototype, "helpers_page", null);
__decorate([
    mobx_1.action
], Controller.prototype, "typography_page", null);
__decorate([
    mobx_1.action
], Controller.prototype, "nav_page", null);
__decorate([
    mobx_1.action
], Controller.prototype, "forms_page", null);
__decorate([
    mobx_1.action
], Controller.prototype, "color_page", null);
__decorate([
    mobx_1.action
], Controller.prototype, "not_found", null);
var controller = new Controller();
/**
 * @type Array.<Route>
 */
exports.routes = [
    route_1.route("/", controller.home_page, "home"),
    route_1.route("/interactions_page/", controller.interactions_page, "interactions_page"),
    route_1.route("/ui_page/", controller.ui_page, "ui_page"),
    route_1.route("/helpers_page/", controller.helpers_page, "helpers_page"),
    route_1.route("/typography_page/", controller.typography_page, "typography_page"),
    route_1.route("/nav_page/", controller.nav_page, "nav_page"),
    route_1.route("/forms_page/", controller.forms_page, "forms_page"),
    route_1.route("/color_page/", controller.color_page, "color_page"),
    route_1.route("/{path*}", controller.not_found, "not_found"),
];
