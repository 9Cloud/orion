// React
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Component, Provider, ApplicationComponent} from 'tide/components';
import {Router, Route, browserHistory, Link} from 'react-router';
import {StyleGuidePage} from 'orion/base/layout';

export class FormsPage extends StyleGuidePage {
    sidebar() {
        return (
          <ul>
              <li><a href="/"> ← Home </a></li>
              <li><a href="#buttons">Buttons</a></li>
              <li><a href="#text">Text</a></li>
              <li><a href="#checkboxes">Checkboxes & Radios</a></li>
              <li><a href="#white">White Theme</a></li>
          </ul>
        )
    }
    
    buttons(){
        return (
          <div className="section-container l-row-gut-4">
              <h1 className="section_title"><a name="buttons">Buttons</a></h1>
      
              <div className="">
                  <h3> Size: Default </h3>
                  <button className="l-btn l-row-gut-1"> Default</button>
                  <button className="l-btn-secondary l-row-gut-1"> Secondary button</button>
                  <button className="l-btn-ghost l-row-gut-1"> Ghost button</button>
              </div>
      
              <div className="">
                  <h3> Size: Small</h3>
                  <button className="l-btn l-btn--small l-row-gut-1"> Default</button>
                  <button className="l-btn-secondary l-btn-secondary--small l-row-gut-1"> Secondary Button</button>
                  <button className="l-btn-ghost l-btn-ghost--small l-row-gut-1"> Ghost button</button>
              </div>
      
              <div className="">
                  <h3> Size: Large </h3>
                  <button className="l-btn l-btn--large l-row-gut-1"> Default</button>
                  <button className="l-btn-secondary l-btn-secondary--large l-row-gut-1"> Secondary Button</button>
                  <button className="l-btn-ghost l-btn-ghost--large l-row-gut-1"> Ghost button</button>
              </div>
      
              <div className="l-col-lg-5">
                  <h3> Disabled buttons </h3>
                  <button className="l-btn-disabled l-btn-disabled--small l-row-gut-1"> Small Disabled Button</button>
                  <button className="l-btn-disabled l-row-gut-1"> Default Disabled Button</button>
                  <button className="l-btn-disabled l-btn-disabled--large l-row-gut-1"> Large Disabled Button</button>
              </div>
          </div>
        )
    }
    
    text_elements() {
        return (
          <div className="section-container l-row-gut-4">
              <h1 className="section_title l-clearfix"><a name="forms">Text Elements</a></h1>
    
              <h3>Dark theme</h3>
              <form action="">
                  <label> Form Label </label>
                  <p>
                      <input className="l-input l-fullwidth" type="text" placeholder="Name" />
                  </p>
                  <p>
                      <span className="l-error"> This part is required </span>
                  </p>
                  <p>
                      <input className="l-input l-fullwidth l-error" type="text" />
                  </p>
        
                  <textarea className="l-textarea l-fullwidth" placeholder="Type something..."></textarea>
              </form>
    
              <h2>Select </h2>
              <div className="l-select-wrapper">
                  <select className="l-select l-fullwidth">
                      <option>1</option>
                  </select>
                  <div className="l-select-dd l-fullwidth">
                      <ul>
                          <li> Option 1</li>
                          <li> Option 2</li>
                          <li> Option 3</li>
                      </ul>
                  </div>
              </div>
          </div>
        )
    }
    
    checkboxes() {
        return (
          <div className="section-container l-row-gut-4">
              <h1 className="section_title"><a name="checkboxes">Checkboxes & Radio</a></h1>
    
              <input className="l-radio" type="radio" name="hello"/> <label>Option 1</label> <br/><br/>
              <input className="l-radio" type="radio" name="hello"/> <label>Option 2</label> <br/><br/>
              <input className="l-radio" type="radio" name="hello"/> <label>Option 3</label> <br/><br/>
              <input className="l-checkbox" type="checkbox" /><label>Check me!</label>
          </div>
        )
    }
    
    theme() {
        return (
          <div className="section-container l-row-gut-4">
              <h1 className="section_title l-clearfix"><a name="forms">Text Elements</a></h1>
    
              <h1 className="section_title"><a name="white">Light Theme</a></h1>
    
              <div className="white_theme">
                  <textarea className="l-textarea l-inverse"></textarea>
              </div>
          </div>
        )
    }
    
    main() {
        return [
          this.buttons(),
          this.text_elements(),
          this.checkboxes(),
          this.theme()
        ]
    }
    
}
