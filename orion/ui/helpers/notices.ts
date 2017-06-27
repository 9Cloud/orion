import {View} from "tide/components";
import React from "react";
import {Div} from "./div";

class VisibleNotice extends View {
    static defaultProps = {
        boxed: true,
        style: {},
        className: ""
    };

    render(){
        let {boxed, style, children, className,...others} = this.props;
        let classes = [];

        classes.push("l-alert");
        classes.push(className);
        classes.push(style.color);
        classes.push(style.extra);

        // Background
        if(boxed){
            classes.push("l-box-shadow");
            classes.push(style.background);
        }

        return <Div className={classes.join(" ")} {...others}>{children}</Div>
    }
}

// Primary
export const Notice = (props) => <VisibleNotice {...props} style={{background: "l-bgcolor--primary--dark"}} />;

// Secondary
export const Blurb = (props) => <VisibleNotice {...props} style={{background: "l-bgcolor--secondary--light"}}/>;
// Success
export const Success = (props) => <VisibleNotice {...props} style={{extra: "l-success", background: "l-bgcolor--ui-faded-green"}} />;
// Info
export const Info = (props) => <VisibleNotice {...props} style={{extra: "l-info", background: "l-bgcolor--ui-faded-blue", color: "l-secondary--lighter"}} />;
// Warning
export const Warning = (props) => <VisibleNotice {...props} style={{extra: "l-notice", background: "l-bgcolor--secondary--light", color: "l-ui-yellow"}} />;
// Danger
export const Danger = (props) => <VisibleNotice {...props} style={{extra: "l-danger", background: "l-bgcolor--primary--dark", color: "l-ui-yellow"}} />;
export const Failure = Danger;
// Error
export const ErrorState = (props) => <VisibleNotice {...props} style={{extra: "l-error", background: "l-bgcolor--ui-faded-yellow", color: "l-ui-yellow"}} />;
export const Error = ErrorState;
export const ErrorNotice = ErrorState;
export const ErrorText = ErrorState;
// Blank
export const BlankState = (props) => <VisibleNotice {...props} style={{extra: "l-blank-state"}} />;
export const Blank = BlankState;

