import * as classNames from "classnames";
import {action, observable} from "mobx";
import * as mobxReact from "mobx-react";
import {InputDropdown} from "orion/ui/fragments/input_dropdown";
import {Spacer} from "orion/ui/helpers";
import * as PropTypes from 'prop-types';
import * as React from "react";
import {View} from "tide";
import {FormErrors} from "./errors";
import {FormItem} from "./form_item";


export class Select extends FormItem {
    static propTypes = {
        theme: PropTypes.oneOf(["light", "dark"]),
        options: PropTypes.array,
        ...FormItem.propTypes
    };

    static defaultProps = {
        theme: "dark",
        options: [],
        ...FormItem.defaultProps
    };

    @observable has_focus = false;

    register() {
        this.form.register(this.props.name, null, this);
    }

    @action
    on_change(event, item) {
        event.preventDefault();
        this.set_value(item.value);
        this.close();
    }

    toggle() {
        this.has_focus = !this.has_focus;
    }

    close() {
        this.has_focus = false;
    }

    render() {
        let element_classes = classNames({
            "l-select": true,
            "l-fullwidth": false,
            "l-inverse": this.props.theme == "light",
            "l-error": this.has_error
        });

        let {name, placeholder, ...other} = this.props;
        return (
            <div>
                <Spacer/>
                <label>{this.label}</label>

                <div className="l-select-wrapper" onClick={this.toggle}>
                    <div name={name}
                         className={element_classes}
                         onClick={this.toggle}
                         tabIndex={2}
                         {...other}>
                        {this.value || placeholder}
                    </div>
                </div>

                {this.has_focus ? this.render_options() : null}

                <FormErrors errors={this.errors}/>
            </div>
        )
    }

    render_options() {
        return (
            <SelectDropDown
                items={this.props.options}
                on_change={this.on_change}
            />)
    }
}


class SelectDropDown extends View {
    // todo: why on_change?
    //
    static propTypes = {
        items: mobxReact.PropTypes.arrayOrObservableArrayOf(PropTypes.shape({
            value: PropTypes.any,
            text: PropTypes.string
        })).isRequired,
        on_change: PropTypes.func.isRequired
    };

    clicked_item(item, e) {
        this.props.on_change(e, item);
    }

    render_items() {
        let {items} = this.props;

        if (items.length == 0) {
            return <li className="l-blank-state">No items...</li>
        }

        return items.map((item, index) => (
            <li onClick={this.clicked_item.bind(this, item)}
                key={index}>
                {item.text}
            </li>))
    }

    render() {
        return (
            <InputDropdown>{this.render_items()}</InputDropdown>
        )
    }
}
