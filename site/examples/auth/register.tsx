import * as React from "react";
import {Presenter} from "tide";
import {Form, Input, Password} from "orion/ui/forms";
import {Button, Spacer, ErrorState} from "orion/ui/helpers";
import isAlphanumeric from "validator/lib/isAlphanumeric";
import isLength from "validator/lib/isLength";
import isEmail from "validator/lib/isEmail";
import {Link} from "tide/router/link";

export class SignupPage extends Presenter {
    render() {
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
          <div className="register_wrapper">
              <div className="pg-container">
                  <div className="l-col-3 l-col-offset-2">
                      <h1>Signup for free!</h1>
                      <p>Signup for free to enjoy all that Example.com has to offer. Connect with users with similar
                          interests, watch videos and more.</p>
                      <h3>What you'll get: </h3>
                      <ul>
                          <li>Exclusive content</li>
                      </ul>
                  </div>

                  <div className="l-col-lg-gut-lg l-col-5 l-filter--dark">
                      <Form validation={validation}>
                          <h1>Signup</h1>

                          <div>
                              <Input name="username" placeholder="Username"/>
                              <ErrorState>
                                  'User' is taken. These are available:
                                  <ul>
                                      <li>User1</li>
                                      <li>User123</li>
                                      <li>User124</li>
                                      <li>Downloads</li>
                                  </ul>
                              </ErrorState>
                          </div>

                          <Password name="password" placeholder="Password (5+ characters )"/>
                          <Input name="email" placeholder="Email"/>

                          <Spacer size="2"/>
                          <Button color="normal">Sign up</Button> or <Link to="login">Login</Link>

                          <p>
                              By signing up, you agree to our
                              <a href="https://example.com/terms/">Terms and Conditions</a>
                          </p>
                      </Form>
                  </div>
              </div>

              Already a member? <Link to="login">Login here</Link>.

              <Spacer/>
          </div>
        )
    }

}
