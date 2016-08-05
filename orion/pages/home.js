// React
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Component, Provider, ApplicationComponent} from 'tide/components';
import {Router, Route, browserHistory, Link} from 'react-router';
import {StyleGuidePage} from 'orion/base/layout';

export class Home extends StyleGuidePage {
    colors() {
        return (
            <div className="section-container">
                <p className="l-row-gut-4">Orion is a lightweight framework built with html & css.</p>
                <h1 className="section_title"><a name="colors">Colors</a></h1>
                
                <div className="l-clearfix">
                    {/*Primary colors*/}
                    <p className="l-row-gut-4">Primary colors are used for call to action buttons and links. </p>
        
                    <div className="l-col-lg-3 l-row-gut-4">
                        <div className="example-item l-bgcolor--primary-color"></div>
                        <div>.l-bgcolor--primary-color</div>
                        <span>#FF97A3</span>
                    </div>
                    <div className="l-col-lg-3 l-row-gut-4">
                        <div className="example-item l-bgcolor--primary--dark"></div>
                        <p>.l-bgcolor--primary--dark</p>
                        <span>#923939</span>
                    </div>
                    <div className="l-col-lg-3 l-row-gut-4">
                        <div className="example-item l-bgcolor--primary--light"></div>
                        <div>.l-bgcolor--primary--light</div>
                        <span>#EEE2E2</span>
                    </div>
                </div>
                
                <div className="l-clearfix">
                    {/*Secondary colors*/}
                    <p className="l-row-gut-4">Secondary colors are used for background colors. </p>
        
                    <div className="l-col-lg-3 l-row-gut-4">
                        <div className="example-item l-bgcolor--secondary-color"></div>
                        <div>.l-bgcolor--secondary-color</div>
                        <span>#262626</span>
                    </div>
        
                    <div className="l-col-lg-3 l-row-gut-4">
                        <div className="example-item l-bgcolor--secondary--dark"></div>
                        <p>.l-bgcolor--secondary--dark</p>
                        <span>#212121</span>
                    </div>
        
                    <div className="l-col-lg-3 l-row-gut-4">
                        <div className="example-item l-bgcolor--secondary--darker"></div>
                        <div>.l-bgcolor--secondary--darker</div>
                        <span>#191919</span>
                    </div>
        
                    <div className="l-col-lg-3 l-row-gut-4">
                        <div className="example-item l-bgcolor--secondary--darkest"></div>
                        <div>.l-bgcolor--secondary--darkest</div>
                        <span>#000000</span>
                    </div>
        
                    <div className="l-clearfix l-row-gut-4"></div>
        
                    <div className="l-col-lg-3 l-row-gut-4">
                        <div className="example-item l-bgcolor--secondary--light"></div>
                        <div>.l-bgcolor--secondary-light</div>
                        <span>#3A3A3A</span>
                    </div>
        
                    <div className="l-col-lg-3 l-row-gut-4">
                        <div className="example-item l-bgcolor--secondary--lighter"></div>
                        <div>.l-bgcolor--secondary--lighter</div>
                        <span>#C1C1C1</span>
                    </div>
        
                    <div className="l-col-lg-3 l-row-gut-4">
                        <div className="example-item l-bgcolor--secondary--lightest"></div>
                        <div>.l-bgcolor--secondary--lightest</div>
                        <span>#FFFFFF</span>
                    </div>
                </div>
    
                {/*UI colors*/}
                <div className="l-clearfix">
                    <p className="l-row-gut-4">UI colors are colorful pieces that can be used for components like modals,
                        spinners, tags etc..</p>
    
                    <div className="l-col-lg-3 l-row-gut-4">
                        <div className="example-item l-bgcolor--ui-blue"></div>
                        <div>.l-bgcolor--ui-blue</div>
                        <span>#4B889D</span>
                    </div>
    
                    <div className="l-col-lg-3 l-row-gut-4">
                        <div className="example-item l-bgcolor--ui-green"></div>
                        <div>.l-bgcolor--ui-green</div>
                        <span>#70AE47</span>
                    </div>
    
                    <div className="l-col-lg-3 l-row-gut-4">
                        <div className="example-item l-bgcolor--ui-yellow"></div>
                        <div>.l-bgcolor--ui-yellow</div>
                        <span>#D8AF43</span>
                    </div>
    
                    <div className="l-col-lg-3 l-row-gut-4">
                        <div className="example-item l-bgcolor--ui-yellow--light"></div>
                        <div>.l-bgcolor--ui-yellow--light</div>
                        <span>#DDCA7E</span>
                    </div>
                </div>
            </div>
        )
    }
    
    borders() {
        return (
          <div className="section-container">
              <h1 className="section_title"><a name="borders"> Borders </a></h1>
      
              <p>Just like colors, borders are customizable </p>
              <p> Full Border</p>
              <div className="example-border l-border--primary--light--full l-bgcolor--secondary--light"></div>
      
              <p>Top </p>
              <div className="example-border l-border--primary--light--top l-bgcolor--secondary--light"></div>
      
              <p>Left</p>
              <div className="example-border l-border--primary--light--left l-bgcolor--secondary--light"></div>
      
              <p>Right</p>
              <div className="example-border l-border--primary--light--right l-bgcolor--secondary--light"></div>
          </div>
        )
    }
    
    icons() {
        return (
          <div className="section-container">
              <h1 className="section_title"><a name="icons"> Icons </a></h1>
              <p> We use icon fonts. Fonts are located on <a href="fonts/icomoon/demo.html"> Icomoon </a></p>
          </div>
        )
    }
    
    links() {
        return (
          <div className="section-container">
              <h1 className="section_title"><a name="links">Links </a></h1>
              <a href="#"> This is a link </a>
          </div>
        )
    }
    
    sidebar(){
        return (
          <ul>
              <li><a href="#colors">Colors</a></li>
              <li><a href="#borders">Borders</a></li>
              <li><a href="#icons">Icons</a></li>
              <li><a href="#links">Links</a></li>
          </ul>
        )
    }
    
    main(){
        return [
          this.colors(),
          this.borders(),
          this.icons(),
          this.links(),
        ]
    }

}
