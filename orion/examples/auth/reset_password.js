// React
import {Component} from "tide/components";
import React, {PropTypes} from "react";
import Link from 'react-router/lib/Link';
import {Div, Button, Spacer, ErrorText} from 'orion/ui/helpers';
import {Form, Input, Checkbox} from 'orion/ui/forms';

export class ResetPasswordPage extends Component {
    render() {
        return (
            <div className="login_wrapper">
                <div className="pg-container wrapper">
                    <div className="login_form filter--dark">
                        <h1>Reset Password </h1>
                        <p>Submit your email address and we'll send you a link to reset your password. </p>

                        <fieldset className="l-fieldset">
                            <div className="form_component">
                                <label className="form_component-label">Username</label> <br/>
                                <p className="l-error"> This field is required</p>
                                <p className="l-error"> Email doesn't exist. </p>
                                <input className="l-input l-fullwidth" type="email" placeholder="Email"/>
                                <span className="icon-check l--primary-color"></span>
                            </div>
                        </fieldset>
                        <br className="l-row-gut-2"/>
                        <button className="l-btn">Reset Password</button>
                    </div>
                </div>
            </div>
        )
    }
}
