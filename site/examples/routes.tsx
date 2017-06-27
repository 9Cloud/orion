import * as React from "react";
import {action} from "mobx";
import {route} from "tide/router/route";
import {bind_all_methods} from "tide/utils/object";
import {LoginPage} from "./auth/login";
import {SignupPage} from "./auth/register";
import {ResetPasswordPage} from "./auth/reset_password";
import {ExamplePage} from "./examples/example";
import {AlbumListingPage} from "./album/list";
import {AlbumUploadPage} from "./album/upload";


class Controller {
    constructor() {
        bind_all_methods(this);
    }

    @action login_page(tide, request, params) {tide.render(request, LoginPage, {})}
    @action register_page(tide, request, params) {tide.render(request, SignupPage, {})}
    @action reset_password_page(tide, request, params) { tide.render(request, ResetPasswordPage, {})}
    @action example(tide, request, params) { tide.render(request, ExamplePage, {})}
    @action album_page(tide, request, params) { tide.render(request, AlbumListingPage, {})}
    @action upload_page(tide, request, params) { tide.render(request, AlbumUploadPage, {})}

}

const controller = new Controller();

/**
 * @type Array.<Route>
 */
export const routes = [
    route("/example/", controller.example, "example"),
    route("/login/", controller.login_page, "login"),
    route("/register/", controller.register_page, "register"),
    route("/reset-password/", controller.reset_password_page, "reset_password"),
    route("/example/", controller.example, "example_page"),
    route("/list/", controller.album_page, "album_page"),
    route("/upload/", controller.upload_page, "upload_page"),

];