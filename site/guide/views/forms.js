import React from "react";
import {computed, action} from "mobx";
import {View} from "tide/components";
import {Div, Button, Section, SubSection, Spacer, Notice, VMenuLink, Blurb} from "orion/ui/helpers";
import {MarkdownEditor} from "orion/ui/forms/editor";
import {TagModel, TagListEditable} from "orion/ui/components";
import {Form, Input, TextArea, FormDebugger, Select, Checkbox, RadioGroup, FormItem} from "orion/ui/forms";
import {StyleGuidePage} from "./page";

const ButtonExamples = ({size}) => (
    <div>
        <Button size={size} color="normal">Normal {size}</Button>
        <Button size={size} color="normal" enabled={false}>Disabled Normal</Button>
        <Spacer/>
        <Button size={size} color="secondary">Secondary {size}</Button>
        <Button size={size} color="secondary" enabled={false}>Disabled Secondary</Button>
        <Spacer/>
        <Button size={size} color="ghost">Ghost {size}</Button>
        <Button size={size} color="ghost" enabled={false}>Disabled Ghost</Button>


    </div>
);

export class FormsPage extends StyleGuidePage {
    buttons() {
        return (
            <Section title="Buttons" slug="buttons" key="1">
                <SubSection title="Size: Default">
                    <ButtonExamples size="normal"/>
                </SubSection>

                <SubSection title="Size: Small">
                    <ButtonExamples size="small"/>
                </SubSection>

                <SubSection title="Size: Large">
                    <ButtonExamples size="large"/>
                </SubSection>
            </Section>
        )
    }

    checkboxes() {
        let select_options = [
            {text: "Option 1", value: 1},
            {text: "Option 2", value: 2}
        ];

        let initial = {
            fields: {
                example_checkbox: true
            }
        };

        return (
            <Section title="Selection Elements" slug="select" key="2" className="l-col-8">
                <Form initial={initial}>
                    <SubSection title="Radio">
                        <RadioGroup name="example_radio" label="Pick one of these..." options={select_options}/>
                    </SubSection>

                    <SubSection title="Checkboxes">
                        <Checkbox name="example_checkbox" label="Check me!"/>
                    </SubSection>

                    <SubSection title="Select">
                        <Select name="example_select" placeholder="Please choose one..." label="Example"
                                options={select_options}/>
                    </SubSection>
                </Form>
            </Section>
        )
    }


    text_elements() {
        let fields = {
            example: "",
            example_error: "This element has an error"
        };

        let errors = {
            __form__: ["This is an general error message for the form itself"],
            example: [],
            example_error: ["The above element has an error"]
        };

        let initial = {
            fields: fields,
            errors: errors
        };

        return (
            <Section title="Text Elements" slug="text" key="3">

                <SubSection title="Dark Theme">
                    <Form initial={initial}>

                        <div className="l-col-lg-4 l-col-gut-md">
                            <Input name="example" label="Input Element (label)" placeholder="Example Placeholder"/>
                        </div>
                        <div className="l-col-lg-4 l-col-gut-md">
                            <Input name="example_error" label="Input with a error" placeholder="Example Placeholder"/>
                        </div>
                        <div className="l-col-lg-4 l-col-gut-md">
                            <TextArea name="text" placeholder="Type something here..."/>
                        </div>

                        <Spacer/>


                        <Notice>Form debuggers can be used to show the state of the form in development.
                            The debugger below is attatched to the elements above.
                        </Notice>
                        <FormDebugger />
                    </Form>
                </SubSection>

                <SubSection title="Light Theme">
                    <Blurb>The light theme is still in development</Blurb>
                    <div className="white_theme">
                        <Form>
                            <TextArea name="text" theme="light" placeholder="Here is text on the light theme..."/>
                        </Form>
                    </div>
                </SubSection>
            </Section>
        )
    }

    submit() {
        // All form data is in
        //this.form_context
        let context = this.refs.form.toJS();
        console.info("Submit called!", context);

        //context.body = this.refs.message.markdown();
        this.refs.debugger.forceUpdate();
    }

    rich() {
        return (
            <Section key="4" title="Rich Compoennts" slug="rich" className="l-col-8">
                <Form ref="form">
                    <ExampleTagger label="Autocomplete Suggester" name="users_to"/>

                    <MarkdownEditor ref="message" name="message" label="WYSIWYG powered by Prose Mirror"
                                    placeholder="Write your message here...."/>

                    <Notice>The 'message' field this only updated when you click the submit button, because ProseMirror
                        is not React component</Notice>
                    <FormDebugger ref="debugger"/>

                    <Div float="right">
                        <Button onClick={this.submit}>Submit</Button>
                    </Div>
                </Form>
            </Section>
        )
    }

    sidebar() {
        return (
            <div className="l-vmenu">
                <VMenuLink index={true}>← Home</VMenuLink>
                <VMenuLink hash="#buttons">Buttons</VMenuLink>
                <VMenuLink hash="#select">Selection</VMenuLink>
                <VMenuLink hash="#text">Text</VMenuLink>
                <VMenuLink hash="#rich">Rich Components</VMenuLink>
                <VMenuLink hash="#tooltips">Tooltips</VMenuLink>
                <VMenuLink hash="#modals">Modals</VMenuLink>
            </div>
        )
    }

    main() {
        return [
            this.buttons(),
            this.checkboxes(),
            this.text_elements(),
            this.rich()
        ]
    }

}


export class ExampleTagger extends FormItem {
    fake_suggestions(_text) {
        return Promise.resolve([
                                   new TagModel({id: 1, text: "Ron", url: "/users/Ron"}),
                                   new TagModel({id: 1, text: "Toby", url: "/users/Toby"}),
                                   new TagModel({id: 1, text: "Kekeli", url: "/users/Kekeli"}),
                                   new TagModel({id: 1, text: "Kay", url: "/users/Kay"})
                               ])
    }

    @computed get tags() {
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