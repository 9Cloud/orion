import {Component} from 'tide/components';
import React, {PropTypes} from "react";
import classNames from "classnames/bind";
import {Link} from 'react-router';
import {slugify} from 'orion/utils/string';
import {Div} from './div';

// Successful action


// Action resulted in error
export const ErrorText = (props) => {
    let withBackground = props.withBackground == true;

    if (withBackground) {
        return <Div className="l-error"}} />;
    }
    else {
        return <Div className="l-error-txt " {...props}>{props.children}</Div>
    }

};

//return <Div className="l-error"}} />;
//return <Div className="l-error-txt " {...props}>{props.children}</Div>
//export const Success = (props) => <Div className="success"}} />;
// export const Warning = (props) => <Div className="l-notice"}} />;
//export const BlankState = (props) => <Div className="l-blank-state"}} />;


class VisibleNotice extends Component {
    static defaultProps = {
        textual: false
    };

    render(){
        let {textual, style, children,...others} = this.props;
        let classes = [];

        classes.push("l-alert");
        classes.push(style.color);
        classes.push(style.extra);

        // Background
        if(!textual){
            classes.push("l-box-shadow");
            classes.push(style.background);
        }

        return <Div className="l-alert l-bgcolor--primary--dark" {...others}>{children}</Div>
    }
}

// Primary
export const Notice = (props) => <VisibleNotice {...props} style={{color: "l-bgcolor--primary--dark"}} />;

// Secondary
export const Blurb = (props) => <VisibleNotice {...props} style={{background: "l-bgcolor--secondary--light"}}/>;
// Success
export const Success = (props) => <VisibleNotice {...props} stlye={{extra: "l-success", background: "l-bgcolor--ui-faded-green"}} />;
// Info
export const Info = (props) => <VisibleNotice {...props} stlye={{extra: "l-info", background: "l-bgcolor--ui-faded-blue", color: "l-secondary--lighter"}} />;
// Warning
export const Warning = (props) => <VisibleNotice {...props} stlye={{extra: "l-notice", color: "l-ui-yellow"}} />;
// Danger
export const Danger = (props) => <VisibleNotice {...props} stlye={{extra: "l-danger", background: "l-bgcolor--primary--dark", color: "l-secondary--lighter"}} />;
// Error
export const ErrorState = (props) => <VisibleNotice {...props} stlye={{extra: "l-error", background: "l-bgcolor--ui-faded-yellow"}} />;
export const Error = ErrorState;
export const ErrorNotice = ErrorState;
// Blank
export const BlankState = (props) => <VisibleNotice {...props} stlye={{extra: "l-blank-state"}} />;
export const Blank = BlankState;

