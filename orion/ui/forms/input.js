import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observable, computed, action, toJS as mobxToJS, map as mobxMap} from "mobx";
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
export class Input extends FormItem {
    static propTypes = {
        inputType: React.PropTypes.oneOf(["text", "password", "number", "tel", "range", "search", "email", "date", "color", "url"])
    };

    static defaultProps = {
        inputType: "text"
    };

    register() {
        this.form.register(this.props.name, "", this);
    }

    reset(){
        this.set_value("");
    }

    @action onChange(event) {
        let value = event.target.value;
        this.set_value(value, false);
    }

    render() {
        let element_classes = classNames({
            "l-input": true,
            "l-fullwidth": true,
            "l-error": this.has_error
        });

        let {name, placeholder, onChange, inputType, ...other} = this.props;
        return (
            <div>
                <Spacer/>
                <label>{this.label}</label>
                <input className={element_classes}
                       type={this.props.inputType}
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
