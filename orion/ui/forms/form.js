import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observable, computed, action, toJS as mobxToJS, map as mobxMap} from "mobx";
import * as mobxReact from "mobx-react";
import classNames from "classnames/bind";
import shallowEqual from 'shallowequal';
import {FormErrors} from './errors';
import {Spacer} from 'orion/ui/helpers';

/**
 * All FormElement subclasses nested under this component will modify fields during their onChange()
 *
 *
 *  Validators must be an object where the keys are the names of the input elements to validate.
 *  The value is an array of objects with the shame { validate: function, message: string }
 */
export class Form extends Component {
    @observable fields = mobxMap();
    @observable errors = mobxMap();

    @observable bootstrapped = false;

    static propTypes = {
        initial: React.PropTypes.shape({
            fields: mobxReact.propTypes.arrayOrObservableArray,
            errors: React.PropTypes.array
        }),
        submit: React.PropTypes.func
    };

    static defaultProps = {
        initial: {
            errors: {
                __form__: []
            }
        },
        submit: (event) => {
            console.log("Form submitted")
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

    register(name, empty_value = null, component) {
        this.fields.set(name, observable({"value": empty_value, component: component}));
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
     *
     * @param name
     * @param value
     */
    set(name, value) {
        let obv = this.fields.get(name);
        obv.value = value;
    }

    /**
     * Validate a given value, using the validators for a named parameter
     * @param name
     * @param value
     * @returns Array.<> of errors
     */
    validate(name, value){
        const validators = this.props.validation[name];
        if (validators) {
            let error_list = validators.map(({validate, message}) => {
                return validate(value) == false ? message : null
            });

            // Flatten list
            let flattend = [].concat.apply([], error_list);
            return flattend.filter((message) => message !== null )
        }

        return [];
    }

    /**
     * Get form data of @name
     * @param name
     * @returns {*}
     */
    get(name) {
        if (!this.bootstrapped) {
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
        let {initial, submit, ...others} = this.props;
        return (
            <form onSubmit={this.props.submit} {...others}>
                <FormErrors errors={errors}/>
                {this.props.children}
            </form>
        )
    }
}
