import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observable, computed, action, toJS as mobxToJS} from "mobx";
import classNames from "classnames/bind";
import shallowEqual from 'shallowequal';

class SubmitButton {
    render() {
        // Use bubbler
        // <input type="submit" onClick={this.trigger('submit')}></input>

        // <input type="submit" onClick={this.trigger('submit')}></input>
        return (
            <input type="submit" onClick={this.context.form.submit()}></input>
        )
    }
}
