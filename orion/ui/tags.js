import React, {PropTypes} from 'react';
import classNames from 'classnames/bind';

/*
Tag types: default, blue, subtle

<Tag type="blue" />

Props
 - url
 - type
 - text

 */
export const Tag = (props) => {
    let {type, ...others} = props;
    type = type ? type : 'default';
    
    let classes = classNames({
        'l-tag'        : true,
        'l-tag--blue'  : type == 'blue',
        'l-tag--subtle': type == 'subtle'
    });
    
    if (props.url) {
        return <a className={classes} {...others} href={props.url}>{props.children}</a>;
    } else {
        return <span className={classes} {...others}>{props.children}</span>;
    }
};

/*

Expects prop 'tags' to contain a list of tags in the following shape:
{'url': string, 'text': string}
 */
export const TagList = (props) => {
    let tags = props.tags ? props.tags : [];
    return (<ul>{tags.map((t) => <Tag url={t.url}>{t.text}</Tag>)}</ul>)
};
