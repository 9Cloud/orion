// React
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Component, Provider, ApplicationComponent} from 'tide/components';
import {Router, Route, browserHistory, Link} from 'react-router';
import {Button} from 'orion/ui/helpers';
import {Tooltip} from 'orion/ui/tooltip';
import {StyleGuidePage} from 'orion/base/layout';

export class BaseComponents extends StyleGuidePage {

    avatars() {
        return (
            <div className="section-container l-row-gut-4">
                <h1 className="section_title"><a name="avatars">Avatars</a></h1>

                <div className="l-avatarandusername--horizontal l-row-gut-2">
                    <img src="http://lorempixel.com/200/200/people/3/" className="l-avatar"/>
                    <h5 className="l-col-gut-sm">Username</h5>
                </div>

                <div className="l-avatarandusername--vertical">
                    <img src="http://lorempixel.com/200/200/people/8/" className="l-avatar"/>
                    <h5>Username </h5>
                </div>
            </div>
        )
    }

    spinners() {
        return (
            <div className="section-container l-row-gut-4">
                <div className="l-vertical-display">
                    <span className="l-spinner"></span>
                    <p>Loading...</p>
                </div>

                <div className="l-horizontal-display">
                    <span className="l-spinner"></span>
                    <p className="l-col-gut-sm">Loading...</p>
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
                        <p className="l-card-description">Lorem Ipsum is simply dummy text of <a href="">the
                            printing </a>and
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
                        <p className="l-card-description">Lorem Ipsum is simply dummy text of <a href="">the
                            printing </a>and
                            typesetting industry. </p>
                        <span className="l-tag l-tag--subtle">Tag</span>
                        <span className="l-tag l-tag--subtle">Tag</span>
                        <span className="l-tag l-tag--subtle">Tag</span><span className="l-tag l-tag--subtle">Tag</span>
                    </div>
                </div>

                <div className="l-card-wrapper">
                    <div className="l-card-item">
                        <img src="http://lorempixel.com/200/200/people/3/" className="l-card-avatar l-avatar"/>
                        <p className="l-card-description">Lorem Ipsum is simply dummy text of <a href="">the
                            printing </a>and
                            typesetting industry. </p>
                        <span className="l-tag l-tag--blue">Tag</span>
                        <span className="l-tag l-tag--blue">Tag</span>
                        <span className="l-tag l-tag--blue">Tag</span>
                        <span className="l-tag l-tag--blue">Tag</span>
                    </div>
                </div>

                <div className="l-card-wrapper l-clearfix">
                    <div className="l-card-item">
                        <img src="http://lorempixel.com/200/200/people/4/" className="l-card-avatar l-avatar"/>
                        <div className="l-col-lg-10 l-col-sm-5 l-col-gut-lg-md">
                            <p className="l-card-description l-no-margin">Lorem Ipsum is simply dummy text of <a
                                href="">the
                                printing </a>and typesetting industry. </p>
                            <p className="l-txt--quiet">Lorem Ipsum is simply dummy text of </p>
                            <p className="l-txt--xtr-quiet">Lorem Ipsum is simply dummy text of </p>
                        </div>
                    </div>
                </div>
                <div className="l-card-wrapper l-clearfix">
                    <div className="l-card-item">
                        <div className="l-col-2 l-row-gut-2">
                            <img src="http://lorempixel.com/200/200/people/3/" className="l-avatar"/>
                            <button className="l-btn-ghost l-btn-ghost--small">Follow</button>
                        </div>
                        <div className="l-col-lg-10 l-col-gut-lg-md">
                            <h5 className="l-white-link">Username</h5>
                            <h3 className="l-date">June 17, 2015</h3>
                            <p className="l-card-description">Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book.</p>
                            <a href="#" className="l-txt-link l-h5">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    tabs() {
        return (
            <div className="section-container l-row-gut-4">
                <h1 className="section_title"><a name="tabs">Tabs</a></h1>
                <ul className="tabui">
                    <li className="tabui_item tabui_item--active">Tab Active</li>
                    <li className="tabui_item tabui_item--hover">Tab Hover</li>
                    <li className="tabui_item tabui_item--default">Tab Default</li>
                    <li className="tabui_item tabui_item--default">Tab Default</li>
                </ul>
            </div>
        )
    }

    tooltips() {
        return (
            <div className="section-container l-row-gut-4">
                <h1 className="section_title"><a name="tooltips">Tooltips</a></h1>
                <h4 className="l-clear"></h4>

                <div>
                    A tooltip can be placed upon a text item.

                    <Tooltip text="top" position="top">
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
                </div>

                <div>
                    It can also be generated with custom HTML async its contents.
                    <Tooltip containerWidth="100px" html={<h1 >HTML</h1>} position="right">
                        <p>Lorem Ipsum. pew pew brap brap</p>
                    </Tooltip>

                    <Tooltip html={<Button>A tooltip on a button</Button>} position="bottom">
                        <p>Lorem Ipsum.</p>
                    </Tooltip>
                </div>
            </div>
        )
    }

    modals() {
        return (
            <div className="section-container l-row-gut-4">
                <h1 className="section_title"><a name="modals">Modals</a></h1>
                <p> Open this <a onclick={this.modal}>modal</a></p>
            </div>
        )
    }

    main() {
        return [
            this.modals(),
            this.avatars(),
            this.spinners(),
            this.cards(),
            this.tabs(),
            this.tooltips()
        ]
    }

    sidebar() {
        return (
            <ul>
                <li><a href="/"> ← Home </a></li>
                <li><a href="#avatars">Avatars</a></li>
                <li><a href="#spinners">Spinners</a></li>
                <li><a href="#cards">Cards</a></li>
                <li><a href="#tabs">Tabs</a></li>
                <li><a href="#tooltips">Tooltips</a></li>
                <li><a href="#modals">Modals</a></li>
            </ul>
        )
    }
}
