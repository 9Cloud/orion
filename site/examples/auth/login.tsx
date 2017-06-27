import * as React from "react";
import {Presenter} from "tide";
import {Form, Input, Password, Checkbox} from "orion/ui/forms";
import {Button, Spacer} from "orion/ui/helpers";
import {Link} from "tide/router/link";
import isAlphanumeric from "validator/lib/isAlphanumeric";
import isLength from "validator/lib/isLength";
import isEmail from "validator/lib/isEmail";

export class LoginPage extends Presenter {
    render() {
        const initial = {
            fields: {remember_me: true},
        };

        let validation = {
            username: [
                {validate: (str) => isLength(str, {min: 3}), message: "This username is too short"},
                {validate: (str) => isLength(str, {max: 50}), message: "This username is too long"},
                {validate  : (str) => isAlphanumeric(str.replace(/_/, "")),
                    message: "A username can only contain letters, or underscores"
                }
            ],
            password: [
                {validate: (str) => isLength(str, {min: 5}), message: "This password is too short"}
            ],
            email   : [
                {validate: isEmail, message: "This must be a valid email address. E.g. me@gmail.com"}
            ]
        };

        return (
          <div className="login_wrapper">
              <div className="pg-container">
                  <div className="login_form l-filter--dark">

                      <h1>Login</h1>
                      <h3>Welcome back!</h3>
                      <p>This is a 9Cloud site. If you have an account at any of our sites. It will work here.</p>

                      <Form initial={initial} validation={validation}>
                          <fieldset className="l-fieldset">
                              <Input name="username" placeholder="Username" label="Username"/>
                              <Password name="password" placeholder="Password" label="Password"/>

                              <div className="l-row-gut-1 l-clearfix">
                                  <div className="l-col-4">
                                      <Checkbox name="remember_me" label="Remember me"/>
                                  </div>
                                  <div className="l-col-8">
                                      <div style={{textAlign: "right"}}>
                                          <Link to="reset_password">Forgot password?</Link>
                                      </div>
                                  </div>
                              </div>

                              <div>Don't have an account? <Link to="register">Signup here.</Link></div>
                          </fieldset>

                          <Spacer/>
                          <Button bold={true}>Login</Button>
                      </Form>
                  </div>
              </div>
          </div>
        )
    }
}
