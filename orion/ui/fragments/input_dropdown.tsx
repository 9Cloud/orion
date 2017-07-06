import {View} from "tide";
import * as React from "react";

export class InputDropdown extends View {
    props: {
        children: React.ReactNode
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