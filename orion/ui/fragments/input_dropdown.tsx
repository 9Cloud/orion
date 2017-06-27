import {View} from "tide";
import * as React from "react";
import PropTypes from 'prop-types';

export class InputDropdown extends View {
    static propTypes = {
        children: PropTypes.node
    };

    render() {
        return (
            <div className="l-select-wrapper l-fullwidth">
                <div className="l-select-dd l-fullwidth">
                    <ul>
                        {this.props.children}
                    </ul>
                </div>
            </div>
        )
    }
}