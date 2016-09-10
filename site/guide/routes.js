import React from "react";
import {action} from "mobx";
import {route} from "tide/router/route";
import {bind_all_methods} from "tide/utils/object";

import {Home} from "./views/home";
import {Interactions} from "./views/interactions";
import {UIComponents} from "./views/components";
import {HelpersPage} from "./views/helpers";
import {TypographyPage} from "./views/typography";
import {NavComponent} from "./views/nav";
import {FormsPage} from "./views/forms";
import {ColorsPage} from "./views/colors";
import {NotFound} from "./views/404";

class Controller {
    constructor() {
        bind_all_methods(this);
    }

    @action home_page(tide, request, params) { tide.render(request, Home, {}) }
    @action interactions_page(tide, request, params) { tide.render(request, Interactions, {}) }
    @action ui_page(tide, request, params) { tide.render(request, UIComponents, {}) }
    @action helpers_page(tide, request, params) { tide.render(request, HelpersPage, {}) }
    @action typography_page(tide, request, params) { tide.render(request, TypographyPage, {}) }
    @action nav_page(tide, request, params) { tide.render(request, NavComponent, {}) }
    @action forms_page(tide, request, params) { tide.render(request, FormsPage, {}) }
    @action color_page(tide, request, params) { tide.render(request, ColorsPage, {}) }
    @action not_found(tide, request, params) { tide.render(request, NotFound, {}) }
}

const controller = new Controller();

/**
 * @type Array.<Route>
 */
export const routes = [
    route("/", controller.home_page, "home"),
    route("/interactions_page/", controller.interactions_page, "interactions_page"),
    route("/ui_page/", controller.ui_page, "ui_page"),
    route("/helpers_page/", controller.helpers_page, "helpers_page"),
    route("/typography_page/", controller.typography_page, "typography_page"),
    route("/nav_page/", controller.nav_page, "nav_page"),
    route("/forms_page/", controller.forms_page, "forms_page"),
    route("/color_page/", controller.color_page, "color_page"),

    route("/{path*}", controller.not_found, "not_found"),
];