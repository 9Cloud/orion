import React from "react";
import {action} from "mobx";
import * as mobxReact from "mobx-react";
import classNames from "classnames/bind";
import {FormItem} from "./form_item";
import {FormErrors} from "./errors";
import {Spacer} from "orion/ui/helpers";

/**
 * Usage
 *
 * Expects list of options
 */
export class RadioGroup extends FormItem {
    static propTypes = {
        options: mobxReact.propTypes.arrayOrObservableArrayOf(React.PropTypes.shape({
            value: React.PropTypes.any,
            text: React.PropTypes.string
        })).isRequired
    };


    defaultProps = {
        options: []
    };

    register() {
        this.form.register(this.props.name, null, this);
    }

    @action onChange(e) {
        this.set_value(true);
    }

    @action clicked_item(item, event) {
        this.set_value(item.value);
    }

    render() {
        let element_classes = classNames({
            "l-checkbox": true,
            "l-error": this.has_error
        });

        let {placeholder, ...other} = this.props;

        return (
            <div>
                <Spacer/>
                {this.render_options()}
                <FormErrors errors={this.errors}/>
            </div>
        )
    }

    render_options(){
        let {options, name} = this.props;

        return options.map((item, index) => (
                <div className="l-radio-wrapper" onClick={this.clicked_item.bind(this, item)}>
                    <input className="l-radio" type="radio" name={name} checked={this.value == item.value} />
                    <label>{item.text}</label>
                </div>
            ))
    }
}