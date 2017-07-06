import {when} from 'mobx';
import {Spacer} from 'orion/ui/helpers';

import {ProseMirror} from "prosemirror/dist/edit";
import {exampleSetup} from "prosemirror/dist/example-setup";
import {defaultMarkdownParser, defaultMarkdownSerializer} from "prosemirror/dist/markdown";
import {schema} from "prosemirror/dist/schema-basic";
import {elt} from "prosemirror/dist/util/dom";
import * as React from "react";
import {FormErrors} from "./errors";
import {FormItem} from './form_item';

/**
 * @class
 * Display a text-editor for Markdown using ProseMirror
 */
export class MarkdownEditor extends FormItem {
    pm: any;
    refs: {
        editor: any
    };

    register() {
        this.form.register(this.props.name, "", this);
    }

    reset() {
        this.set_value("");
        if (this.pm) {
            this.pm.setDoc(this._from_markdown(""));
        }
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
                    doc: this._from_markdown(this.value),
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

    /**
     * Return a JSON serializable form of this value
     * @returns {string}
     */
    toJS() {
        return this.markdown();
    }

    /**
     * Return markdown representation of text
     * @returns {string}
     */
    markdown() {
        if (!this.pm) {
            return "";
        }

        return defaultMarkdownSerializer.serialize(this.pm.doc);// return markdown text
    }

    /**
     * Helper: Return a ProseMirror schema from this markdown text
     * @private
     * @param content
     */
    _from_markdown(content) {
        return defaultMarkdownParser.parse(content); // return a schema ( prosemirror.Schema )
    }

    /**
     * Render the Editor
     */
    render() {
        return (
            <div>
                <label>{this.label}</label>
                <Spacer/>
                <div ref="editor"></div>
                <FormErrors errors={this.errors}/>
            </div>
        )
    }
}
