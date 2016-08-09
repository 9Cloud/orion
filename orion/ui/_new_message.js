import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observer} from "mobx-react";
import Promise from "bluebird";
import {Div, Button} from "orion/ui/helpers";
import {TagModel, EditableTagList} from "orion/ui/tags";
import {MarkdownEditor} from "orion/ui/editor";
import {Form, Input, FormDebugger} from "orion/ui/forms";

// UI

class UserNameInput extends Component {
  suggetions = [
      new TagModel({id: 1, name: "Ron", url: "/users/Ron"}),
      new TagModel({id: 1, name: "Toby", url: "/users/Toby"}),
      new TagModel({id: 1, name: "Kekeli", url: "/users/Kekeli"}),
      new TagModel({id: 1, name: "Kay", url: "/users/Kay"})
  ];
  fake_suggestions(text) {
    return Promise.resolve(this.suggestions)
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
      let context = this.refs.form.toJS();
      context.body = this.refs.message.markdown();
      console.info("Submit called!", context);

  }

  render(){
    return(
      <div>
        <h2>New Message</h2>
        <Form ref="form">
          <label>To:</label>
          <UserNameInput name="users_to"/>
          <Input name="subject" label="Subject" placeholder="Hello"/>

          <MarkdownEditor ref="message" name="message" label="Message" placeholder="Write your message here...."/>

          <FormDebugger />

          <Div float="right">
            <Button bold={true} onClick={this.submit}>Submit</Button>
          </Div>
        </Form>
      </div>
    )
  }
}