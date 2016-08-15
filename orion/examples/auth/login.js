// React
import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {Form, Input, Password, Checkbox} from 'orion/ui/forms';
import {Div, Button, Spacer} from 'orion/ui/helpers';
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
                    <div className="login_form l-filter--dark">

                        <h1>Login</h1>
                        <h3>Welcome back!</h3>
                        <p>This is a 9Cloud site. If you have an account at any of our sites. It will work here.</p>

                        <Form initial={initial}>
                            <fieldset className="l-fieldset">
                                <Input name="username" placeholder="Username" label="Username" />
                                <Password name="password" placeholder="Password" label="Password" />

                                <div className="l-row-gut-1 l-clearfix">
                                    <div className="l-col-4">
                                        <Checkbox name="remember_me" label="Remember me"/>
                                    </div>
                                    <div className="l-col-8">
                                        <div style={{textAlign: "right"}}>
                                            <Link to="examples/reset_password">Forgot password?</Link>
                                        </div>
                                    </div>
                                </div>

                                <div>Don't have an account? <Link to="examples/signup">Signup</Link></div>
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
