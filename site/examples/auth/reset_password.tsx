import * as React from "react";
import {Presenter} from "tide";
import {Button, Spacer} from "orion/ui/helpers";
import {Form, Input, Password} from "orion/ui/forms";
import {Link} from "tide/router/link";
import isAlphanumeric from "validator/lib/isAlphanumeric";
import isLength from "validator/lib/isLength";
import isEmail from "validator/lib/isEmail";

export class ResetPasswordPage extends Presenter {

    render() {
        let validation = {
            email   : [
                {validate: isEmail, message: "This must be a valid email address. E.g. me@gmail.com"}
            ],
            password: [
                {validate: (str) => isLength(str, {min: 5}), message: "This password is too short"}
            ]
        };

        return (
          <div className="login_wrapper">
              <div className="pg-container">
                  <div className="login_form l-filter--dark">
                      <h1>Reset Password </h1>
                      <p>Submit your email address and we'll send you a link to reset your password. </p>

                      <Form validation={validation}>
                          <div className="form_component">
                              <Input name="email" placeholder="Email" label=""/>
                              <Password label="Once you confirm via email, this will be your new password:" name="password" placeholder="Password (5+ characters )"/>
                          </div>
                      </Form>

                      <Spacer size="2"/>

                      <Button>Reset Password</Button>

                      <Spacer size="2" />

                      <div>
                          Remember your password now? <Link to="login">Login here</Link>.
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}
