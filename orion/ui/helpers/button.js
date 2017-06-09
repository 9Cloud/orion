import React from "react"; import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import {Div} from "./div";
import {Icon} from "./misc";
import {View} from "tide/components";
/*

 Usage

 <Button>Click Me!</Button>

 <Button color="default" size="small">Click Me!</Button>

 <Checkbox name="hello" options={['one', 'two', 'three'] } />



 <Button small>Click Me!</Button>
 <Button small bold>Click Me!</Button>
 <Button small subtle>Click Me!</Button>
 <Button small>Click Me!</Button>
 <Button inline={false}> I stand alone </Button>


 Buttons can also be nested within a button group to pass along enabled status to all of the.
 Then if there is no prop for enabled, a button will be enabled based on the context.

 <ButtonGroup enabled={false}>
    <Button>Click me</Button>
 </Button>

 */

const buttonContext = {
    buttonGroupEnabled: PropTypes.bool
};


export class Button extends View {
    static contextTypes = buttonContext;

    static propTypes = {
        enabled  : PropTypes.bool,
        size     : PropTypes.oneOf(["small", "medium", "large"]),
        color    : PropTypes.oneOf(["normal", "secondary", "ghost"]),
        icon     : PropTypes.string,
        className: PropTypes.string,
        ...Div.propTypes
    };

    static defaultProps = {
        inline   : true,   // Passed down to Div
        enabled  : undefined,
        icon     : '',
        size     : "small",
        type     : "normal",
        color     : "normal",
        className: ""
    };

    is_enabled() {
        let propsDefined   = this.props.enabled !== undefined;
        let contextDefined = this.context.buttonGroupEnabled !== undefined;

        if ( propsDefined ) {
            return this.props.enabled;
        }
        if ( contextDefined ) {
            return this.context.buttonGroupEnabled;
        }

        return true;
    }


    render() {
        // todo: renable type into color
        let props = this.props;
        let {className, color, size, enabled, children, icon, ...others} = this.props;

        let classes = classNames([
            className, {
                'l-btn'          : color == "normal",
                'l-btn-secondary': color == "secondary",
                'l-btn-ghost'    : color == "ghost",
                "l-btn--small"   : size == "small",
                "l-btn--medium"  : size == "medium",
                "l-btn--large"   : size == "large",
                "l-btn-disabled" : this.is_enabled() == false,
            }
        ]);
        let extra = props.icon ? <Icon type={props.icon} color={props.iconcolor}/> : null;

        return (
          <Div className={classes} {...others}>{extra}{children}</Div>
        )
    }
}

export class ButtonGroup extends View {
    static childContextTypes = buttonContext;

    static propTypes = {
        enabled: PropTypes.bool
    }

    getChildContext() {
        return {
            buttonGroupEnabled: this.props.enabled
        };
    }

    render(){
        return (
          <div className="l-button-group">
              {this.props.children}
          </div>
        )
    }
}