import {View} from "tide/components";
import React, {PropTypes} from "react";

export class InputDropdown extends View {
    static propTypes = {
        children: React.PropTypes.node
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