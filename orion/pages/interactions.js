// React
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Component, Provider, ApplicationComponent} from 'tide/components';
import {Router, Route, browserHistory, Link} from 'react-router';
import {StyleGuidePage} from 'orion/base/layout';

export class Interactions extends StyleGuidePage {
    sidebar() {
        return (
          <ul>
              <li><a href="/"> ← Home </a></li>
              <li><a href="#states">States</a></li>
              <li><a href="#notices">Notices</a></li>
              <li><a href="#animations">Animations</a></li>
          </ul>
        )
    }
    
    main() {
        return (
          <div>
              <h1 class="section_title"><a name="states">States</a></h1>
    
              <div class="l-col-5">
                  <h3>Success</h3>
                  <div class="l-success l-bgcolor--ui-faded-green l-box-shadow"> Good job!</div>
                  <p class="l-success"> Good job!</p>
              </div>
    
              <div class="l-col-5 l-col-offset-1">
                  <h3> Error </h3>
                  <div class="l-error l-bgcolor--ui-faded-yellow l-box-shadow"> This is an error</div>
                  <p class="l-error"> This is an error </p>
              </div>
    
              <div class="l-clearfix">
                  <h3> Blank State </h3>
                  <p class="l-blank-state"> Sorry, no comments yet! </p>
              </div>
              <div>
                  <h1 class="section_title"><a name="notices"> Notices</a></h1>
                  <p class="l-notice"> Hello, this is a friendly notice. </p>
              </div>
    
              <div>
                  <h1 class="section_title"><a name="animations">Animations</a></h1>
                  <div class="icon-heartbeat"></div>
                  <div class="icon-heart"></div>
              </div>
          </div>
        )
    }
    
}