// React
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Component, Provider, ApplicationComponent} from 'tide/components';
import {Router, Route, browserHistory, Link} from 'react-router';
import {Button} from 'orion/ui/helpers';
import {Tooltip} from 'orion/ui/tooltip';
import {StyleGuidePage} from 'orion/base/layout';

export class BaseComponents extends StyleGuidePage {
    sidebar() {
        return (
          <ul>
              <li><a href="/"> ← Home </a></li>
              <li><a href="#avatars">Avatars</a></li>
              <li><a href="#cards">Spinners</a></li>
              <li><a href="#tabs">Tabs</a></li>
              <li><a href="#tooltips">Tooltips</a></li>
              <li><a href="#modals">Modals</a></li>
          </ul>
        )
    }
    
    avatars(){
        return(
          <div className="section-container l-row-gut-4">
              <h1 className="section_title"><a name="cards">Avatars</a></h1>
      
              <div className="l-avatarandusername--horizontal l-row-gut-2 l-col-gut-md l-border-default">
                  <img src="http://lorempixel.com/200/200/people/3/" className="l-avatar"/>
                  <h5>Username </h5>
              </div>
      
              <div className="l-avatarandusername--vertical l-border-default">
                  <img src="http://lorempixel.com/200/200/people/8/" className="l-avatar"/>
                  <h5>Username </h5>
              </div>
          </div>
        )
    }
    
    spinners(){
        return (
          <div className="section-container l-row-gut-4">
              <div className="l-vertical-display">
                  <span className="l-spinner"></span>
                  <p>Loading...</p>
              </div>
      
              <div className="l-horizontal-display">
                  <span className="l-spinner"></span>
                  <p>Loading...</p>
              </div>
          </div>
        )
    }
    

    
    cards() {
        return (
          <div className="section-container l-row-gut-4">
              <h1 className="section_title"><a name="cards">Cards</a></h1>
              <div className="l-card-wrapper">
                  <div className="l-card-item">
                      <img src="http://lorempixel.com/200/200/people/1/" className="l-card-avatar l-avatar"/>
                      <p className="l-card-description">Lorem Ipsum is simply dummy text of <a href="">the printing </a>and
                          typesetting industry. </p>
                      <span className="l-tag">Tag</span>
                      <a href="" className="l-tag">Long Tag</a>
                      <a href="" className="l-tag">Tag</a>
                      <a href="" className="l-tag">Tag</a>
                      <a href="" className="l-tag">Tag</a>
                      <a href="" className="l-tag">Tag</a>
                  </div>
              </div>
              <div className="l-card-wrapper">
                  <div className="l-card-item">
                      <img src="http://lorempixel.com/200/200/people/2/" className="l-card-avatar l-avatar"/>
                      <p className="l-card-description">Lorem Ipsum is simply dummy text of <a href="">the printing </a>and
                          typesetting industry. </p>
                      <span className="l-tag l-tag--subtle">Tag</span>
                      <span className="l-tag l-tag--subtle">Tag</span>
                      <span className="l-tag l-tag--subtle">Tag</span><span className="l-tag l-tag--subtle">Tag</span>
                  </div>
              </div>
      
              <div className="l-card-wrapper">
                  <div className="l-card-item">
                      <img src="http://lorempixel.com/200/200/people/3/" className="l-card-avatar l-avatar"/>
                      <p className="l-card-description">Lorem Ipsum is simply dummy text of <a href="">the printing </a>and
                          typesetting industry. </p>
                      <span className="l-tag l-tag--blue">Tag</span>
                      <span className="l-tag l-tag--blue">Tag</span>
                      <span className="l-tag l-tag--blue">Tag</span>
                      <span className="l-tag l-tag--blue">Tag</span>
                  </div>
              </div>
      
              <p className="l-row-gut-4"> The following illustrate a card you can use for messages. </p>
      
              <div className="l-card-wrapper l-clearfix">
                  <div className="l-card-item">
                      <img src="http://lorempixel.com/200/200/people/4/" className="l-card-avatar l-avatar"/>
                      <div className="l-col-lg-10 l-col-sm-5 l-col-gut-lg-md">
                          <p className="l-card-description l-no-margin">Lorem Ipsum is simply dummy text of <a href="">the
                              printing </a>and typesetting industry. </p>
                          <p className="l-txt--quiet">Lorem Ipsum is simply dummy text of </p>
                          <p className="l-txt--xtr-quiet">Lorem Ipsum is simply dummy text of </p>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
    
    tabs(){
        return (
          <div className="section-container l-row-gut-4">
              <h1 className="section_title"><a name="tabs">Tabs</a></h1>
              <ul className="tabui">
                  <li className="tabui_item tabui_item--active">
                      Tab Active
                  </li>
                  <li className="tabui_item tabui_item--hover">
                      Tab Hover
                  </li>
                  <li className="tabui_item tabui_item--default">
                      Tab Default
                  </li>
                  <li className="tabui_item tabui_item--default">
                      Tab Default
                  </li>
              </ul>
          </div>

        )
    }
    
    
    tooltips() {
        return (
          <div className="section-container l-row-gut-4">
              <h1 className="section_title"><a name="tooltips">Tooltips</a></h1>
              
              <h4 className="l-clear"></h4>
              
              <p>
                  A tooltip can be placed upon a text item.
    
                  <Tooltip text="top" position="top" width="500px">
                      <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          <a href="#"> Learn More </a>
                      </p>
                  </Tooltip>
                  ...
                  <Tooltip text="left" position="left"><p>Lorem Ipsum.</p></Tooltip>
                  ...
                  <Tooltip text="bottom" position="bottom"><p>Lorem Ipsum.</p></Tooltip>
                  ...
                  <Tooltip text="right" position="right"><p>Lorem Ipsum.</p></Tooltip>
              </p>
              
              <p>
                  It can also be generated with custom HTML async its contents.
                  <Tooltip html={<h1>HTML</h1>} position="bottom">
                      <p>Lorem Ipsum.</p>
                  </Tooltip>
    
                  <Tooltip html={<Button>A tooltip on a button</Button>} position="bottom">
                      <p>Lorem Ipsum.</p>
                  </Tooltip>
              </p>
          </div>
        )
    }
    
    modals() {
        return (
          <div className="section-container l-row-gut-4">
              <h1 className="section_title"><a name="modals">Modals</a></h1>
              <p> Open this <a onclick="modal()">modal</a></p>
      
              <div className="l-hidden l-modal" id="JS_Modal">
                  <div className="l-modal-dialog-container l-box-shadow">
                      <div className="l-modal-title-bar l-col-gut-md l-bgcolor--secondary--light">
                          <h3 className="l-modal-title"> Modal Title </h3>
                          <span className="icon-remove l-modal-close-btn l-close-modal"></span>
                      </div>
                      <div className="l-col-gut-md l-modal-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adispicing elit, sed do eismond tempor</p>
                      </div>
                      <div className="l-col-gut-md l-modal-action-btns">
                          <div className="l-btn-secondary l-close-modal">Cancel</div>
                          <div className="l-btn"> Yes, Confirm</div>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
    
    main() {
        return [
          this.avatars(),
          this.spinners(),
          this.tabs(),
          this.tooltips(),
          this.modals()
        ]
    }
    
}
