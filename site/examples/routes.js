import React from "react";
import {action} from "mobx";
import {route} from "tide/router/route";
import {bind_all_methods} from "tide/utils/object";
import {LoginPage} from "./auth/login";
import {SignupPage} from "./auth/register";
import {ResetPasswordPage} from "./auth/reset_password";

class Controller {
    constructor() {
        bind_all_methods(this);
    }

    @action login_page(tide, request, params) {tide.render(request, LoginPage, {})}
    @action register_page(tide, request, params) {tide.render(request, SignupPage, {})}
    @action reset_password_page(tide, request, params) { tide.render(request, ResetPasswordPage, {})}
}

const controller = new Controller();

/**
 * @type Array.<Route>
 */
export const routes = [
    route("/login/", controller.login_page, "login"),
    route("/register/", controller.register_page, "register"),
    route("/reset-password/", controller.reset_password_page, "reset_password"),
];