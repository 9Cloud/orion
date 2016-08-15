// React
import {Component} from "tide/components";
import React, {PropTypes} from "react";
import Link from 'react-router/lib/Link';
import {Form, Input, Checkbox} from 'orion/ui/forms';
import {Spacer} from 'orion/ui/helpers';

export class SignupPage extends Component {
    render() {
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


                    <div className="l-col-5 register_form filter--dark">
                        <h1>Signup</h1>
                        <div className="form_component">
                            <label className="form_component-label">Username </label>
                            <p className="l-error"> This field is required</p>

                            <div className="l-error">
                                'User' is taken. These are available.
                                <ul>
                                    <li>User1</li>
                                    <li>User123</li>
                                    <li>User124</li>
                                    <li>Downloads</li>
                                </ul>
                            </div>

                            <input className="l-input l-fullwidth" type="text" placeholder="Username"/>
                            <span className="icon-check l--primary-color"></span>
                        </div>

                        <div className="form_component">
                            <p className="l-error">Passwords don't match</p>
                            <p className="l-error l-hidden">Password is too short</p>

                            <label className="form_component-label">Password </label>
                            <input className="l-input l-fullwidth" type="password"
                                   placeholder="Password (5+ characters)"/>
                            <span className="icon-check primary_color"></span>
                        </div>

                        <div className="form_component">
                            <label className="form_component-label">Confirm Password </label>
                            <input className="l-input l-fullwidth" type="password"
                                   placeholder="Password (5+ characters )"/>
                            <span className="icon-check primary_color"></span>
                        </div>

                        <div className="form_component">
                            <label className="form_component-label">Email</label>
                            <input className="l-input l-fullwidth" type="email" placeholder="Email"/>
                            <span className="icon-check primary_color"></span>
                        </div>

                        <button className="l-btn btn--secondary">Sign up</button>
                        or
                        <a href="login.html">Login</a>

                        <p>By signing up, you agree to our <a href="https://members.luscious.net/terms/">Terms and
                            Conditions</a></p>
                    </div>
                </div>

                <div className="clear"></div>
            </div>
        )
    }

}
