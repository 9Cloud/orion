// React
import React, {PropTypes} from "react";
import {StyleGuidePage} from "orion/base/layout";
import {Section, SubSection} from 'orion/ui/helpers';
import {Form, Input, TextArea, FormDebugger} from 'orion/ui/forms';
import {NewMessage, ExampleTagger} from "orion/ui/_new_message";


import {Component} from "tide/components";
import {observer} from "mobx-react";
import {observable, computed, action, map, autorunAsync} from "mobx";
import Promise from "bluebird";
import {Div, Button, Spacer} from "orion/ui/helpers";
import {TagModel, EditableTagList} from "orion/ui/tags";
import {EditableTag} from "orion/ui/tags";
import {MarkdownEditor} from "orion/ui/editor";
import {FormItem} from 'orion/ui/forms_lib/form_item';

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
                    <div className="l-select-wrapper">
                        <select className="l-select l-fullwidth">
                            <option>1</option>
                        </select>
                        <div className="l-select-dd l-fullwidth">
                            <ul>
                                <li> Option 1</li>
                                <li> Option 2</li>
                                <li> Option 3</li>
                            </ul>
                        </div>
                    </div>
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

    rich() {
        return (
            <Section title="Rich Compoennts" slug="rich">
                <Form ref="form">
                    <ExampleTagger label="Autocomplete Suggester" name="users_to"/>

                    <MarkdownEditor ref="message" name="message" label="WYSIWYG powered by Prose Mirrro"
                                    placeholder="Write your message here...."/>

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
            <ul>
                <li><a href="/"> ← Home </a></li>
                <li><a href="#buttons">Buttons</a></li>
                <li><a href="#select">Selection</a></li>
                <li><a href="#text">Text</a></li>
                <li><a href="#rich">Rich Components</a></li>
            </ul>
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
