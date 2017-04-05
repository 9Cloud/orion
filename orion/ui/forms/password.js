import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observable, computed, action} from "mobx";
import * as mobxReact from "mobx-react";
import classNames from "classnames/bind";
import {FormItem} from './form_item';
import {FormErrors} from './errors';
import {Spacer} from 'orion/ui/helpers';

/**
 * Usage
 *
 *  <Input placeholder="write something..." name="text" />
 */
export class Password extends FormItem {
    register() {
        this.form.register(this.props.name, "", this);
    }

    reset(){
        this.set_value("");
    }

    @action onChange(event) {
        let value = event.target.value;
        this.set_value(value, false);
        this.validate();
    }

    render() {
        let element_classes = classNames({
            "l-input": true,
            "l-fullwidth": true,
            "l-error": this.has_error
        });

        let {name, placeholder, onChange, ...other} = this.props;
        return (
            <div>
                <Spacer/>
                <label>{this.label}</label>
                <input className={element_classes}
                       type="password"
                       name={name}
                       placeholder={placeholder}
                       onChange={this.onChange}
                       onBlur={(e) => this.validate() }
                       {...other}
                       value={this.value}
                />
                <FormErrors errors={this.errors}/>
            </div>
        )
    }
}