import React, {PropTypes} from "react";
import classNames from "classnames/bind";

/*
 Helpers
 ------

 // Basic div that knows about how to handle our props

 <Div center />

 .l-center
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
        float : React.PropTypes.string,
        hidden: React.PropTypes.bool,
        clear : React.PropTypes.bool
    };

    static defaultProps = {
        inline    : false,
        centerText: false,
        float     : 'none',
        hidden    : false,
        clear     : false
    };

    static computeClass(props) {
        let divClass = classNames({
            'l-inline'     : props.inline,
            'l-float-left' : props.float == 'left',
            'l-float-right': props.float == 'right',
            'l-hidden'     : props.hidden,

            'l-clear'   : props.clear,
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
        bold  : React.PropTypes.bool,
        subtle: React.PropTypes.bool,
        small : React.PropTypes.bool,
        ...Div.propTypes
    };

    static defaultProps = {
        bold  : false,
        subtle: false,
        small : false,
        inline: true
    };

    render() {
        let props   = this.props;
        let classes = classNames({
            'l-btn'          : props.bold,
            'l-btn-secondary': !(props.bold || props.subtle),
            'l-btn-ghost'    : props.subtle,

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
export const Icon = (props) => <span className={`l-col-gut-sm icon-${props.type}`}/>;

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
export const Error = (props) => <Div className="l-error" {...props}>{props.children}</Div>;

// Error inline to forms / text
export const ErrorText = (props) => <Div className="l-error-txt " {...props}>{props.children}</Div>;

// Blank State
export const Blank = (props) => <Div className="blank_state" {...props}>{props.children}</Div>;

// Notice
export const Notice = (props) => <Div className="notice" {...props}>{props.children}</Div>;


/** Conditionals **/

// Only execute passed in function if value == true
/*
  E.g.
  on_true(true, () => <span>Accepted True</span>)
*/
export const on_true = (value, ret_on_true) => {
    if (value === true) {
        return ret_on_true();
    }
    else {
        return false;
    }
};

// Execute passed in function depending on if value is true/false
/*
 E.g.

 cond(value, {
   on_true: () => <span>Cond True</span>,
   on_false: () => <span>Cond False</span>
   })
*/

export const cond = (value, conditions) => {
    if (value === true) {
        return conditions['on_true']();
    } else {
        return conditions['on_false']();
    }
};
