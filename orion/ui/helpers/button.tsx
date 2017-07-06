import * as React from "react";
import * as PropTypes from 'prop-types';
import * as classNames from "classnames";
import {Div} from "./div";
import {Icon} from "./misc";
import {View, ITideContext} from "tide";
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

export class Button extends View {
    static contextTypes = {
        buttonGroupEnabled: PropTypes.bool,
        ...View.contextTypes
    };

    static propTypes = {
        enabled  : PropTypes.bool,
        size     : PropTypes.oneOf(["small", "medium", "large"]),
        color    : PropTypes.oneOf(["normal", "secondary", "ghost"]),
        icon     : PropTypes.string,
        className: PropTypes.string,
        inline: PropTypes.bool,
        center: PropTypes.bool,
        float: PropTypes.string,
        hidden: PropTypes.bool,
        clear: PropTypes.bool
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

    context: ITideContext & {
        buttonGroupEnabled: boolean
    };

    props: {
        color?: string,
        icon? :string,
        iconcolor? : string,
        enabled?: boolean,
        children: React.ReactNode,
        className? : string,
        [index: string] : any
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
    static childContextTypes = {
        buttonGroupEnabled: PropTypes.bool,
        ...View.contextTypes
    };

    static propTypes = {
        enabled: PropTypes.bool
    };

    context: ITideContext & {
        buttonGroupEnabled: boolean,
    };

    props: {
        enabled?: boolean,
        children: React.ReactNode,
    };

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