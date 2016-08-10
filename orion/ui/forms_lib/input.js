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
 *  <Input placeholder="write something..." name="text" />
 */
export class Input extends FormItem {
    static propTypes = {
        initial: React.PropTypes.string,
        //onChange: React.PropTypes.onChange
        // todo: do we need this intercept?
    };

    register() {
        this.form.register(this.props.name, "", this);
    }

    @action onChange(event) {
        let value = event.target.value;


        if (this.props.onChange) {
            this.props.onChange(event)
        }

        this.set_value(value);
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
                {this.props.label ? <label>{this.props.label}</label> : ""}
                <input className={element_classes}
                       type="text"
                       name={name}
                       placeholder={placeholder}
                       onChange={this.onChange}
                       {...other}
                       value={this.value}
                />
                <FormErrors errors={this.errors}/>
            </div>
        )
    }
}
