import {BasicConf} from "tide/app/conf";
import {Layout} from "./layout";
import {routes} from "./routes";

/**
 * @class
 */
export class AppConf extends BasicConf {
    name   = "guide";
    routes = routes;
    layout = Layout;
}

export const guide_conf = new AppConf();