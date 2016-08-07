// React
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Component, Provider, ApplicationComponent} from 'tide/components';
import {Router, Route, browserHistory, Link} from 'react-router';
import {StyleGuidePage} from 'orion/base/layout';

export class NotFound extends StyleGuidePage {
    sidebar() {
        return (
          <ul>
              
          </ul>
        )
    }
    
    main() {
        return (
          <div>
              <h1>No Page Content</h1>
          </div>
        )
    }
    
}
