// React
import React, {PropTypes} from 'react';
import {Button, Spacer, Icon, Notice, VMenuLink} from 'orion/ui/helpers';
import {Tooltip} from 'orion/ui/tooltip';
import {StyleGuidePage} from 'orion/guide/layout';
import {ModalNotice, ModalConfirm} from 'orion/ui/modal';

export class UIComponents extends StyleGuidePage {

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
                        <div className="l-col-10 l-col-sm-5 l-col-gut-lg-md">
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
                        <div className="l-col-10 l-col-gut-lg-md">
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


    state = {
        show_modal_notice: false,
        show_confirm_modal: false
    };

    modals() {
        const openNotice = (e) => {
            e.preventDefault();
            this.setState({ show_modal_notice: true});
        };
        const closeNotice = (e) => {
            e.preventDefault();
            this.setState({ show_modal_notice: false });
        };

        const openConfirm = (e) => {
            e.preventDefault();
            this.setState({show_confirm_modal: true})
        };
        const closeConfirm = (e) => {
            e.preventDefault();
            this.setState({show_confirm_modal: false})
        };

        let modal_notice_body = (
            <div className="l-container">
                <div className="l-row l-row-gut-2 ">
                    <div className="l-col-2 l-col-offset-1">
                        <Icon style={{'fontSize': '5rem'}} type="info"/>
                    </div>
                    <div className="l-col-7 l-col-offset-2">
                        <Notice>Something happend!</Notice>
                    </div>
                </div>
                <Spacer />
            </div>
        );

        let modal_confirm_body = (
            <div className="l-container">
                <div className="l-row l-row-gut-2 ">
                    <div className="l-col-2 l-col-offset-1">
                        <Icon style={{'fontSize': '5rem'}} type="question"/>
                    </div>
                    <div className="l-col-7 l-col-offset-2">
                        <Notice>Do you want to do this?</Notice>
                    </div>
                </div>
                <Spacer />
            </div>
        );

        return (
            <div className="section-container l-row-gut-4">
                <h1 className="section_title"><a name="modals">Modals</a></h1>
                <div> Open this <Button inline onClick={openNotice}>notice modal</Button></div>
                <Spacer/>
                <div> Open this <Button onClick={openConfirm}>confirm modal</Button></div>

                {this.state.show_modal_notice ? <ModalNotice title="Notice" on_close={closeNotice}>{modal_notice_body}</ModalNotice> : null}
                {this.state.show_confirm_modal ? <ModalConfirm title="Confirm" on_cancel={closeConfirm} on_confirm={closeConfirm}>{modal_confirm_body}</ModalConfirm> : null}
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
            <div className="l-vmenu">
                <VMenuLink index={true}>← Home</VMenuLink>
                <VMenuLink hash="#avatars">Avatars</VMenuLink>
                <VMenuLink hash="#spinners">Spinners</VMenuLink>
                <VMenuLink hash="#cards">Cards</VMenuLink>
                <VMenuLink hash="#tabs">Tabs</VMenuLink>
                <VMenuLink hash="#tooltips">Tooltips</VMenuLink>
                <VMenuLink hash="#modals">Modals</VMenuLink>
            </div>
        )
    }
}
