import {Presenter, ITideContext} from "tide";
import * as React from "react";
import PropTypes from 'prop-types';
import {observable, computed, action, IObservableArray, ObservableMap} from "mobx";
import {FormErrors} from "./errors";

type EmptyValue = "" | any[] | null | undefined | boolean;
type FormItem = any;

/**
 *  @class
 *  @module orion
 *
 *  Display a Form and handle logic to control the form elements within it, validate, display errors, and submit
 *  data to the backend.
 *
 *  Notes
 *  ---
 *  All FormElement subclasses nested under this component will modify fields during their onChange()
 *
 *  Notes on Validation
 *  ---
 *  Validators must be an object where the keys are the names of the input elements to validate.
 *  The value is an array of objects with the shame { validate: function, message: string }
 */
export class Form extends Presenter {
    static propTypes = {
        initial: PropTypes.shape({
            fields: PropTypes.object,
            errors: PropTypes.object
        }),
        submit: PropTypes.func,
        enabled: PropTypes.bool,
        validation: PropTypes.array,
        extra: PropTypes.object
    };

    static defaultProps = {
        initial: {
            errors: {
                __all__: []
            }
        },
        submit: (event) => {
            console.log("Form submitted")
        },
        enabled: true,
        validation: [],
        extra: {}
    };

    static childContextTypes = {
        form: PropTypes.object,
        ...Presenter.childContextTypes
    };

    context: ITideContext & {
        form: Form
    };


    // todo: better types
    props: {
        initial?: {
            fields?: any,
            errors?: any
        },
        submit?: (any) => void,
        enabled?: boolean,
        validation?: any[],
        extra?: any,
        children: React.ReactNode
    };

    @observable fields : ObservableMap<FormItem> = observable.map();
    @observable errors = observable.map();
    @observable bootstrapped = false;


    /**
     * @protected
     * @returns {{form: Form}}
     */
    getChildContext() {
        return {
            form: this
        };
    }

    /**
     * @private
     * @param initial
     */
    bootstrap(initial : any = {}) {
        let {fields, errors} = initial;
        const defaults = {
            fields: undefined,
            errors: {
                __all__: []
            }
        };

        initial.fields = initial.fields || defaults.fields;
        initial.errors = initial.errors || defaults.errors;

        const mergeVia = (obj, callback) => {
            // Use the callback to merge initial data set
            for (let name in obj) {
                if ( obj.hasOwnProperty(name) ) {
                    callback(name, obj[name]);
                }
            }
        };

        if ( fields !== undefined ) {
            mergeVia(fields, this.set);
        }

        if ( errors !== undefined ) {
            mergeVia(errors, this.errors.set.bind(this.errors));
        }

        this.bootstrapped = true;
    }

    /**
     * Register a FormItem
     * This call is made via the componentWillMount() method of FormItems
     */
    register(name: string, empty_value : EmptyValue = null, component : FormItem) {
        this.fields.set(name, observable({"value": empty_value, "component": component}));
        this.errors.set(name, observable([]));
    }

    /**
     * Reset the form's data to an empty state.
     */
    @action reset(){
        for (let [key, item] of this.items) {
            item.component.reset();
        }
    }

    /**
     * @private
     */
    componentDidMount() {
        super.componentDidMount();
        this.bootstrap(this.props.initial);
    }

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
    validate(name, value) {
        const validators = this.props.validation[name];
        if ( validators ) {
            let error_list = validators.map(({validate, message}) => {
                return validate(value) == false ? message : null
            });

            // Flatten list
            let flattend = [].concat.apply([], error_list);
            return flattend.filter((message) => message !== null)
        }

        return [];
    }

    /**
     * Get form data of @name
     * @param name
     * @returns {*}
     */
    get(name) {
        if ( !this.bootstrapped ) {
            return {value: undefined};
        }

        return this.fields.get(name);
    }

    /**
     * Returns an array of error strings
     * @param {string} name
     * @returns {IObservableArray.<string>}
     */
    get_errors(name) : IObservableArray<string> {
        if ( !this.bootstrapped ) {
            // todo return correct thing
            return [] as IObservableArray<string>;
        }

        return this.errors.get(name) as IObservableArray<string>;
    }

    /**
     * Clear the errors created by validation
     */
    clear_errors() {
        for (let key of Array.from(this.errors.keys())) {
            this.get_errors(key).replace([])
        }
    }

    /**
     * Add an array of errors to a particular form item
     * @param {string}  name
     * @param {Array.<string>}  errors
     */
    set_errors(name, errors) {
        console.log(`Added errors to ${name}`, errors)
        this.get_errors(name).replace(errors);
    }

    /**
     * Return form data as an array of [[key, value]]
     * @returns {Array}
     */
    @computed get items()  {
        return Array.from(this.fields.entries());
    }

    /**
     * Return an object representing the form data
     * Return a JSON serializable form of this object
     * @returns {json|object}
     */
    toJS() {
        let context = {};
        let extra = this.props.extra;
        for (let [key, item] of this.items) {
            context[key] = (item as any).component.toJS();
        }
        for(let key in extra){
            if(extra.hasOwnProperty(key)){
                context[key] = extra[key];
            }
        }
        return context;
    }

    /**
     * Handle the form submission
     * @param {React.SyntheticEvent} e
     * @returns {*}
     */
    handle_submit(e) {
        return this.props.submit(e);
    }

    /**
     * Return true if this form is enabled for input
     * @returns {boolean}
     */
    get enabled() {
        return this.props.enabled && this.processing === false;
    }

    /**
     * Ajax Forms may want to override this to do something special when they are processing
     * @returns {boolean}
     */
    get processing(){
        return false;
    }

    /**
     * Render the form
     */
    render() {
        let errors = this.errors.get('__all__') as IObservableArray<string> || [];
        let {initial, submit, validation, extra, enabled, children, ...others} = this.props;
        let disabled = !this.enabled;
        return (
          <div className={`${disabled ? "blocked" : ""}`}>
              <form onSubmit={this.handle_submit} {...others}>
                  <FormErrors errors={errors}/>
                  {this.props.children}
              </form>
          </div>
        )
    }
}
