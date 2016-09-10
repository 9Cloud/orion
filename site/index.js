import 'orion/polyfill';
import React from "react";
import ReactDOM from "react-dom";
import RedBox from "redbox-react";
import ReactDOMServer from "react-dom/server";
import {Tide} from "tide/app/tide";
import {guide_conf} from "./guide/conf";
import {example_conf} from "./examples/conf";
// import Promise from "bluebird";
//
// Promise.config({
//     // Enables all warnings except forgotten return statements.
//     warnings       : {
//         wForgottenReturn: false
//     },
//     // Enable long stack traces
//     longStackTraces: true,
//     // Enable cancellation
//     cancellation   : true,
//     // Enable monitoring
//     monitoring     : true
// });
//

const APPS = [
    example_conf,
    guide_conf
];

const mode = "development";

const data = {
    tide : {
        user: {
            "username"        : "admin",
            "is_moderator"    : true,
            "token"           : "",
            "is_staff"        : true,
            "avatar"          : {
                "url" : "https://www.gravatar.com/avatar/d087f01d42030057b540cf9655bf7cfb/?s=50",
                "size": 50
            },
            "_lookup"         : "/users/admin/",
            "is_authenticated": true,
            "following"       : {"communities": [], "users": []},
            "moderates"       : [],
            "id"              : 1
        }
    },
    extra: {
        pms_unread          : 4,
        notifications_unread: 0
    }
};

const tide = <Tide mode={mode}
                   apps={APPS}
                   basename=""
                   initial_data={data}/>;

// Where in the DOM to render our application
const node = document.querySelector("#app_container");

// Debugging information during development
try {
    ReactDOM.render(tide, node);
}
catch (e) {
    ReactDOM.render(<RedBox error={e}/>, node);
    throw e;

}