import {Component} from "tide";
import * as React from "react"; import PropTypes from 'prop-types';
import {observable, computed, action} from "mobx";
import classNames from "classnames/bind";
import {FormItem} from './form_item';
import {FormErrors} from './errors';
import {Spacer} from 'orion/ui/helpers';

export class TextArea extends FormItem {
    static propTypes = {
        initial: PropTypes.string,
        theme: PropTypes.oneOf(["light", "dark"])
    };

    static defaultProps = {
        initial: "",
        theme: "dark"
    };

    register() {
        this.form.register(this.props.name, "", this);
    }

    reset(){
        this.set_value("");
    }

    @action onChange(event) {
        this.set_value(event.target.value);
    }

    render() {
        let element_classes = classNames({
            "l-textarea": true,
            "l-fullwidth": true,
            "l-inverse": this.props.theme == "light",
            "l-error": this.has_error
        });

        let {name, placeholder, ...other} = this.props;

        return (
            <div>
                <Spacer/>
                <label>{this.label}</label>
                <textarea className={element_classes}
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

