import React, {PropTypes} from "react";
import classNames from "classnames/bind";
import {Link} from 'react-router';
import {slugify} from 'orion/utils/string';

/*
 Helpers
 ------

 // Basic div that knows about how to handle our props

 <Div center />

 .l-center-txt : center text elements
 .l-center: center non text eleemnts
 .l-float-left
 .l-float-right
 .l-clear
 .l-inline
 .l-hidden
 */

//
export class Div extends React.Component {
    static propTypes = {
        inline: React.PropTypes.bool,
        center: React.PropTypes.bool,
        float: React.PropTypes.string,
        hidden: React.PropTypes.bool,
        clear: React.PropTypes.bool
    };

    static defaultProps = {
        inline: false,
        centerText: false,
        float: 'none',
        hidden: false,
        clear: false
    };

    static computeClass(props) {
        let divClass = classNames({
            'l-inline': props.inline,
            'l-float-left': props.float == 'left',
            'l-float-right': props.float == 'right',
            'l-hidden': props.hidden,

            'l-clear': props.clear,
            'l-clearfix': props.clearfix,

            'l-center-txt': props.centerText
        });

        if (props.className) {
            return props.className + ' ' + divClass;
        }
        else {
            return divClass;
        }
    };

    render() {
        let {className, ...other} = this.props;
        return <div className={Div.computeClass(this.props)} {...other}>{this.props.children}</div>;
    }
}

/*

 Usage

 <Button>Click Me!</Button>

 <Button type="default" size="small">Click Me!</Button>


 <Checkbox name="hello" options={['one', 'two', 'three'] } />



 <Button small>Click Me!</Button>
 <Button small bold>Click Me!</Button>
 <Button small subtle>Click Me!</Button>
 <Button small>Click Me!</Button>
 <Button inline={false}> I stand alone </Button>

 */
export class Button extends React.Component {
    static propTypes = {
        bold: React.PropTypes.bool,
        subtle: React.PropTypes.bool,
        small: React.PropTypes.bool,
        ...Div.propTypes
    };

    static defaultProps = {
        bold: false,
        subtle: false,
        small: false,
        inline: true
    };

    render() {
        let props = this.props;
        let classes = classNames({
            'l-btn': props.bold,
            'l-btn-secondary': !(props.bold || props.subtle),
            'l-btn-ghost': props.subtle,

            // todo: large / medium?
            "l-btn--small": props.small
        });

        let extra;

        if (props.icon) {
            extra = <Icon type={props.icon}/>
        }

        return (
            <Div className={classes} {...this.props}>{extra}{this.props.children}</Div>
        )
    }
}

// Loading Icon
export const LoadingDiv = (props) => {
    let text = props.text || "Loading ...";
    return (
        <div centerText><span className="l-spinner"></span>
            <div>{text}</div>
        </div>
    )
};

export const LoadingDivLarge = (props) => {
    let text = props.text || "Loading ...";
    return (
        <Div centerText className="l-row-gut-2" style={{"fontSize": '3rem', "marginTop": '2em'}}>
            <span style={{width: '100px', height: '100px'}} className="l-spinner"></span>
            <div>{text}</div>
        </Div>);
};

// Regular Icon
export const Icon = (props) => {
    let {onClick, ...others} = props;

    if (props.onClick) {
        return <a href="" onClick={onClick}><span className={`l-col-gut-sm icon-${props.type}`} {...others}/></a>
    } else {
        return <span className={`l-col-gut-sm icon-${props.type}`} {...others}/>
    }
};

// Horizontal Spacer
export const Spacer = (props) => <div className={`l-clear l-row-gut-${props.size ? props.size : 'half'}`}></div>;


/// Pargraphs///

// Markdown paragarph
export const MarkDown = (props) => (
    <div dangerouslySetInnerHTML={{__html: props.children} }></div>
);

// Successful action
export const Success = (props) => <Div className="success" {...props}>{props.children}</Div>;

// Action resulted in error
export const ErrorText = (props) => {
    let withBackground = props.withBackground == true;

    if (withBackground) {
        return <Div className="l-error" {...props}>{props.children}</Div>;
    }
    else {
        return <Div className="l-error-txt " {...props}>{props.children}</Div>
    }

};

// Blank State
export const Blank = (props) => <Div className="l-blank-state" {...props}>{props.children}</Div>;

// Notice
export const Notice = (props) => <Div className="l-notice" {...props}>{props.children}</Div>;


export const Section = (props) => {
    let slug = props.slug || slugify(props.title);

    return (
        <div className="section-container l-clear l-row-gut-4">
            <h1 className="section-title"><a name={slug}>{props.title}</a></h1>
            {props.children}
        </div>
    );
};

export const SubSection = (props) => {
    return (
        <div className="section-container l-clear">
            <h3>{props.title}</h3>
            {props.children}
        </div>
    );
};


export const VMenuLink = ({to, index, hash, children})=> {
    if (to) {
        return <Link to={to} className="l-vmenu-item" activeClassName="l-vmenu-item--active"
                     onlyActiveOnIndex={false}>{children}</Link>;
    }
    if (index) {
        return <Link to="/" className="l-vmenu-item l-vmenu-item--primary" activeClassName="l-vmenu-item--active"
                     onlyActiveOnIndex={true}>{children}</Link>;
    }

    let hash_matches = location.hash == hash;
    let index_hash = hash == "#" && location.hash == "";
    let active_class = (hash_matches || index_hash) ? "l-vmenu-item--active" : "";

    return (
        <a className={`l-vmenu-item ${active_class}`}
           href={hash}>
            {children}
        </a>
    )
};