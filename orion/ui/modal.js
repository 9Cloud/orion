import React, {PropTypes} from 'react';
import {Component} from 'tide/components';
import classNames from 'classnames/bind';
import {observable} from 'mobx';

export class Modal extends React.Component {
  constructor(props){
    super(props);
    this.handleEscape = this.handleEscape.bind(this);
  }

  handleEscape(event){
    // Pressing escape closes the window
    if(event.key = "Escape"){
       this.props.onClose();
    }
  }

  render() {
        return (
          <div className="l-modal" ref="overlay" onKeyDown={this.handleEscape}>
              <div className="l-modal-dialog-container">
                  <div className="l-modal-title-bar l-col-gut-md l-bgcolor--secondary--light">
                      <h3 className="l-modal-title">{this.props.title}</h3>
                      <span className="icon-remove l-modal-close-btn l-close-modal"  onClick={this.props.onClose}></span>
                  </div>
                  
                  {this.props.children}
                  
                  <Div clear></Div>
              </div>
          </div>
        )
    }

  componentDidMount(){
  // Give the modal overlay focus; so we can get the escape key event from it
  ReactDOM.findDOMNode(this.refs.overlay).focus();
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
    render() {
        let {children, ...others} = this.props;
        
        return (
          <Modal {...others}>
              <ModalBody>{children}</ModalBody>
              <ModalButtonBar>
                  <button bold onClick={this.props.close}>Close</button>
              </ModalButtonBar>
          </Modal>
        )
    }
}

export class ModalConfirm extends React.Component {
    static propTypes = {
        text : React.PropTypes.shape({
            confirm: React.PropTypes.string,
            cancel : React.PropTypes.string
        }),
        default: React.PropTypes.string
    };
    
    static defaultProps = {
        text : {
            confirm: 'Yes',
            cancel : 'No'
        },
        default: 'ok'
    };
    
    render() {
        let {children, text, ...others} = this.props;
        let buttons;
        
        if (this.props.default == 'cancel') {
            buttons = (
              <ModalButtonBar>
                  <Button bold onClick={this.props.close}>{text.cancel}</Button>
                  <Button subtle onClick={this.props.ok}>{text.confirm}</Button>
              </ModalButtonBar>
            )
        }
        else {
            buttons = (
              <ModalButtonBar>
                  <Button subtle onClick={this.props.close}>{text.cancel}</Button>
                  <Button bold onClick={this.props.ok}>{text.confirm}</Button>
              </ModalButtonBar>
            )
        }
        return (
          <Modal {...others}>
              <ModalBody>{children}</ModalBody>
              {buttons}
          </Modal>
        )
    }
}
