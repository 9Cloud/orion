import React, {PropTypes} from 'react';

export class Modal extends React.Component {
    render() {
        return (
          <div className="modal">
              <div className="modal_dialog_container">
                  <div className="title_bar">
                      <h3 className="modal_title">{this.props.title}</h3>
                      <div className="icon-remove hide-text">x</div>
                  </div>
                  
                  {this.props.children}
                  
                  <Div clear></Div>
              </div>
          </div>
        )
    }
}
export const ModalBody = (props) => (
  <div className="modal_body">
      {props.children}
  </div>
);

export const ModalButtonBar = (props) => (
  <div className="modal_action_btns">
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
        text   : React.PropTypes.shape({
            confirm: React.PropTypes.string,
            cancel : React.PropTypes.string
        }),
        default: React.PropTypes.string
    };
    
    static defaultProps = {
        text   : {
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