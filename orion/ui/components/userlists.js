import React, {PropTypes} from "react";
import classNames from "classnames/bind";
import {Component} from "tide/components";
import {observable} from "mobx";

export class FlatUserList extends Component {
    @observable show_info = false;

    toggle_info() {
        this.show_info = !this.show_info;
    }

    /* Todo Tooltip */
    render_single(user) {
        return (
            <li key={user}
                onMouseEnter={this.toggle_info} onMouseLeave={this.toggle_info}
                className="l-inline l-col-gut-sm">
                <a href={`/users/${user}`}>
                    {user}
                </a>
            </li>
        )
    }

    render() {
        let classes = classNames({
            'l-inline': this.props.inline
        });

        if (this.props.users.length == 0) {
            return <ul></ul>
        }

        return (
            <ul className={classes}>
                {this.props.users.map((user) => this.render_single(user))}
            </ul>
        )
    }
}