import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {extendObservable, observable, computed, whyRun, action, map, autorun, autorunAsync} from 'mobx';
import {observer} from "mobx-react";
import Promise from 'bluebird';
        
// UI
import {Div, Button, Spacer,  Blank, Notice, Error, Success, Icon, MarkDown, LoadingDiv, LoadingDivLarge} from 'app/ui/helpers';
import {Avatar, Card, CardText, CardSubText, FlatUserList} from 'app/ui/components';
import {Tabs, TabsMenu, TabItem, TabsPanel} from 'app/ui/tabs';
import {humanize_day} from 'app/ui/date';
import {Tag, TagList} from 'app/ui/tags';


import {Component, Provider} from 'tide/components';


import {EMPTY, LOADING, FAILED} from 'app/constants';
import {read_thread, process_thread} from 'app/messages/actions/ui';

import classNames from 'classnames/bind';


import {ProseMirror} from "prosemirror/dist/edit";
import {elt} from "prosemirror/dist/util/dom";
import {defaultMarkdownParser, defaultMarkdownSerializer} from "prosemirror/dist/markdown";
import {schema} from "prosemirror/dist/schema-basic";
import {exampleSetup} from "prosemirror/dist/example-setup";
// import 'prosemirror/dist/markdown'
// import 'prosemirror/dist/menu/menubar'

import markdown_it from 'markdown-it';

class MarkdownEditor extends Component{
  constructor(props){
    super(props);
  }
  
  static defaultProps ={
    initial_content: ""
  };
  
  componentDidMount(){
    this.pm = new ProseMirror({
      place  : this.refs.editor,
      doc    : defaultMarkdownParser.parse(this.props.initial_content),
      plugins: [
        exampleSetup.config({
          menuBar    : false,
          tooltipMenu: true
        })
      ]
    });
  }
  
  markdown(){
    // return markdown text
    return defaultMarkdownSerializer.serialize(this.pm.doc)
  }
  
  from_markdown(content){
    // return a schema
    return defaultMarkdownParser.parse(content)
  }
  
  render(){
    return (
      <div ref="editor"></div>
    )
  }
}

// Output Markdown

class MarkdownText extends Component{
  static propTypes = {
    text: React.PropTypes.string.isRequired
  };
  
  convert(content){
    let md = markdown_it({
      html      : false,
      linkify   : true,
      typography: true
    })
    
    //md.use(plugin, options)
    return {__html: md.render(content) }
  }
  render(){
    let raw_markup = this.convert(this.props.text)
    return <div className="markdown" dangerouslySetInnerHTML={raw_markup}/>;
  }
}

class FormElement extends Component{
  render(){
    let has_error = false;
    let error_message = '';
    
    let element_classes = classNames({
      "l-input": true,
      "l-fullwidth": true,
      "l-error": has_error
    });
    
    return(
      <p>
        {has_error ? <span className="l-error"> {error_message} </span> : ''}
        {this.props.children}
      </p>
    )
  }
}

class Input extends Component{
  render(){
    return(
      <FormElement>
        <label>{this.props.label}</label> <input className="l-input l-fullwidth" type="text" placeholder={this.props.placeholder}/>
      </FormElement>
    )
  }
}

class RadioButton extends Component {
  // look at checked
  
  render() {
    return (
      <FormElement>
        <input class="l-radio" type="radio" name="hello" /> <label>{this.props.label}</label>
      </FormElement>
    )
  }
}


class Checkbox extends Component{
  // look at checked
  
  render() {
    return (
      <FormElement>
        <input className="l-checkbox" type="checkbox"/><label>Check me!</label>
      </FormElement>
    )
  }
}

class TextArea extends Component{
  render() {
    return (
      <FormElement>
        <label>{this.props.label}</label>
        <textarea className="l-textarea l-fullwidth" placeholder={this.props.placeholder}></textarea>
      </FormElement>
    )
  }
}

class WhiteTextArea extends Component{
  // look at value
  
  render(){
    return(
      <FormElement>
        <label>{this.props.label}</label> <textarea className="l-textarea l-inverse"></textarea>
      </FormElement>
    )
  }
}

class Select extends Component{
  // look at selected
  // change to value; changes li seelcted and option
  
  render(){
    let selected_option = {name: 1, value: 2};
    
    return(
      <FormElement>
        <div className="l-select-wrapper">
          <select className="l-select l-fullwidth" value={selected_option.value}>
            <option value={selected_option.value}>{selected_option.name}</option>
          </select>
          <div className="l-select-dd l-fullwidth">
            <ul>
              {this.props.options.map(({name, value}) => <li key={value}> {name} </li>)}
            </ul>
          </div>
        </div>
      </FormElement>
    )
  }
}

class Form extends Component{
  render(){
    return(
      <form>
        {this.props.children}
      </form>
    )
  }
}

@observer class Tagger extends Component{
  @observable tags = [];
  @observable tag_string = "";
  @observable cached_suggestions = map();
  @observable errors = [];
  
  static defaultProps = {
    tags: [],
    min_suggestion_length: 3
  };
  
  constructor(props){
    super(props);
    this.tags = this.tags.concat(this.props.tags);
    //this.cached_suggestions = map();
  }
  
  // Errors
  add_error(message) {
    this.errors.push({
      "message": message
    });
  }
  
  clear_errors() {
    this.errors.clear();
  }
  
  
  // State
  @action add_tag(tag_string){
    for (let tag of this.split(tag_string)) {
      if(this.tags.includes(tag)){

        this.add_error(`The tag "${tag}" has already been added`);
        
        continue;
      }
  
      this.tags.push(tag);
    }
  }
  
  @action remove_tag(tag){
    this.clear_errors();
    this.tags = this.tags.filter((t) => t != tag)
  }
  
  split(tag_string) {
    return tag_string.split(',').map((text) => text.trim())
  }
  
  // UI
  @action set_string(event) {
    this.clear_errors();
    this.tag_string = event.target.value;
  }
  
  on_paste(event){
    // If the tag string is empty add the pasted information as a tag
    // Otherwise, add it to the tag string
    event.preventDefault();
    this.clear_errors();
    
    const clipboardData = event.clipboardData || window.clipboardData;
    const string = clipboardData.getData('text');
    if(this.tag_string.trim() == ""){
      this.add_tag(string);
    }
    else{
      this.tag_string += string;
    }
  }
  
  @action submit(event){
    // Pressing enter or tab will add a tag
    if(event.key == 'Enter' || event.key == 'Tab'){
      event.preventDefault();
      event.stopPropagation();
      
      let tag = this.tag_string;
      this.tag_string = "";
      this.add_tag(tag);
    }
    
    // If the tag string is empty, backspace will remove the last added tag
    if(event.key == 'Backspace'){
      if(this.tag_string == ""){
        event.preventDefault();
        event.stopPropagation();
  
        this.tags.pop();
      }
    }
  }
  
  @action apply_suggestion(tag){
    this.tag_string = "";
    this.add_tag(tag.value);
  }

  renderTag(tag){
    return (
      <Tag key={tag} type="blue" onClick={this.remove_tag.bind(this, tag)}>
        {tag}
        <Icon type="remove" onClick={this.remove_tag.bind(this, tag)}/>
      </Tag>
    )
  }

  render() {
    return (
      <div>
        <div className="l-float-left">
          {this.tags.map(this.renderTag)}
        </div>
        
        <Div className="l-col-4 l-float-right">
          <input className="l-input l-fullwidth" type="text" placeholder="Write a username..."
                 value={this.tag_string}
                 onChange={this.set_string}
                 onKeyDown={this.submit}
                 onPaste={this.on_paste} />
          
          {<Suggester text={this.tag_string}
                      onSelect={this.apply_suggestion}
                      fetch={this.context.app.suggest_username}/>}
        </Div>
        
        <Spacer />
        {this.errors.map((err, i) => <Error key={i}>{err.message}</Error>)}
      </div>
    )
  }
}

class FormErrors {
  deserialize() {
    /*
     Expected format:
     
     {"sender": [{"message": "Enter a valid email address.", "code": "invalid"}],
     "subject": [{"message": "This field is required.", "code": "required"}]}
     */
  }
  
  propTypes = {
    errors: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        'message': React.PropTypes.string
      })
    ).isRequired
  }
  
  render(){
    return this.props.errors.map((err, i) => <Error key={i}>{err.message}</Error>)
  }
}


class Suggester extends Component{
  @observable cached_suggestions = map();
  @observable current_suggestions = [];
  @observable loading = false;
  @observable text = "";
  
  static propTypes = {
    min_suggestion_length: React.PropTypes.number,
    text: React.PropTypes.string.isRequired
  };
  
  static defaultProps = {
    min_suggestion_length: 3
  };
  
  constructor(props){
    super(props);
  
    autorunAsync(this.fetch);
  }
  
  fetch() {
    /**
     * Fetch suggestions from server. Will use props.fetch(this.text) to actually get the suggestions
     */
    let cache = this.cached_suggestions;
    console.info('checking...', this.text, this.text.length);
    
    if (this.loading) {
      console.debug('loading...', this.text);
      return Promise.resolve(false);
    }
    
    if (cache.has(this.text)) {
      console.debug('no need to check...', this.text);
      return Promise.resolve(true);
    }
    
    // Make request
    if (this.text.length > this.props.min_suggestion_length) {
      console.debug('fetching...', this.text);
      this.loading = true;
      
      return this.props.fetch(this.text)
        .then(action("fetch-callback", (data) => {
          // Set value into cache
          let {query, values} = data.result;
          cache.set(query, values);
          
          console.debug('setting...', query);
          
          this.current_suggestions = values;
          this.loading             = false;
          
          return Promise.resolve(true);
        })).catch(() => {
          this.loading = false;
          return Promise.resolve(false);
        });
    }
    
    return Promise.resolve(false);
  }
  
  componentWillReceiveProps(nextProps, nextContext){
    this.text = nextProps.text.trim();
  }

  @computed get suggestions() {
    return this.current_suggestions;
  }
  
  render_suggestion(){
    let text_is_too_short = this.props.text.length < this.props.min_suggestion_length;
    
    if(text_is_too_short){
      return <li>
        <Icon type="question" />
        No suggestions. You must type at least {this.props.min_suggestion_length} characters...
      </li>
    }
  
    if (this.loading) {
      return <li><Icon type="spinner"/> Loading ...</li>
    }
  
    if(this.suggestions.length == 0){
      return <li className="blank_state">No suggestions...</li>
    }
    
    return this.suggestions.map(({key, value}) => <li onClick={this.props.onSelect.bind(key)} key={key}> {value} </li>)
  }
  
  render(){
    let inner = this.render_suggestion();
    if(this.text == ""){
      return <div></div>;
    }

    return (
      <div className="l-select-wrapper l-fullwidth">
          <div className="l-select-dd l-fullwidth" style={{display: 'block'}}>
              <ul>
                  {inner}
              </ul>
          </div>
      </div>
    )
  }
}



export class NewMessage extends Component{
  submit(){
    // All form data is in
    //this.form_context
  }
  
  render(){
    return(
      <div>
        <h2>New Message</h2>
        
        <Form>
          <label>To:</label>
          <Tagger />
  
          <Input label="Subject" placeholder="Hello"/>
          
          <MarkdownEditor label="Message" placeholder="Write your message here...."/>
          
          <Div float="right">
            <Button bold>Submit</Button>
          </Div>
        </Form>
      </div>
    )
  }
}