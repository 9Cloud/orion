// React
import React, {PropTypes} from "react";
import {observer} from "mobx-react";
import {StyleGuidePage} from "orion/guide/layout";
import {Form, Input, TextArea, FormDebugger, Select} from 'orion/ui/forms';
import {MarkdownEditor} from "orion/ui/editor";
import {NewMessage, ExampleTagger} from "orion/ui/_new_message";
import {Div, Button, Section, SubSection, Spacer, Icon, Notice, VMenuLink} from 'orion/ui/helpers';

export class FormsPage extends StyleGuidePage {
    buttons() {
        return (
            <Section title="Buttons" slug="buttons" key="1">
                <SubSection title="Size: Default">
                    <button className="l-btn l-row-gut-1"> Default</button>
                    <button className="l-btn-secondary l-row-gut-1"> Secondary button</button>
                    <button className="l-btn-ghost l-row-gut-1"> Ghost button</button>
                </SubSection>

                <SubSection title="Size: Small">
                    <button className="l-btn l-btn--small l-row-gut-1"> Default</button>
                    <button className="l-btn-secondary l-btn-secondary--small l-row-gut-1"> Secondary Button</button>
                    <button className="l-btn-ghost l-btn-ghost--small l-row-gut-1"> Ghost button</button>
                </SubSection>

                <SubSection title="Size: Large">
                    <button className="l-btn l-btn--large l-row-gut-1"> Default</button>
                    <button className="l-btn-secondary l-btn-secondary--large l-row-gut-1"> Secondary Button</button>
                    <button className="l-btn-ghost l-btn-ghost--large l-row-gut-1"> Ghost button</button>
                </SubSection>

                <SubSection title="Disabled buttons">
                    <button className="l-btn-disabled l-btn-disabled--small l-row-gut-1"> Small Disabled Button</button>
                    <button className="l-btn-disabled l-row-gut-1"> Default Disabled Button</button>
                    <button className="l-btn-disabled l-btn-disabled--large l-row-gut-1"> Large Disabled Button</button>
                </SubSection>
            </Section>
        )
    }

    checkboxes() {
        return (
            <Section title="Selection Elements" slug="select" key="2">
                <SubSection title="Radio">
                    <input className="l-radio" type="radio" name="hello"/> <label>Option 1</label> <br/><br/>
                    <input className="l-radio" type="radio" name="hello"/> <label>Option 2</label> <br/><br/>
                    <input className="l-radio" type="radio" name="hello"/> <label>Option 3</label> <br/><br/>
                </SubSection>

                <SubSection title="Checkboxes">
                    <input className="l-checkbox" type="checkbox"/><label>Check me!</label>
                </SubSection>

                <SubSection title="Select">
                    <Form>
                        <Select name="example" placeholder="Please choose one..." label="Example"></Select>
                    </Form>
                </SubSection>
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
                        <Input name="example" label="Input Element (label)" placeholder="Example Placeholder"/>
                        <Input name="example_error" label="Input with a error" placeholder="Example Placeholder"/>
                        <TextArea name="text" placeholder="Type something here..."/>

                        <p>Form debuggers can be useful in showing the state of the form programatically</p>
                        <FormDebugger />
                    </Form>

                </SubSection>

                <SubSection title="Light Theme">
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
            <Section title="Rich Compoennts" slug="rich">
                <Form ref="form">
                    <ExampleTagger label="Autocomplete Suggester" name="users_to"/>

                    <MarkdownEditor ref="message" name="message" label="WYSIWYG powered by Prose Mirrro"
                                    placeholder="Write your message here...."/>

                    <Notice>The 'message' field this only updated when you click the submit button, because ProseMirror is not React component</Notice>
                    <FormDebugger ref="debugger"/>

                    <Div float="right">
                        <Button bold={true} onClick={this.submit}>Submit</Button>
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
