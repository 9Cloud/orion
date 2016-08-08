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

    navbar() {
        return (
            <header className="demo-header l-bgcolor--secondary--darker l-col-gut-lg l-clearfix">
                    <div className="pg-container">
                        <a href="/" className="logo l-float-left">Logo</a>
                        <nav>
                            <ul className="nav-list">
                                <li className="nav-item"><a href="">Item one</a></li>
                                <li className="nav-item"><a href="">Item two</a></li>
                                <li className="nav-item"><a href="">Item three</a></li>
                                <li className="nav-item"><a href="">Item four</a></li>
                                <li className="nav-item"><a href="">Item five</a></li>
                                <li className="nav-item"><a href="">Item six</a></li>
                                <li className="nav-item"><span className="icon-user"></span> Hello User</li>
                                <li className="nav-item"><a href="" className="icon-inbox"></a></li>
                                <li className="nav-item"><a href="" className="icon-bell"></a></li>
                                <li className="nav-item"><a href="" className="icon-flag"></a></li>
                                <li className="nav-item">
                                  <a href="" className="icon-cog"></a>
                                  <ul className="nav-dropdown">
                                    <li>Item One</li>
                                    <li>Item Two</li>
                                    <li>Item Three </li>
                                    <li>Item Four</li>
                                  </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
             </header>
        )
    }

    main() {
        return [
            this.navbar()
        ]
    }
}
