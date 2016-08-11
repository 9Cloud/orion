// React
import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {Form, Input, Checkbox} from 'orion/ui/forms';
import {Div, Button, Spacer, ErrorText} from 'orion/ui/helpers';
import Link from 'react-router/lib/Link';

export class LoginPage extends Component {
    render() {
        const initial = {
            fields: {remember_me: true},
            errors: {
                username: ["This field is required"],
                password: ["Password is incorrect"]
            }
        };

        return (

            <div className="login_wrapper">
                <div className="pg-container">
                    <div className="login_form filter--dark">

                        <h1>Login</h1>
                        <h3>Welcome back!</h3>
                        <p>This is a 9Cloud site. If you have an account at any of our sites. It will work here.</p>

                        <Form initial={initial}>
                            <fieldset className="l-fieldset">
                                <div className="form_component">
                                    <label className="form_component-label">Username</label> <br/>
                                    <div className="l-error"> This field is required</div>
                                    <input className="l-input l-fullwidth" type="text" placeholder="Username"/>
                                    <span className="icon-check l--primary-color"></span>
                                </div>

                                <div className="form_component">
                                    <label className="form_component-label">Password</label>
                                    <div className="l-error">Password is incorrect</div>
                                    <input className="l-input l-fullwidth" type="password" placeholder="Password"/>
                                    <span className="icon-check l--primary-color"></span>
                                </div>

                                <div className="form_component">
                                    <Checkbox name="remember_me" label="Remember me"/>

                                    <Div float="right"><Link to="examples/reset_password">Forgot password?</Link></Div>
                                </div>

                                <p>Don't have an account? <Link to="examples/signup">Signup</Link></p>
                            </fieldset>
                            <Button bold={true}>Login</Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
