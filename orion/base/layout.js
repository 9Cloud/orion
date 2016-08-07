// React
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Component, Provider, ApplicationComponent} from 'tide/components';
import {Router, Route, browserHistory, Link} from 'react-router';
import {Header} from 'orion/base/header';

export class StyleGuidePage extends Component {
    render() {
        return (
          <div>
              <Header />
              
              <div className="l-clearfix l-row-gut-4"></div>
              
              <div className="pg-container">
                  <div className="l-sidebar l-col-3">
                      {this.sidebar()}
                  </div>
                  
                  <div className="l-col-9">
                      {this.main()}
                  </div>
              </div>
          </div>
        )
    }
}