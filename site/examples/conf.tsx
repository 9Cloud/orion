import {BasicConf} from "tide/app/conf";
import {Layout} from "./layout";
import {routes} from "./routes";

/**
 * @class
 */
export class AppConf extends BasicConf {
    name   = "example";
    routes = routes;
    layout = Layout;
}

export const example_conf = new AppConf();