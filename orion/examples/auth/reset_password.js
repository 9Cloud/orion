// React
import {Component} from "tide/components";
import React, {PropTypes} from "react";
import Link from 'react-router/lib/Link';
import {Div, Button, Spacer} from 'orion/ui/helpers';
import {Form, Input, Checkbox} from 'orion/ui/forms';

export class ResetPasswordPage extends Component {
    render() {
        const initial = {
            fields: {email: ""},
            errors: {
                email: ["This field is required", "Email doesn't exist."]
            }
        };

        return (
            <div className="login_wrapper">
                <div className="pg-container wrapper">
                    <div className="login_form l-filter--dark">
                        <h1>Reset Password </h1>
                        <p>Submit your email address and we'll send you a link to reset your password. </p>

                        <Form initial={initial}>
                            <div className="form_component">
                                <Input name="email" placeholder="Email" label=""/>
                            </div>
                        </Form>

                        <Spacer size="2"/>

                        <Button>Reset Password</Button>
                    </div>
                </div>
            </div>
        )
    }
}
