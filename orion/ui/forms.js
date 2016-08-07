import {Component, Provider} from 'tide/components';
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {extendObservable, observable, computed, whyRun, action, map, autorun, autorunAsync} from 'mobx';
import {observer} from "mobx-react";
import Promise from 'bluebird';

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


// import {Avatar, Card, CardText, CardSubText, FlatUserList} from 'orion/ui/components';
// import {Tabs, TabsMenu, TabItem, TabsPanel} from 'orion/ui/tabs';
// import {humanize_day} from 'orion/ui/date';
// import {Tag, TagList} from 'orion/ui/tags';
//
//
// import {Component, Provider} from 'tide/components';
//
//
// import {EMPTY, LOADING, FAILED} from 'orion/constants';
// import {read_thread, process_thread} from 'orion/messages/actions/ui';
//

//
//
//
//
// /**
//  * All FormElement subclasses nested under this component will modify form_context during their onChange()
//  *
//  */
// class Form extends Component {
//
//     @observable form_context = new Map();
//     initial_data = {}; // initial data to be passed to a form ( make it a prop)
//
//     getChildContext() {
//         return {
//             form: this.form_context
//         };
//     }
//
//     /**
//      * Set form data at @name to a given @value
//      * @param name
//      * @param value
//      */
//     set_form_data(name, value){
//         this.form_context[name] = observable({
//             value : value,
//             errors: []
//         });
//     }
//
//     /**
//      * Get form data of @name
//      * @param name
//      * @returns {*}
//      */
//     get_form_data(name){
//         return this.form_context[name];
//     }
//
//     submit(){
//         // Make an ajax request or other!
//     }
//
//     render() {
//         return (
//           <form onSubmit={this.props.submit}>
//               {this.props.children}
//           </form>
//         )
//     }
// }
//
// /**
//  * All form elements inherit from this.
//  *
//  * To use. You must write a render()
//  */
// class FormItem extends Component{
//     @observable _value = undefined;
//
//     static propTypes = {
//         name: React.PropTypes.string.isRequired,
//
//         initial: React.PropTypes.any,
//         label: React.PropTypes.string,
//         placeholder: React.PropTypes.string
//     };
//
//     static defaultProps = {
//         initial: null
//     };
//
//
//     /**
//      * Return the internal value if defined, otherwise return form context
//      * @returns {*}
//      */
//     @computed get value(){
//         if(this._value != undefined){
//             return this._value;
//         }
//
//         return this.context.form.get_form_data(this.props.name).value;
//     }
//
//     /**
//      * Set the internal state and form context
//      * @param {*} val
//      */
//     @action set_value(val){
//         this._value = val;
//         this.context.form.set_form_data(this.props.name, this.value);
//     }
// }
//
// class SubmitButton{
//     render(){
//         // Use bubbler
//         // <input type="submit" onClick={this.trigger('submit')}></input>
//
//         // <input type="submit" onClick={this.trigger('submit')}></input>
//         return(
//           <input type="submit" onClick={this.context.form.submit()}></input>
//         )
//     }
// }
//
// /**
//  * Usage
//  *
//  *  <Input placeholder="write something..." name="text" />
//  */
// class Input extends FormItem{
//     static defaultProps = {
//         initial: ""
//     };
//
//     render() {
//         return (
//           <div>
//               <label>{this.props.label}</label>
//               <input className="l-input l-fullwidth"
//                      name={this.props.name} type="text"
//                      placeholder={this.props.placeholder}
//                      onChange={this.set_value}
//                      value={this.value}/>
//           </div>
//         )
//     }
// }


export class FormElement extends Component {
    render() {
        let has_error     = false;
        let error_message = '';
        
        let element_classes = classNames({
            "l-input"    : true,
            "l-fullwidth": true,
            "l-error"    : has_error
        });
        
        return (
          <p>
              {has_error ? <span className="l-error"> {error_message} </span> : ''}
              {this.props.children}
          </p>
        )
    }
}

export class Input extends Component {
    render() {
        return (
          <FormElement>
              <label>{this.props.label}</label> <input className="l-input l-fullwidth" type="text"
                                                       placeholder={this.props.placeholder}/>
          </FormElement>
        )
    }
}


export class Form extends Component {
    render() {
        return (
          <form>{this.props.children}</form>
        )
    }
}