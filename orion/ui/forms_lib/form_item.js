import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observable, computed, action, toJS as mobxToJS, map as mobxMap} from "mobx";
import {observer} from "mobx-react";
import classNames from "classnames/bind";

// UI
import {ErrorText, Spacer} from 'orion/ui/helpers';

/**
 * All form elements inherit from this.
 *
 * To use. You must write a render()
 */
export class FormItem extends Component {
    static propTypes = {
        name: React.PropTypes.string.isRequired,
        initial: React.PropTypes.any,
        label: React.PropTypes.string,
        placeholder: React.PropTypes.string
    };

    static contextTypes = {
        form: React.PropTypes.object
    };

    static defaultProps = {
        initial: null,
        placeholder: "",
        label: ""
    };



    componentWillMount() {
        super.componentWillMount();

        // Sanity checking
        if (this.props.name === undefined) {
            throw "Name of form item cannot be left undefined"
        }
        if (this.props.value !== undefined) {
            throw ReferenceError("Value should not be given via props. " +
                "It should be set on the enclosing form via intitial prop.")
        }

        this.register();
    }

    register(){
        this.form.register(this.props.name, null, this);
    }

    get form() {
        return this.context.form;
    }

    /**
     * Return the internal value if defined, otherwise return form context
     * @returns {*}
     */
    @computed get value() {
        return this.form.get(this.props.name).value;
    }

    toJS(){
        return this.value;
    }

    @computed get errors() {
        return this.form.get_errors(this.props.name);
    }


    @computed get has_error() {
        return this.errors.length > 0;
    }

    add_error(message) {
        this.errors.push(message);
    }

    clear_errors() {
        this.errors.clear();
    }

    /**
     * Set the internal state and form context
     * @param {*} new_value
     */
    @action set_value(new_value) {
        // this._value = val;
        console.debug(`${this.props.name} | prev value`, this.context.form.get(this.props.name).value);
        console.debug(`${this.props.name} | new value`, new_value);
        this.context.form.set(this.props.name, new_value);
    }
}


export class FormErrors extends Component {
    render() {
        return (
            <div>
                {this.props.errors.map((error, i) => <ErrorText key={i}>{error}</ErrorText>)}
            </div>
        )
    }
}
