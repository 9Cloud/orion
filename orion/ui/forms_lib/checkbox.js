import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observable, computed, action, toJS as mobxToJS, map as mobxMap} from "mobx";
import {observer} from "mobx-react";
import classNames from "classnames/bind";
import {FormItem} from './form_item';
import {FormErrors} from './errors';
import {Spacer} from 'orion/ui/helpers';

/**
 * Usage
 *
 *
 */
export class Checkbox extends FormItem {
    register() {
        this.form.register(this.props.name, false, this);
    }

    @action onChange(event) {
        let value = event.target.checked;
        this.set_value(value);
    }

    render() {
        let element_classes = classNames({
            "l-checkbox": true,
            "l-error": this.has_error
        });

        let {name, ...other} = this.props;
        return (
            <div>
                <Spacer/>
                <input className={element_classes}
                       type="checkbox"
                       name={name}
                       onChange={this.onChange}
                       value={this.value}
                       checked={this.value}
                       {...other}
                />
                {this.props.label ? <label>{this.props.label}</label> : ""}
                <FormErrors errors={this.errors}/>
            </div>
        )
    }
}
