// React
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Component, Provider, ApplicationComponent} from 'tide/components';
import {Router, Route, browserHistory, Link} from 'react-router';
import {StyleGuidePage} from 'orion/base/layout';

export class NavComponent extends StyleGuidePage {
    sidebar() {
        return (
          <ul>
              <li><a href="/"> ← Home </a></li>
          </ul>
        )
    }
    
    main() {
        return (
          <div>
              <h1 class="section_title"><a name="states">Nav</a></h1>
              <div>Your code here</div>
          </div>
        )
    }
    
}
