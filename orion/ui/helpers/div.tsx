import * as React from "react"; import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import {View} from "tide";

/*
 Helpers
 ------

 // Basic div that knows about how to handle our props

 <Div center />

 .l-center-txt : center text elements
 .l-center: center non text elements
 .l-float-left
 .l-float-right
 .l-clear
 .l-inline
 .l-hidden
 */

//
export class Div extends View {
    static propTypes = {
        inline: PropTypes.bool,
        center: PropTypes.bool,
        float: PropTypes.string,
        hidden: PropTypes.bool,
        clear: PropTypes.bool
    };

    static defaultProps = {
        inline: false,
        centerText: false,
        float: 'none',
        hidden: false,
        clear: false
    };


    props: {
        clearfix?: boolean,
        children?: React.ReactNode,
        centerText?: boolean,
        className?: string,
        inline?: boolean,
        center?: boolean,
        float?: string,
        hidden?: boolean,
        clear?: boolean,
        // todo: convert any to a match for anything going on a ReactNode
        [index: string] : any,
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
        let {className, center, hidden, float, clear, clearfix, centerText, children, inline, ...other} = this.props;
        return <div className={Div.computeClass(this.props)} {...other}>{this.props.children}</div>;
    }
}