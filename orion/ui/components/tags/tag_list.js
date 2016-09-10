import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observable, computed, action, map, autorunAsync, reaction} from "mobx";
import * as mobxReact from "mobx-react";
import {FormItem} from "orion/ui/forms";
import {Div, Spacer, Icon} from "orion/ui/helpers";
import classNames from "classnames/bind";
import {Tag, LinkedTag, EditableTag} from "./items";


/*
 Renders a list of tags
 Expects prop 'tags' to contain a list of tags in the following shape:
 {'url': string, 'text': string}

 if editable, expects to be provided an onRemove prop that actually handles removing the tag from the list.
 */
export class TagList extends Component {
    static propTypes = {
        tags: mobxReact.propTypes.arrayOrObservableArray.isRequired,

        render_tag: React.PropTypes.func,
        remove_tag: React.PropTypes.func,
        editable: React.PropTypes.bool,
        linked: React.PropTypes.bool
    };

    static defaultProps = {
        tags: [{text: "hello wordld"}],
        editable: false,
        linked: false
    };

    render_tag(tag) {
        let {linked, editable} = this.props;

        // if (this.props.render_tag) {
        //     return this.props.render_tag(tag);
        // }

        if (linked) {
            return <LinkedTag tag={tag}/>
        }
        if (editable) {
            return <EditableTag tag={tag} remove_tag={this.props.remove_tag}/>
        }
        return <Tag tag={tag}/>
    }

    render() {
        return (
            <ul>
                {this.props.tags.map((t, i) => <li key={i} className="l-inline">{this.render_tag(t)}</li> )}
            </ul>
        )
    }
}
