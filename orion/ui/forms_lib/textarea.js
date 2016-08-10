import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observable, computed, action, toJS as mobxToJS, map as mobxMap} from "mobx";
import {observer} from "mobx-react";
import classNames from "classnames/bind";
import {FormItem, FormErrors} from './form_item';
import {Spacer} from 'orion/ui/helpers';

export class TextArea extends FormItem {
    static propTypes = {
        initial: React.PropTypes.string,
        theme: React.PropTypes.oneOf(["light", "dark"])
    };

    static defaultProps = {
        initial: "",
        theme: "dark"
    };

    @action onChange(event) {
        this.set_value(event.target.value);
    }

    capitalize_words(text) {
        return text.replace(/\w\S*/g, (word) => {
            let [first_letter, rest] = [word.charAt(0), word.substr(1)];
            return first_letter.toUpperCase() + rest.toLowerCase();
        });
    }

    render() {
        let element_classes = classNames({
            "l-textarea": true,
            "l-fullwidth": true,
            "l-inverse": this.props.theme == "light",
            "l-error": this.has_error
        });

        let {name, placeholder, ...other} = this.props;
        let label = this.props.label || this.capitalize_words(this.props.name);

        return (
            <div>
                <Spacer/>
                <label>{label}</label>
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


