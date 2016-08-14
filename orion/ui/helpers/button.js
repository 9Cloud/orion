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