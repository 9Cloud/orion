import React from "react";
import {action, observable, computed} from "mobx";
import {Form} from "orion/ui/forms";

/**
 * It will call submit() with a value of itself.
 * That way you can write your submit in an enclosing container like so:
 *
 * class FormExample extends Presenter{
 *
 *  handle_submit(form){
 *      fetch("/post_form_here_url/", form.toJS()))
 *      .then( _ => this.tide.router.go("/home/") )
 *  }
 *  
 *  render(){
 *      return(
 *          <AjaxForm submit={this.handle_submit} />
 *      )
 *  }
 * }
 */
export class AjaxForm extends Form {
    @observable _processing = false;

    /**
     * Logic to deal with the form submission
     * @param {React.SyntheticEvent} event
     * @returns {Promise|null}
     */
    @action handle_submit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.clear_errors();

        if ( !this.enabled ) {
            let msg = "[Tide Form] Blocked: Already processing or disabled!";
            console.log(msg);
            return Promise.reject(msg);
        }

        this._processing = true;
        return this.props.submit(this).then(this.handle_ok).catch(this.handle_fail);
    }

    /**
     * Returns true if this form is being processed
     * @returns {boolean}
     */
    @computed get processing() {
        return this._processing;
    }

    /**
     * Handle successful response
     * @param response
     * @return {*}
     */
    @action handle_ok(response) {
        console.log("[Tide Form] Success >> ", response);
        this.post_submission();
        return response;
    }

    /**
     * Handle failed response from a Query
     * @param {QueryError} error
     * @return {*}
     */
    @action handle_fail(error) {
        console.error(`[Tide Form] Failure: ${error.message} >>`, error);
        let error_container = error.context.errorResponse;
        this.decode_errors(error_container);
        this.post_submission();
    }

    /**
     * Cleanup after form submission has failed/succeeded
     */
    @action post_submission() {
        this._processing = false;
    }

    /**
     * Decode errors from the Django format
     * @param error_container
     */
    decode_errors(error_container) {
        if ( !error_container ) {
            this.set_errors("__all__", ["An unknown error has occurred"]);
            return;
        }

        for (let error of error_container.errors) {
            this.set_errors(error.name,
              error.details.map(m => m.message));
        }
    }
}