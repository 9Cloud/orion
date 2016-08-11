import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'tide/components';
import classNames from 'classnames/bind';
import {observable} from 'mobx';
import {Div, Button, Spacer} from 'orion/ui/helpers';

/** Modals
 *
 * Main Exports ModalConfirm / ModalNotice
 *
 * Modal, ModalBody, ModalButtonBar can be used to create custom modals. See implementation of one of the above components.

 * Notes: If your modal does something that causes its parent element to unmount, the modal will unmount with it.

 Possible Future Implementation.
 ------
 Stand Alone Modals:

 Modal.open("node_id", <ModalNotice> ..... </ModalNotice>)

 These can be rendered by creating a div with that node_id at the bottom of 'body', then we ReactDOM.render into that div
 This can handle case where modal actions will kill parent div.
 For example You have a form with lots of items, you can delete an item, and it'll remove the item from the list after modal confirmation.

 */
export class Modal extends React.Component {
    static propTypes = {
        title: React.PropTypes.string,
        on_close: React.PropTypes.func.isRequired,
        children: React.PropTypes.node.isRequired
    };

    constructor(props) {
        super(props);
        this.handleEscape = this.handleEscape.bind(this);
    }

    handleEscape(event) {
        // Pressing escape closes the window
        if (event.key == "Escape") {
            this.props.on_close();
        }
    }

    componentDidMount() {
        // Give the modal overlay focus; so we can get the escape key event from it
        ReactDOM.findDOMNode(this.refs.overlay).focus();
    }

    render() {
        return (
            <div className="l-modal-overlay" ref="overlay" tabIndex="1" onKeyPress={this.handleEscape}>
                <div className="l-modal-dialog-container l-align--abscenter">

                    <div className="l-modal-title-bar l-col-gut-md l-bgcolor--secondary--light">
                        <h3 className="l-modal-title">{this.props.title}</h3>
                        <span className="icon-remove l-modal-close-btn"
                              onClick={this.props.on_close}></span>
                    </div>

                    {this.props.children}

                    <Spacer/>
                </div>
            </div>
        )
    }
}

export const ModalBody = (props) => (
    <div className="l-modal-body">
        {props.children}
    </div>
);

export const ModalButtonBar = (props) => (
    <div className="l-col-gut-md l-modal-action-btns">
        {props.children}
    </div>
);

export class ModalNotice extends React.Component {
    static propTypes = {
        on_close: React.PropTypes.func.isRequired,
        children: React.PropTypes.node.isRequired
    };

    render() {
        let {children, ...others} = this.props;

        return (
            <Modal {...others}>
                <ModalBody>{children}</ModalBody>
                <ModalButtonBar>
                    <Button bold onClick={this.props.on_close}>Close</Button>
                </ModalButtonBar>
            </Modal>
        )
    }
}

export class ModalConfirm extends React.Component {
    static propTypes = {
        text: React.PropTypes.shape({
            confirm: React.PropTypes.string,
            cancel: React.PropTypes.string
        }),
        default_button: React.PropTypes.string,
        on_confirm: React.PropTypes.func.isRequired,
        on_cancel: React.PropTypes.func.isRequired
    };

    static defaultProps = {
        text: {
            confirm: 'Yes',
            cancel: 'No'
        },
        default_button: 'confirm'           // Determines position/color of buttons
    };

    render() {
        let {children, text, on_confirm, on_cancel, ...others} = this.props;
        let buttons;

        if (this.props.default_button == 'cancel') {
            buttons = (
                <ModalButtonBar>
                    <Button bold onClick={on_cancel}>{text.cancel}</Button>
                    <Button subtle onClick={on_confirm}>{text.confirm}</Button>
                </ModalButtonBar>
            )
        }
        else {
            buttons = (
                <ModalButtonBar>
                    <Button subtle onClick={on_cancel}>{text.cancel}</Button>
                    <Button bold onClick={on_confirm}>{text.confirm}</Button>
                </ModalButtonBar>
            )
        }


        return (
            <Modal {...others} on_close={on_cancel} >
                <ModalBody>{children}</ModalBody>
                {buttons}
            </Modal>
        )
    }
}
