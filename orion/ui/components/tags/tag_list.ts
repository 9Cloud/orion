import {Presenter} from "tide/components";
import React from 'react';
import PropTypes from 'prop-types';
import * as mobxReact from "mobx-react";
import {Tag, LinkedTag, EditableTag} from "./items";


/*
 Renders a list of tags
 Expects prop 'tags' to contain a list of tags in the following shape:
 {'url': string, 'text': string}

 if editable, expects to be provided an onRemove prop that actually handles removing the tag from the list.
 */
export class TagList extends Presenter {
    static propTypes = {
        tags: mobxReact.PropTypes.arrayOrObservableArray.isRequired,
        render_tag: PropTypes.func,
        remove_tag: PropTypes.func,
        editable: PropTypes.bool,
        linked: PropTypes.bool
    };

    static defaultProps = {
        tags: [{text: "hello world"}],
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
                {this.props.tags.map((t, i) => <li key={i} className="l-inline l-row-gut-half">{this.render_tag(t)}</li> )}
            </ul>
        )
    }
}
