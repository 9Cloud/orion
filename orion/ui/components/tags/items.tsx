import {View} from "tide";
import * as React from "react";
import {Icon} from "orion/ui/helpers";
import classNames from "classnames/bind";

/*
 Tag types: default, subtle

 <Tag type="subtle" />

 Props
 - url
 - type
 - text

 */
const tag_class_name = (type) => {
    type = type ? type : 'default';
    return classNames({
        'l-tag': true,
        'l-tag--subtle': type == 'subtle'
    });
};

export const Tag = (props) => {
    let {tag, type, ...others} = props;
    return <div className={tag_class_name(type)} {...others}>{tag.text}</div>;
};

export const LinkedTag = (props) => {
    let {tag, type, ...others} = props;
    return <a className={tag_class_name(type)} href={tag.url} {...others}>{tag.text}</a>;
};


export class EditableTag extends View{
    static defaultProps = {
        type: "subtle"
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