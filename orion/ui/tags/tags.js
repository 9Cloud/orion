import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observable, computed, action, map, autorunAsync, reaction} from "mobx";
import {observer} from "mobx-react";
import Promise from "bluebird";
import {FormItem} from "orion/ui/forms/form_item";
import {Div, Spacer, ErrorText, Icon} from "orion/ui/helpers";
import classNames from "classnames/bind";
// UI


/*
 Tag types: default, blue, subtle

 <Tag type="blue" />

 Props
 - url
 - type
 - text

 */
const tag_class_name = (type) => {
    type = type ? type : 'default';
    return classNames({
        'l-tag': true,
        'l-tag--blue': type == 'blue',
        'l-tag--subtle': type == 'subtle'
    });
};

export const Tag = (props) => {
    let {tag, type, ...others} = props;
    return <div className={tag_class_name(type)} {...others}>{tag.text}</div>;
};

export const LinkedTag = (props) => {
    let {tag, type, ...others} = props;
    return <div className={tag_class_name(type)} {...others}><a href={tag.url}>{tag.text}</a></div>;
};


export class EditableTag extends Component{
    static defaultProps = {
        type: "blue"
    };

    onClick(e) {
        e.preventDefault();
        this.props.remove_tag(this.props.tag);
    };

    render(){
        let {tag, type, ...others} = this.props;

        return <div className={tag_class_name(type)} key={tag.text} onClick={this.onClick}>
            {tag.text}
            <Icon type="remove"/>
        </div>
    }
}