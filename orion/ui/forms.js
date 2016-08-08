import {Component, Provider, MobxObserver} from 'tide/components';
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {extendObservable, observable, computed, whyRun, action, map, autorun, autorunAsync, toJS as mobxToJS} from 'mobx';
import {observer} from "mobx-react";
import Promise from 'bluebird';
import * as utils from "tide/utils";
import classNames from 'classnames/bind';

// UI
import {
  Div,
  Button,
  Spacer,
  Blank,
  Notice,
  Error,
  Success,
  Icon,
  MarkDown,
  LoadingDiv,
  LoadingDivLarge
} from 'orion/ui/helpers';


// import {humanize_day} from 'orion/ui/date';

/**
 * All FormElement subclasses nested under this component will modify form_context during their onChange()
 *
 */
export class Form extends Component {

    @observable form_context = new Map();
    initial_data = {}; // initial data to be passed to a form ( make it a prop)

    getChildContext() {
        return {
            form: this
        };
    }
    
    static childContextTypes = {
        form: React.PropTypes.object
    };
    
    initialize_form_data(name, value){
        let data = observable({
            value : value,
            errors: []
        });
        
        this.form_context.set(name, data);
    }

    /**
     * Set form data at @name to a given @value
     * @param name
     * @param value
     */
    set_form_data(name, value){
        if (!this.form_context.has(name)) {
            this.initialize_form_data(name, null);
        }
        
        // Todo: Check if this works?
        // We are dynamically accessing the array
        let data = this.form_context.get(name);
        data.value = value;
    }
    
    
    /**
     * Get form data of @name
     * @param name
     * @returns {*}
     */
    get_form_data(name){
        if(!this.form_context.has(name)){
            this.initialize_form_data(name, null);
        }
        
        return this.form_context.get(name);
    }
    
    @computed get entries(){
        return Array.from(this.form_context.entries());
    }

    toJS(){
        let context = {};
        for(let [key, data] of this.entries){
            context[key] = mobxToJS(data.value);
        }
        return context;
    }

    render() {
        return (
          <form onSubmit={this.props.submit}>
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
export class FormItem extends Component{
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

    /**
     * Return the internal value if defined, otherwise return form context
     * @returns {*}
     */
    @computed get value() {
        if (this.props.value !== undefined){
            console.log("returning prop");
            return this.props.value;
        }

        return this.context.form.get_form_data(this.props.name).value;
    }

    get form(){
        return this.context.form;
    }
    
    @computed get errors(){
        return this.context.form.get_form_data(this.props.name).errors;
    }
    
    add_error(message) {
        this.errors.push({ "message": message });
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
        console.debug(`${this.props.name} prev value`, this.context.form.get_form_data(this.props.name).value);
        console.debug(`${this.props.name} new value`, new_value);
        this.context.form.set_form_data(this.props.name, new_value);
    }
}


export class FormDebugger extends Component {
    static contextTypes = {
        form: React.PropTypes.object
    };
    
    get form() {
        return this.context.form;
    }
    
    escapeHtmlEntities(str) {
        // No jQuery, so use string replace.
        return str
          .replace(/&/g, '&amp;')
          .replace(/>/g, '&gt;')
          .replace(/</g, '&lt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&quot;');
    }
    
    syntaxHighlight(json) {
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
            let cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + this.escapeHtmlEntities(match) + '</span>';
        });
    }
    
    stringify(value){
        let html = this.syntaxHighlight(JSON.stringify(value));
        return <div dangerouslySetInnerHTML={{__html: html}} />;
    }
    
    
    render() {
        return (
          <div className="debugger">
              <p>Debugging Info</p>
              <ul>
                  {this.context.form.entries.map(([key, {value, errors}] = entry) =>{
                      return <li key={key}>{key} => {this.stringify(value)} </li>
                  })}
              </ul>
          </div>
        )
    }
}


/**
 * Usage
 *
 *  <Input placeholder="write something..." name="text" />
 */
export class Input extends FormItem{
    static defaultProps = {
        initial: ""
        //onChange
    };
    
    @action onChange(event){
        let value = event.target.value;
        
        
        if (this.props.onChange){
            this.props.onChange(event)
        }
    
        this.set_value(value);
    }
    
    render() {
        let has_error     = false;
        let error_message = '';
        let element_classes = classNames({
            "l-input"    : true,
            "l-fullwidth": true,
            "l-error"    : has_error
        });
        
        let {name, placeholder, onChange, value, ...other} = this.props;
        if (value === undefined){
            value = this.value;
        }
        
        return (
          <div>
              {this.props.label ? <label>{this.props.label}</label> : ""}
              <input className="l-input l-fullwidth"
                     type="text"
                     name={name}
                     placeholder={placeholder}
                     onChange={this.onChange}
                     {...other}
                     value={value}
                    
              />
              {has_error ? <div className="l-error"> {error_message} </div> : ''}
          </div>
        )
    }
}


class SubmitButton {
    render() {
        // Use bubbler
        // <input type="submit" onClick={this.trigger('submit')}></input>
        
        // <input type="submit" onClick={this.trigger('submit')}></input>
        return (
          <input type="submit" onClick={this.context.form.submit()}></input>
        )
    }
}
