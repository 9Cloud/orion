//import './polyfill';
import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import RedBox from "redbox-react";
import DevTools from 'mobx-react-devtools';
import remotedev from 'mobx-remotedev/lib/dev';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {ExamplePage} from './layout';
import {LoginPage} from './auth/login';
import {ResetPasswordPage} from './auth/reset_password';
import {SignupPage} from './auth/signup';

export const routes = (
    <Route path="example" component={ExamplePage}>
        <IndexRoute component={LoginPage}/>
        <Route path="login" component={LoginPage}/>
        <Route path="signup" component={SignupPage}/>
        <Route path="reset_password" component={ResetPasswordPage}/>
    </Route>
);

export default routes;