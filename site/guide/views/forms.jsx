"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_1 = require("mobx");
var helpers_1 = require("orion/ui/helpers");
var editor_1 = require("orion/ui/forms/editor");
var components_1 = require("orion/ui/components");
var forms_1 = require("orion/ui/forms");
var page_1 = require("./page");
var TagModel = (function () {
    function TagModel(options) {
        this.id = options.id;
        this.text = options.text;
        this.url = options.url;
    }
    return TagModel;
}());
var ButtonExamples = function (_a) {
    var size = _a.size;
    return (<div>
        <helpers_1.Button size={size} color="normal">Normal {size}</helpers_1.Button>
        <helpers_1.Button size={size} color="normal" enabled={false}>Disabled Normal</helpers_1.Button>
        <helpers_1.Spacer />
        <helpers_1.Button size={size} color="secondary">Secondary {size}</helpers_1.Button>
        <helpers_1.Button size={size} color="secondary" enabled={false}>Disabled Secondary</helpers_1.Button>
        <helpers_1.Spacer />
        <helpers_1.Button size={size} color="ghost">Ghost {size}</helpers_1.Button>
        <helpers_1.Button size={size} color="ghost" enabled={false}>Disabled Ghost</helpers_1.Button>


    </div>);
};
var FormsPage = (function (_super) {
    __extends(FormsPage, _super);
    function FormsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormsPage.prototype.buttons = function () {
        return (<helpers_1.Section title="Buttons" slug="buttons" key="1">
                <helpers_1.SubSection title="Size: Default">
                    <ButtonExamples size="normal"/>
                </helpers_1.SubSection>

                <helpers_1.SubSection title="Size: Small">
                    <ButtonExamples size="small"/>
                </helpers_1.SubSection>

                <helpers_1.SubSection title="Size: Large">
                    <ButtonExamples size="large"/>
                </helpers_1.SubSection>
            </helpers_1.Section>);
    };
    FormsPage.prototype.checkboxes = function () {
        var select_options = [
            { text: "Option 1", value: 1 },
            { text: "Option 2", value: 2 }
        ];
        var initial = {
            fields: {
                example_checkbox: true
            }
        };
        return (<helpers_1.Section title="Selection Elements" slug="select" key="2" className="l-col-8">
                <forms_1.Form initial={initial}>
                    <helpers_1.SubSection title="Radio">
                        <forms_1.RadioGroup name="example_radio" label="Pick one of these..." options={select_options}/>
                    </helpers_1.SubSection>

                    <helpers_1.SubSection title="Checkboxes">
                        <forms_1.Checkbox name="example_checkbox" label="Check me!"/>
                    </helpers_1.SubSection>

                    <helpers_1.SubSection title="Select">
                        <forms_1.Select name="example_select" placeholder="Please choose one..." label="Example" options={select_options}/>
                    </helpers_1.SubSection>
                </forms_1.Form>
            </helpers_1.Section>);
    };
    FormsPage.prototype.text_elements = function () {
        var fields = {
            example: "",
            example_error: "This element has an error"
        };
        var errors = {
            __form__: ["This is an general error message for the form itself"],
            example: [],
            example_error: ["The above element has an error"]
        };
        var initial = {
            fields: fields,
            errors: errors
        };
        return (<helpers_1.Section title="Text Elements" slug="text" key="3">

                <helpers_1.SubSection title="Dark Theme">
                    <forms_1.Form initial={initial}>

                        <div className="l-col-lg-4 l-col-gut-md">
                            <forms_1.Input name="example" label="Input Element (label)" placeholder="Example Placeholder"/>
                        </div>
                        <div className="l-col-lg-4 l-col-gut-md">
                            <forms_1.Input name="example_error" label="Input with a error" placeholder="Example Placeholder"/>
                        </div>
                        <div className="l-col-lg-4 l-col-gut-md">
                            <forms_1.TextArea name="text" placeholder="Type something here..."/>
                        </div>

                        <helpers_1.Spacer />


                        <helpers_1.Notice>Form debuggers can be used to show the state of the form in development.
                            The debugger below is attatched to the elements above.
                        </helpers_1.Notice>
                        <forms_1.FormDebugger />
                    </forms_1.Form>
                </helpers_1.SubSection>

                <helpers_1.SubSection title="Light Theme">
                    <helpers_1.Blurb>The light theme is still in development</helpers_1.Blurb>
                    <div className="white_theme">
                        <forms_1.Form>
                            <forms_1.TextArea name="text" theme="light" placeholder="Here is text on the light theme..."/>
                        </forms_1.Form>
                    </div>
                </helpers_1.SubSection>
            </helpers_1.Section>);
    };
    FormsPage.prototype.submit = function () {
        // All form data is in
        //this.form_context
        var context = this.refs.form.toJS();
        console.info("Submit called!", context);
        //context.body = this.refs.message.markdown();
        this.refs.debugger.forceUpdate();
    };
    FormsPage.prototype.rich = function () {
        return (<helpers_1.Section key="4" title="Rich Compoennts" slug="rich" className="l-col-8">
                <forms_1.Form ref="form">
                    <ExampleTagger label="Autocomplete Suggester" name="users_to"/>

                    <editor_1.MarkdownEditor ref="message" name="message" label="WYSIWYG powered by Prose Mirror" placeholder="Write your message here...."/>

                    <helpers_1.Notice>The 'message' field this only updated when you click the submit button, because ProseMirror
                        is not React component</helpers_1.Notice>
                    <forms_1.FormDebugger ref="debugger"/>

                    <helpers_1.Div float="right">
                        <helpers_1.Button onClick={this.submit}>Submit</helpers_1.Button>
                    </helpers_1.Div>
                </forms_1.Form>
            </helpers_1.Section>);
    };
    FormsPage.prototype.sidebar = function () {
        return (<div className="l-vmenu">
                <helpers_1.VMenuLink index={true}>← Home</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#buttons">Buttons</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#select">Selection</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#text">Text</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#rich">Rich Components</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#tooltips">Tooltips</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#modals">Modals</helpers_1.VMenuLink>
            </div>);
    };
    FormsPage.prototype.main = function () {
        return [
            this.buttons(),
            this.checkboxes(),
            this.text_elements(),
            this.rich()
        ];
    };
    return FormsPage;
}(page_1.StyleGuidePage));
exports.FormsPage = FormsPage;
var ExampleTagger = (function (_super) {
    __extends(ExampleTagger, _super);
    function ExampleTagger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExampleTagger.prototype.fake_suggestions = function (_text) {
        return Promise.resolve([
            new TagModel({ id: 1, text: "Ron", url: "/users/Ron" }),
            new TagModel({ id: 1, text: "Toby", url: "/users/Toby" }),
            new TagModel({ id: 1, text: "Kekeli", url: "/users/Kekeli" }),
            new TagModel({ id: 1, text: "Kay", url: "/users/Kay" })
        ]);
    };
    Object.defineProperty(ExampleTagger.prototype, "tags", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    ExampleTagger.prototype.add_tags = function (tag_array) {
        for (var _i = 0, tag_array_1 = tag_array; _i < tag_array_1.length; _i++) {
            var tag_text = tag_array_1[_i];
            if (this.tags.includes(tag_text)) {
                this.add_error(tag_text + ": this user has already been added");
                continue;
            }
            this.tags.push({
                text: tag_text
            });
        }
    };
    ExampleTagger.prototype.remove_tag = function (tag) {
        this.clear_errors();
        var tags = this.tags.filter(function (t) { return t.text != tag.text; });
        this.set_value(tags);
    };
    ExampleTagger.prototype.render = function () {
        return (<div>
                <components_1.TagListEditable name={this.props.name} label={this.props.label} fetch_suggestions={this.fake_suggestions} add_tags={this.add_tags} remove_tag={this.remove_tag}/>
            </div>);
    };
    return ExampleTagger;
}(forms_1.FormItem));
__decorate([
    mobx_1.computed
], ExampleTagger.prototype, "tags", null);
__decorate([
    mobx_1.action
], ExampleTagger.prototype, "add_tags", null);
__decorate([
    mobx_1.action
], ExampleTagger.prototype, "remove_tag", null);
exports.ExampleTagger = ExampleTagger;
