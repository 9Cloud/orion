import * as classNames from "classnames";
import {action} from "mobx";
import {Spacer} from 'orion/ui/helpers';
import * as React from "react";
import {FormErrors} from './errors';
import {FormItem} from './form_item';

export class TextArea extends FormItem {
    static defaultProps = {
        theme: "dark",
        ...FormItem.defaultProps
    };

    // todo: better types
    props: {
        theme? : "light" | "dark",
        placeholder?: string,
        name: string,
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
        // onChange? : React.ChangeEventHandler<HTMLTextAreaElement>,
        this.set_value(event.target.value);
    }

    render() {
        let element_classes = classNames({
            "l-textarea": true,
            "l-fullwidth": true,
            "l-inverse": this.props.theme == "light",
            "l-error": this.has_error
        });

        let {name, placeholder, theme, ...other} = this.props;

        return (
            <div>
                <Spacer/>
                <label>{this.label}</label>
                <textarea className={element_classes}
                          type="text"
                          name={name}
                          placeholder={placeholder}
                          onChange={this.onChange}
                          value={this.value}
                          {...other}
                />
                <FormErrors errors={this.errors}/>
            </div>
        )
    }
}


