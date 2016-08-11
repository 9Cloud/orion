// React
import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {Form, Input, Checkbox} from 'orion/ui/forms';
import {Div, Button, Spacer, ErrorText} from 'orion/ui/helpers';
import Link from 'react-router/lib/Link';

export class AlbumListingPage extends Component {
    render() {
        return (
            <div>
                <h1>Page Title</h1>

                <div className="l-sidebar-wrapper">
                    <section className="l-sidebar">
                        <h3>Title </h3>
                        <ul>
                            <li><a href="">Item 1</a></li>
                            <li><a href="">Item 2</a></li>
                            <li><a href="">Item 3</a></li>
                        </ul>

                        <h3>Subheading </h3>
                        <ul>
                            <li><a href="">Item 1</a></li>
                            <li><a href="">Item 2</a></li>
                            <li><a href="">Item 3</a></li>
                        </ul>

                        <div className="l-select-wrapper">
                            <select className="l-select">
                                <option value="">Select Option</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </div>
                    </section>
                </div>

                <div className="albumlist l-col-9 l-col-gut-md">
                    <div className="albumlist_container l-row-gut-4 l-clearfix">
                        <div className="l-bgcolor--secondary--darker l-col-2">1</div>
                        <div className="l-bgcolor--secondary--darker l-col-3">2</div>
                        <div className="l-bgcolor--secondary--darker l-col-3">3</div>
                        <div className="l-bgcolor--secondary--darker l-col-3">4</div>
                    </div>

                    <div className="albumlist_container l-row-gut-4 l-clearfix">
                        <div className="l-col-5 l-bgcolor--secondary--darker">
                            <div className=" l-col-6 l-bgcolor--ui-darkred">4</div>
                            <p className="l-col-3">Lorem ipsum text</p>
                        </div>
                        <div className="l-col-5 l-bgcolor--secondary--darker l-col-gut-sm">
                            <div className=" l-col-6 l-bgcolor--ui-darkred">4</div>
                            <p className="l-col-3">Lorem ipsum text</p>
                        </div>
                    </div>

                    <div className="albumlist_container l-col-10 l-row-gut-1">
                        <div className="l-col-4 l-bgcolor--ui-darkred">4</div>
                        <div className="l-col-7">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer
                                took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="l-row-gut-4 l-clearfix"></div>
            </div>
        )
    }
}
