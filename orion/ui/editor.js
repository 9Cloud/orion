import React, {PropTypes} from "react";
import {observer} from "mobx-react";
import {observable, computed, action, when, extendObservable} from 'mobx';
import {Spacer} from 'orion/ui/helpers';
import {Component} from "tide/components";
import {ProseMirror} from "prosemirror/dist/edit";
import {elt} from "prosemirror/dist/util/dom";
import {defaultMarkdownParser, defaultMarkdownSerializer} from "prosemirror/dist/markdown";
import {schema} from "prosemirror/dist/schema-basic";
import {exampleSetup} from "prosemirror/dist/example-setup";
import markdown_it from "markdown-it";


import {FormItem} from 'orion/ui/forms_lib/form_item';

export class MarkdownEditor extends FormItem {
    constructor(props) {
        super(props);
    }

    register() {
        this.form.register(this.props.name, "", this);
    }

    componentDidMount() {
        when(
            // Once...
            () => this.form.bootstrapped,
            // Then
            () => {
                // We start up prose mirror with the initial value given by the form context
                this.pm = new ProseMirror({
                    place: this.refs.editor,
                    doc: this.from_markdown(this.value),
                    plugins: [
                        exampleSetup.config({
                            menuBar: false,
                            tooltipMenu: true
                        })
                    ]
                });
            }
        );

    }

    markdown() {
        if (!this.pm){
            return "";
        }

        return defaultMarkdownSerializer.serialize(this.pm.doc);// return markdown text
    }

    toJS() {
        return this.markdown();
    }

    from_markdown(content) {
        return defaultMarkdownParser.parse(content); // return a schema
    }

    render() {
        return (
          <div>
              {this.props.label ? <label>{this.props.label}</label> : ""}
              <Spacer />
              <div ref="editor"></div>
          </div>
        )
    }
}

// Output Markdown
export class MarkdownText extends Component {
    static propTypes = {
        text: React.PropTypes.string.isRequired
    };

    convert(content) {
        let md = markdown_it({
            html      : false,
            linkify   : true,
            typography: true
        });

        //md.use(plugin, options)
        return {__html: md.render(content)}
    }

    render() {
        let raw_markup = this.convert(this.props.text);
        return <div className="markdown" dangerouslySetInnerHTML={raw_markup}/>;
    }
}