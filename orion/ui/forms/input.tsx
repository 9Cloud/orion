import classNames from "classnames/bind";
import {action} from "mobx";
import {Spacer} from 'orion/ui/helpers';
import * as React from "react";
import {FormErrors} from './errors';
import {FormItem} from './form_item';

/**
 * Usage
 *
 *  <Input placeholder="write something..." name="text" />
 */
export class Input extends FormItem {
    static defaultProps = {
        inputType: "text",
        ...FormItem.defaultProps
    };

    props: {
        name?: string,
        value?: any,
        placeholder?: string,
        inputType: "text" | "password" | "number" | "tel" | "range" | "search" | "email" | "date" | "color" | "url";
        [index: string]: any
    };

    register() {
        this.form.register(this.props.name, "", this);
    }

    reset() {
        this.set_value("");
    }

    @action
    onChange(event) {
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
                       onBlur={(e) => this.validate()}
                       {...other}
                       value={this.value}
                />
                <FormErrors errors={this.errors}/>
            </div>
        )
    }
}
