import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observable, computed, action, toJS as mobxToJS, map as mobxMap} from "mobx";
import * as mobxReact from "mobx-react";
import classNames from "classnames/bind";
import {ErrorState, Spacer} from 'orion/ui/helpers';

export class FormErrors extends Component {
    /*
     Expected format:

     {"sender": [{"message": "Enter a valid email address.", "code": "invalid"}],
     "subject": [{"message": "This field is required.", "code": "required"}]}
     */
    static propTypes = {
        errors: mobxReact.propTypes.arrayOrObservableArray
    };

    render() {
        return (
            <div>
                {this.props.errors.map((error, i) => <ErrorState key={i}>{error}</ErrorState>)}
            </div>
        )
    }
}