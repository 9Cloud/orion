import React from "react";
import {View} from "tide/components";
import {Button, ProgressIcon} from "orion/ui/helpers";

export class SubmitButton extends View {
    static contextTypes = {
        form: React.PropTypes.object
    };
    
    /**
     * Return the form element controlling the button
     * @returns {Form}
     */
    get form() {
        return this.context.form;
    }
    
    /**
     * Return true if we are processing the form
     * @returns {boolean}
     */
    get processing() {
        return this.form.processing;
    }
    
    render() {
        return (
          <Button className="l-btn--submit" onClick={this.form.handle_submit}>
              <div className="l-btn--submit-content">
                  {
                      this.processing
                        ? <div className="l-btn--submit-icon"><ProgressIcon /></div>
                        : ""
                  }
                  <div className="l-btn--submit-text">{this.props.children ? this.props.children : "Submit" }</div>
              </div>
          </Button>
        )
    }
}

export class EditorSubmitButton extends SubmitButton {
    /**
     * Pressing the enter key will submit the form
     * @param {React.SyntheticEvent} event
     */
    handle_key_press(event) {
        if ( event.key == "Enter" ) {
            this.form.handle_submit(event);
        }
    }
    
    render() {
        return (
          <Button className="editor--submit-button l-btn--submit" onClick={this.form.handle_submit}>
              <div className="l-btn--submit-content">
                  {
                      this.processing
                        ? <div className="l-btn--submit-icon"><ProgressIcon /></div>
                        : ""
                  }
                  <div tabIndex="0" className="l-btn--submit-text" onKeyPress={this.handle_key_press}>Submit</div>
              </div>
          </Button>
        )
    }
}