/*
 Display a list of editable tags. If fetch_suggestions is given, it will also show a suggester block.

 Accepts tags as an array in the format of:
 [
 {key: ___, value: ___ }
 ]


 Accepts fetch_suggestions.
 This function must return a promise that resolves to an array of suggested tags in the format:
 [
 {key: ___, value: ___ }
 ]

 Focus

 - kept when you mouse over tab, or type in input, or focus into input


If props.fetch_suggestions is not given, then the suggester won't be shown.
If props.fetch_suggestions is given, then it will be used to suggest tags to the user

 */
import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observable, computed, action, map, autorunAsync, reaction} from "mobx";
import * as mobxReact from "mobx-react";
import Promise from "bluebird";
import {FormItem} from "orion/ui/forms";
import {Div, Spacer, ErrorState, Icon} from "orion/ui/helpers";
import classNames from "classnames/bind";
import {TagList} from './tag_list';
import {Suggester} from "./suggester";

export class TagListEditable extends FormItem {
    @observable tag_string = "";
    @observable focus = true;

    static propTypes = {
        add_tags: React.PropTypes.func.isRequired,
        remove_tag: React.PropTypes.func.isRequired,

        render_tag: React.PropTypes.func,
        fetch_suggestions: React.PropTypes.func,
        min_suggestion_length: React.PropTypes.number,
        delimeter: React.PropTypes.string
    };

    static defaultProps = {
        type: "tag",
        min_suggestion_length: 3,
        delimeter: ",",
        render_tag: null
    };


    register() {
        this.form.register(this.props.name, []);
    }

    @computed get tags() {
        return this.value;
    }

    // Data
    @action add_tags(tag_string) {
        this.props.add_tags(this.split(tag_string))
    }


    // Helper
    split(tag_string) {
        return tag_string.split(this.props.delimeter).map((text) => text.trim()).filter((text) => text !== "")
    }

    // UI Callbacks
    @action on_text_change(event) {
        this.take_focus();
        this.clear_errors();
        this.tag_string = event.target.value;
    }

    @action on_suggestion_clicked(id, tag) {
        this.tag_string = "";
        this.add_tags(tag.text);
        this.refs.input.focus();
    }

    @action on_paste(event) {
        // If the tag string is empty add the pasted information as a tag
        // Otherwise, add it to the tag string
        event.preventDefault();
        this.clear_errors();

        const clipboardData = event.clipboardData || window.clipboardData;
        const clipboard_string = clipboardData.getData('text');
        if (this.tag_string.trim() == "") {
            this.add_tags(clipboard_string);
        }
        else {
            this.tag_string += clipboard_string;
        }
    }

    @action submit(event) {
        // Pressing enter or tab will add a tag
        if (event.key == 'Enter' || event.key == 'Tab') {
            event.preventDefault();
            event.stopPropagation();

            let tag_string = this.tag_string; // Dereference tag string since it is an observable
            this.add_tags(tag_string);
            this.tag_string = "";
        }

        // If the tag string is empty, backspace will remove the last added tag
        if (event.key == 'Backspace') {
            if (this.tag_string == "") {
                event.preventDefault();
                event.stopPropagation();

                let last_tag = this.tags[this.tags.length - 1];
                this.props.remove_tag(last_tag);
            }
        }
    }

    @action lose_focus() {
        this.focus = false;
    }

    @action take_focus() {
        this.focus = true;
    }

    render() {
        let suggester_visible = this.props.fetch_suggestions && this.focus;

        return (
            <div>
                <label>{this.label}</label>
                <Spacer />

                <div className="l-float-left">
                    <TagList tags={this.tags}
                             editable={true}
                             remove_tag={this.props.remove_tag}
                             render_tag={this.props.render_tag}
                    />
                </div>

                <div className="l-col-4 l-float-right"
                     onMouseLeave={this.lose_focus}
                     onMouseEnter={this.take_focus}>

                    <input className="l-input l-fullwidth" type="text"
                           placeholder={this.props.placeholder}
                           value={this.tag_string}
                           onChange={this.on_text_change}
                           onKeyDown={this.submit}
                           onPaste={this.on_paste}
                           onFocus={this.take_focus}
                           ref="input"
                    />

                    <Div hidden={!suggester_visible}>
                        <Suggester text={this.tag_string}
                                   on_change={this.on_suggestion_clicked}
                                   fetch={this.props.fetch_suggestions}/>
                    </Div>
                </div>

                <Spacer />
                {this.errors.map((err, i) => <ErrorState key={i}>{err.message}</ErrorState>)}
            </div>
        )
    }
}