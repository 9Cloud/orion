import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observer} from "mobx-react";
import {observable, computed, action, map, autorunAsync} from "mobx";
import Promise from "bluebird";
import {Div, Button, Spacer} from "orion/ui/helpers";
import {TagModel} from "orion/ui/tags";
import {TagListEditable} from "orion/ui/tags/tag_list_editable";
import {MarkdownEditor} from "orion/ui/forms";
import {Form, Input, FormDebugger} from "orion/ui/forms";
import {FormItem} from 'orion/ui/forms/form_item';

// UI
export class ExampleTagger extends FormItem {
    fake_suggestions(_text) {
        return Promise.resolve([
            new TagModel({id: 1, text: "Ron", url: "/users/Ron"}),
            new TagModel({id: 1, text: "Toby", url: "/users/Toby"}),
            new TagModel({id: 1, text: "Kekeli", url: "/users/Kekeli"}),
            new TagModel({id: 1, text: "Kay", url: "/users/Kay"})
        ])
    }
    @computed get tags(){
        return this.value;
    }

    @action add_tags(tag_array) {
        for (let tag_text of tag_array) {
            if (this.tags.includes(tag_text)) {
                this.add_error(`${tag_text}: this user has already been added`);
                continue;
            }
            this.tags.push({
                text: tag_text
            });
        }
    }

    @action remove_tag(tag) {
        this.clear_errors();
        let tags = this.tags.filter((t) => t.text != tag.text);
        this.set_value(tags);
    }

    render() {
        return (
            <div>
                <TagListEditable
                    name={this.props.name}
                    label={this.props.label}
                    fetch_suggestions={this.fake_suggestions}
                    add_tags={this.add_tags}
                    remove_tag={this.remove_tag}
                />
            </div>
        )
    }
}

export class NewMessage extends Component {
    submit() {
        // All form data is in
        //this.form_context
        let context = this.refs.form.toJS();
        console.info("Submit called!", context);

        //context.body = this.refs.message.markdown();
        this.refs.debugger.forceUpdate();
    }

    render() {
        return (
            <div>
                <h2>New Message</h2>
                <Form ref="form">
                    <ExampleTagger label="Autocomplete Suggester" name="users_to"/>
                    <Input name="subject" label="Subject" placeholder="Hello"/>

                    <MarkdownEditor ref="message" name="message" label="WYSIWYG powered by Prose Mirrro"
                                    placeholder="Write your message here...."/>

                    <FormDebugger ref="debugger"/>

                    <Div float="right">
                        <Button bold={true} onClick={this.submit}>Submit</Button>
                    </Div>
                </Form>
            </div>
        )
    }
}