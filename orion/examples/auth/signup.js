// React
import {Component} from "tide/components";
import React, {PropTypes} from "react";
import Link from 'react-router/lib/Link';
import {Form, Input, Password, Checkbox} from 'orion/ui/forms';
import {Button, Spacer, ErrorState} from 'orion/ui/helpers';

export class SignupPage extends Component {
    render() {
        let initial = {
            fields: {
                username: "User"
            },
            errors: {
                username: ["This field is required."],
                password: ["The password is too short"]
            }
        };

        return (
            <div className="register_wrapper">
                <div className="pg-container">
                    <div className="l-col-3 l-col-offset-2">
                        <h1>Signup for free!</h1>
                        <p>Signup for free to enjoy all that Luscious has to offer. Connect with users with similar
                            interests, watch videos and more.</p>
                        <h3>What you'll get: </h3>
                        <ul>
                            <li>Exclusive content</li>
                            <li>Hentai Manga</li>
                            <li>Videos</li>
                        </ul>
                    </div>

                    <div className="l-col-lg-gut-lg l-col-5 l-filter--dark">
                        <Form className="">
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
                            <Button type="normal">Sign up</Button> or <a href="login.html">Login</a>

                            <p>
                                By signing up, you agree to our
                                <a href="https://members.luscious.net/terms/">Terms and Conditions</a>
                            </p>
                        </Form>
                    </div>
                </div>

                <Spacer/>
            </div>
        )
    }

}
