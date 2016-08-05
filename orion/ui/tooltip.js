import React, {PropTypes} from 'react';
import {Component} from 'tide/components';
import classNames from 'classnames/bind';
import {observable} from 'mobx';

/**
 * Tool tips can either render text, which will be placed within a span.
 * Or custom html.
 *
 * Text implies inline is true if left undefined.
 */
export class Tooltip extends Component{
    static propTypes = {
        position: React.PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
        width: React.PropTypes.number,
        text: React.PropTypes.string,
        html: React.PropTypes.string,
        inline: React.PropTypes.bool,
        children: React.PropTypes.node.isRequired
    };
    
    static defaultProps = {
        position: "top",
        inline: null
    };
    
    @observable visible = false;
    
    render_tooltip(){
        let styles = this.props.width ? {width: this.props.width} : {};
        return(
          <div className={`l-tooltip l-tooltip--${this.props.position}`} style={styles}>
              {this.props.children}
          </div>
        )
    }
    
    onMouseEnter() {
        this.visible = true;
    }
    onMouseLeave() {
        this.visible = false;
    }
    
    render(){
        let content;
        let container_classes = null;
        let inline = this.props.inline;
        
        if (this.props.text){
            content = <p>{this.props.text}</p>;
            inline = this.props.inline == null ? true : this.props.inline;
        }
        
        if (this.props.html){
            content = this.props.html
        }
         
        return(
          <div className={`l-tooltip-container ${inline ? 'l-inline' : ''}`} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
              {this.visible ? this.render_tooltip() : null}
              {content}
          </div>
        )
    }
}