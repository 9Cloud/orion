import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observable, computed, action, toJS as mobxToJS, map as mobxMap} from "mobx";
import {observer} from "mobx-react";
import classNames from "classnames/bind";
import {FormItem} from './form_item';
import {FormErrors} from './errors';
import {Spacer} from 'orion/ui/helpers';

export class Select extends FormItem {
    static propTypes = {
        theme: React.PropTypes.oneOf(["light", "dark"])
    };

    static defaultProps = {
        theme: "dark"
    };

    @observable has_focus = false;

    register() {
        this.form.register(this.props.name, null, this);
    }

    @action onChange(event) {
        this.set_value(event.target.value);
    }

    focus(){
        this.has_focus = true;
    }
    blur(){
        this.has_focus = false;
    }

    render_options(){
        return (
            <div className="l-select-dd l-fullwidth">
                <ul>
                    <li> Option 1</li>
                    <li> Option 2</li>
                    <li> Option 3</li>
                </ul>
            </div>
        )
    }

    render() {
        let element_classes = classNames({
            "l-select": true,
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
                <div className="l-select-wrapper">
                    <select name={name}
                          className={element_classes}
                          placeholder={placeholder}
                          onClick={this.take_focus}
                          onChange={this.onChange}
                          value={this.value}
                          {...other} >
                        <option>1</option>
                    </select>

                    {this.render_options()}
                </div>

                <FormErrors errors={this.errors}/>
            </div>
        )
    }
}


