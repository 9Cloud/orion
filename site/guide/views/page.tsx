import * as React from "react";
import {View} from "tide";

export class StyleGuidePage extends View {
    render() {
        return (
            <div className="l-col-push-1 l-col-lg-10">
                <div className="l-col-lg-2 l-sidebar sticky">
                    {this.sidebar()}
                </div>

                <div className="l-col-lg-10 l-col-gut-lg">
                    {this.main()}
                </div>
            </div>

        )
    }
}