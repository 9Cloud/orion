import React, {PropTypes} from 'react';
import classNames from 'classnames/bind';
import {Component} from 'tide/components';
import {observable} from 'mobx';
import {TagList} from './tags';

/*
 Usage:
 <RichCard avatar={null} text={thread.last_message} subText={participants} tags={tags} />
 */
export const RichCard = (props) => {
    return (
      <Card>
          <Avatar image={props.avatar}/>
          <CardText>{props.text}</CardText>
          <CardSubText>{props.subtext}</CardSubText>
          <TagList tags={props.tags}/>
      </Card>
    )
};

export const CardText    = (props) => <div className="l-card-description">{props.children}</div>;
export const CardSubText = (props) => <div className="text--quiet">{props.children}</div>;

export const Card = (props) => {
    return (
      <div className="l-card-wrapper">
          <div className="l-card-item">
              {props.children}
          </div>
      </div>
    )
};


export const Avatar = (props) => {
    let size = props.size ? props.size : 50;
    if (props.image) {
        return <img src={props.image} className="l-card-avatar l-avatar"/>;
    } else {
        return <img src={`https://www.gravatar.com/avatar/?s=${size}`} className="l-card-avatar l-avatar"/>;
    }
};


export class FlatUserList extends Component{
    @observable show_info = false;
    
    toggle_info(){
        this.show_info = !this.show_info;
    }
    
     /* Todo Tooltip */
    render_single(user){
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
    render(){
        let classes = classNames({
            'l-inline': this.props.inline
        });
    
        if (this.props.users.length == 0){
            return <ul></ul>
        }
        
        return (
          <ul className={classes}>
              {this.props.users.map((user) => this.render_single(user))}
          </ul>
        )
    }
}