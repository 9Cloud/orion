import {Component, Provider} from 'tide/components';
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {extendObservable, observable, computed, whyRun, action, map, autorun, autorunAsync} from 'mobx';
import {observer} from "mobx-react";
import Promise from 'bluebird';

// UI
import {Div, Button, Spacer,  Blank, Notice, Error, Success, Icon, MarkDown, LoadingDiv, LoadingDivLarge} from 'orion/ui/helpers';
import {Tag, EditableTagList} from 'orion/ui/tags';

import {MarkdownEditor} from 'orion/ui/editor';
import {Form, Input} from 'orion/ui/forms';

import classNames from 'classnames/bind';

class UserNameInput extends Component {
  fake_suggestions(text) {
    return Promise.resolve([
      {key: "1", value: "Ron"},
      {key: "2", value: "Toby"},
      {key: "3", value: "Kekeli"},
      {key: "4", value: "Someone Else"},
    ])
  }
  
  render() {
    return (
      <div>
        <EditableTagList
          type="user"
          name={this.props.name}
          fetch_suggestions={this.fake_suggestions}
        />
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
          <label>To:</label> <UserNameInput name="users_to" />
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