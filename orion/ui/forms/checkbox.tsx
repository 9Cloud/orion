import * as classNames from "classnames";
import {action} from "mobx";
import * as React from "react";
import {FormErrors} from './errors';
import {FormItem} from './form_item';

/**
 * Usage
 *
 *
 */
export class Checkbox extends FormItem {
    register() {
        this.form.register(this.props.name, false, this);
    }

    reset() {
        this.set_value(false);
    }

    @action
    onChange(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.value === true) {
            this.set_value(false);
        } else {
            this.set_value(true);
        }
    }

    render() {
        let element_classes = classNames({
            "l-checkbox": true,
            "l-error": this.has_error,
            "l-checkbox--checked": this.value === true
        });

        let {name, placeholder, on_set_value, ...other} = this.props;
        return (
            <div>
                <div className="l-checkbox-wrapper" onClick={this.onChange}>
                    <input className={element_classes}
                           type="checkbox"
                           name={name}
                           onClick={this.onChange}
                           value={this.value}
                           checked={false}
                           {...other}
                    />
                    <label>{this.label}</label>
                </div>
                <FormErrors errors={this.errors}/>
            </div>
        )
    }
}
