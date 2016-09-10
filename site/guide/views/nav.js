import React, {PropTypes} from "react";
import {View} from "tide/components";
import {StyleGuidePage} from "./page";
import {Blank} from "orion/ui/helpers";
import {RichCard} from "orion/ui/components";
import {Chance} from "chance";
import {Div, Button, Section, SubSection, Spacer, Icon, Notice, VMenuLink} from 'orion/ui/helpers';

export class NavComponent extends StyleGuidePage {
    sidebar() {
        return (
            <div className="l-vmenu">
                <VMenuLink index={true}>← Home</VMenuLink>
            </div>
        )
    }

    navbar() {
        return (
            <Section title="Naviation Bar" key="1">
                <p className="l-row-gut-2"> This navigation bar is used globally across the site. </p>
                <header className="demo-header l-bgcolor--secondary--darker l-col-gut-lg l-clearfix">
                    <div className="pg-container">
                        <a href="/" className="logo l-float-left">Logo</a>
                        <nav>
                            <ul className="l-nav-list">
                                <li className="l-nav-item"><a href="">Item one</a>
                                    <ul className="l-nav-dd">
                                        <li>Item One</li>
                                        <li>Item Two</li>
                                        <li>Item Three</li>
                                    </ul>
                                </li>
                                <li className="l-nav-item"><a href="">Item two</a></li>
                                <li className="l-nav-item"><a href="">Item three</a></li>
                                <li className="l-nav-item"><a href="">Item four</a></li>
                                <li className="l-nav-item"><a href="">Item five</a></li>
                                <li className="l-nav-item"><span className="anchor icon-user"></span> Hello User</li>
                                <li className="l-nav-item"><a href="" className="icon-inbox"></a></li>
                                <li className="l-nav-item"><a href="" className="icon-bell"></a></li>
                                <li className="l-nav-item"><a href="" className="icon-flag"></a></li>
                                <li className="l-nav-item">
                                    <a href="" className="icon-cog"></a>
                                    <ul className="l-nav-dd">
                                        <li>Item One</li>
                                        <li>Item Two</li>
                                        <li>Item Three</li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </Section>
        )
    }

    main() {
        return [
            this.navbar()
        ]
    }
}
