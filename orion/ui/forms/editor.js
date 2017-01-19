import React, {PropTypes} from "react";
import {observable, computed, action, when, extendObservable} from 'mobx';
import {Spacer} from 'orion/ui/helpers';
import {Component} from "tide/components";

import {ProseMirror} from "prosemirror/dist/edit";
import {elt} from "prosemirror/dist/util/dom";
import {defaultMarkdownParser, defaultMarkdownSerializer} from "prosemirror/dist/markdown";
import {schema} from "prosemirror/dist/schema-basic";
import {exampleSetup} from "prosemirror/dist/example-setup";

import {FormItem} from './form_item';
import {FormErrors} from "./errors";

/**
 * @class
 * Display a text-editor for Markdown using ProseMirror
 */
export class MarkdownEditor extends FormItem {
    constructor(props) {
        super(props);
    }

    register() {
        this.form.register(this.props.name, "", this);
    }

    reset(){
        this.set_value("");
        if(this.pm){
            this.pm.setDoc(this._from_markdown(""));
        }
    }

    /**
     * @private
     */
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
     * Return markdown represenation of text
     * @returns {string}
     */
    markdown() {
        if (!this.pm){
            return "";
        }

        return defaultMarkdownSerializer.serialize(this.pm.doc);// return markdown text
    }

    /**
     * Helper: Return a ProseMirror schema from this markdown text
     * @private
     * @param content
     * @returns {prosemirror.Schema}
     */
    _from_markdown(content) {
        return defaultMarkdownParser.parse(content); // return a schema
    }

    /**
     * Render the Editor
     * @returns {XML}
     */
    render() {
        return (
          <div>
              <label>{this.label}</label>
              <Spacer />
              <div ref="editor"></div>
              <FormErrors errors={this.errors}/>
          </div>
        )
    }
}
