import React, {PropTypes} from "react";
import classNames from "classnames/bind";
import {Component} from "tide/components";
import {observable} from "mobx";
import {TagList} from "./tags";
import {Avatar} from './avatars';

/*
 Usage:
 <RichCard avatar={null} text={thread.last_message} subText={participants} tags={tags} />
 */
export const RichCard = (props) => {
    return (
        <Card>
            <Avatar image={props.avatar}/>
            <CardText>{props.text}</CardText>
            <CardSubText>{props.subtext}</CardSubText>
            <TagList tags={props.tags}/>
        </Card>
    )
};

export const CardText = (props) => <div className="l-card-description l-no-margin">{props.children}</div>;
export const CardSubText = (props) => <div className="l-txt--quiet">{props.children}</div>;

export const Card = (props) => {
    return (
        <div className="l-card-wrapper">
            <div className="l-card-item">
                {props.children}
            </div>
        </div>
    )
};
