import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observable, computed, action, toJS as mobxToJS, map as mobxMap} from "mobx";
import {observer} from "mobx-react";
import classNames from "classnames/bind";

// UI
import {ErrorText, Spacer} from 'orion/ui/helpers';


export class FormErrors extends Component {
    render() {
        return (
            <div>
                {this.props.errors.map((error, i) => <ErrorText key={i}>{error}</ErrorText>)}
            </div>
        )
    }
}
