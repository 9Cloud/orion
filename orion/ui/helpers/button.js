import React, {PropTypes} from "react";
import classNames from "classnames/bind";
import {Link} from 'react-router';
import {slugify} from 'orion/utils/string';
import {Div} from './div';

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
        enabled: React.PropTypes.bool,
        size: React.PropTypes.oneOf(["small", "medium", "large"]),
        type: React.PropTypes.oneOf(["normal", "secondary", "ghost"]),
        ...Div.propTypes
    };

    static defaultProps = {
        inline: true,
        enabled: true,
        size: "medium",
        type: "normal"
    };

    render() {
        let props = this.props;
        let classes = classNames({
            'l-btn': props.type == "normal",
            'l-btn-secondary': props.type == "secondary",
            'l-btn-ghost': props.type == "ghost",

            "l-btn--small": props.size == "small",
            "l-btn--medium": props.size == "medium",
            "l-btn--large": props.size == "large",

            "l-btn-disabled": props.enabled == false,
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