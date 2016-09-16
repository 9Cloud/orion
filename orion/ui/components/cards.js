import React, {PropTypes} from "react";
import classNames from "classnames/bind";
import {Component} from "tide/components";
import {observable} from "mobx";
import {TagList} from "./tags";
import {Avatar} from './avatars';
import {Link, IndexLink} from 'tide/router/link';

/*
 Usage:
 <RichCard avatar={null} text={thread.last_message} subText={participants} tags={tags} />
 */
export const RichCard = (props) => {
    return (
        <Card>
            <Avatar image={props.avatar}/>
            <CardText>{props.text}</CardText>
            <CardSubText>{props.subText}</CardSubText>
            <TagList tags={props.tags}/>
        </Card>
    )
};

export const CardText = (props) => <div className="l-no-margin">{props.children}</div>;
export const CardSubText = (props) => <div className="l-txt--quiet">{props.children}</div>;

export const Card = (props) => {
    return (
        <div className="l-card-wrapper l-clearfix">
            <div className="l-card-item">
                {props.children}
            </div>
        </div>
    )
};

export const CardAvatar = ({link_to, image, size}) => {
    return <Link to={link_to}>
        <Avatar image={image} size={size}/>
    </Link>
};