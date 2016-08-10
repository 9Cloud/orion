import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observable, computed, action, toJS as mobxToJS, map as mobxMap} from "mobx";
import {observer} from "mobx-react";
import classNames from "classnames/bind";
import shallowEqual from 'shallowequal';

// UI
import {ErrorText, Spacer} from 'orion/ui/helpers';

// import {humanize_day} from 'orion/ui/date';

/**
 * All FormElement subclasses nested under this component will modify fields during their onChange()
 *
 */
export class Form extends Component {
    @observable fields = mobxMap();
    @observable errors = mobxMap();

    @observable bootstrapped = false;

    static propTypes = {
        initial: React.PropTypes.object
    };

    static defaultProps = {
        initial: {
            errors: {
                __form__: []
            }
        }
    };

    static childContextTypes = {
        form: React.PropTypes.object
    };

    getChildContext() {
        return {
            form: this
        };
    }

    bootstrap(initial) {
        let {fields, errors} = initial;

        const mergeVia = (obj, callback) => {
            // Use the callback to merge initial data set
            for (let name in obj) {
                if (obj.hasOwnProperty(name)) {
                    callback(name, obj[name]);
                }
            }
        };

        if (fields !== undefined) {
            mergeVia(fields, this.set);
        }

        if (errors !== undefined) {
            mergeVia(errors, this.errors.set.bind(this.errors));
        }

        this.bootstrapped = true;
    }

    register(name) {
        console.debug(`Form | Registering ${name}`);
        this.fields.set(name, observable({"value": null}));
        this.errors.set(name, observable([]));
    }

    componentDidMount() {
        super.componentWillMount();
        this.bootstrap(this.props.initial);
    }

    // componentWillReceiveProps(nextProps) {
    //     if (!shallowEqual(this.props.initial, nextProps.initial)){
    //         // Initial value changed
    //         // todo: check if we need a deep comparision
    //         //this.bootstrap(nextProps.initial);
    //     }
    // }


    /**
     * Set form data at @name to a given @value
     * @param name
     * @param value
     */
    set(name, value) {
        let obv = this.fields.get(name);
        obv.value = value;
    }

    /**
     * Get form data of @name
     * @param name
     * @returns {*}
     */
    get(name) {
        if (this.bootstrapped) {
            return {value: undefined};
        }

        return this.fields.get(name);
    }

    get_errors(name) {
        if (!this.bootstrapped) {
            return [];
        }

        return this.errors.get(name);
    }


    @computed get items() {
        return Array.from(this.fields.entries());
    }

    toJS() {
        let context = {};
        for (let [key, data] of this.items) {
            context[key] = mobxToJS(data.value);
        }
        return context;
    }

    render() {
        let errors = this.errors.get('__form__') || [];
        return (
            <form onSubmit={this.props.submit}>
                <FormErrors errors={errors}/>
                {this.props.children}
            </form>
        )
    }
}

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

        this.form.register(this.props.name);
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
        return <div>{this.props.errors.map((error, i) => <ErrorText key={i}>{error}</ErrorText>)}</div>
    }
}


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


