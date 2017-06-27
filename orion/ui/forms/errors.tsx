import {View} from "tide";
import * as React from "react";
import * as mobxReact from "mobx-react";
import * as mobx from "mobx";
import {ErrorState} from "orion/ui/helpers";

export class FormErrors extends View {
    /*
     Expected format:

     {"sender": [{"message": "Enter a valid email address.", "code": "invalid"}],
     "subject": [{"message": "This field is required.", "code": "required"}]}
     */
    // static propTypes = {
    //     errors: mobxReact.PropTypes.arrayOrObservableArray
    // };

    props: {
        errors:  mobx.IObservableArray<string> | Array<string>
    };

    render() {
        return (
            <div>
                {this.props.errors.map((error, i) => <ErrorState key={i}>{error}</ErrorState>)}
            </div>
        )
    }
}