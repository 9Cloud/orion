import React, {PropTypes} from "react";
import {Component} from "tide/components";
import {observable} from "mobx";

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
        html: React.PropTypes.node,
        inline: React.PropTypes.bool,
        children: React.PropTypes.node.isRequired
    };

    static defaultProps = {
        position: "top",
        inline: null
    };

    @observable is_hovered_upon = false;
    @observable sticky = false;

    onMouseEnter() {
        this.is_hovered_upon = true;
    }

    onMouseLeave() {
        this.is_hovered_upon = false;
    }

    onClick() {
        if(this.sticky){
            this.sticky = false;
            this.is_hovered_upon = false;
        }
        else {
            this.sticky = true;
            this.is_hovered_upon = true;
        }
    }

    render_tooltip(){
        let styles = this.props.width ? {width: this.props.width} : {};
        return(
          <div className={`l-tooltip l-tooltip--${this.props.position}`} style={styles}>
              {this.props.children}
          </div>
        )
    }

    render(){
        let content;
        let inline = this.props.inline;
        let visible = this.is_hovered_upon || this.sticky;

        if (this.props.text){
            content = <p onClick={this.onClick} className="l-tooltip-content">
                {visible ? this.render_tooltip() : null}
                {this.props.text}</p>;
            inline = this.props.inline == null ? true : this.props.inline;
        }

        if (this.props.html){
            content = <div onClick={this.onClick} className="l-tooltip-content">
                {visible ? this.render_tooltip() : null}
                {this.props.html}
            </div>;
        }

        return(
          <div className={`l-tooltip-container ${inline ? 'l-inline' : ''}`}
               onMouseEnter={this.onMouseEnter}
               onMouseLeave={this.onMouseLeave}>
              {content}
          </div>
        )
    }
}