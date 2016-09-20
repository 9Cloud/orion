import React, {PropTypes} from 'react';
import {Tooltip} from 'orion/ui/components/tooltip';
import {AlbumCard, CommentCard, UserCard} from 'orion/ui/components/cards';

import {StyleGuidePage} from './page';
import {ModalNotice, ModalConfirm} from 'orion/ui/components/modal';
import {Button, Spacer, Icon, Notice, VMenuLink} from 'orion/ui/helpers';

export class UIComponents extends StyleGuidePage {

    state = {
        show_modal_notice: false,
        show_confirm_modal: false
    };

    modals() {
        const openNotice = (e) => {
            e.preventDefault();
            this.setState({show_modal_notice: true});
        };
        const closeNotice = (e) => {
            e.preventDefault();
            this.setState({show_modal_notice: false});
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
                        <Notice>Something happened!</Notice>
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

                {this.state.show_modal_notice ?
                    <ModalNotice title="Notice" on_close={closeNotice}>{modal_notice_body}</ModalNotice> : null}
                {this.state.show_confirm_modal ? <ModalConfirm title="Confirm" on_cancel={closeConfirm}
                                                               on_confirm={closeConfirm}>{modal_confirm_body}</ModalConfirm> : null}
            </div>
        )
    }

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
                <p>There are different cards for different scenarios: User cards, album cards, and  </p>

                <h3>User Card</h3>
                <p> This is a user card. It contains a username, and avatar and some supplemental text. Ex: "Your friend just
                    liked your upload. </p>

                <UserCard avatar="/assets/images/faces/cropped/1.jpg">
                    <p><a href="" className="l-text-link">Username </a>liked <a href="">Album title</a></p>
                </UserCard>

                <h3>Comment Card</h3>
                <p> Comment cards contain the username, avatar and comments.</p>

                <CommentCard avatar="/assets/images/faces/cropped/2.jpg">
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                   Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</p>
                </CommentCard>
                
                <h3>Album Card</h3>
                <p> The album card contains a title, number of pictures, date uploaded, description, tags, and buttons
                    to interact with said album (edit,  upload, download, delete ) </p>

                <AlbumCard>
                    Lorem Ipsum is simply dummy text of <a href="">the printing </a>and typesetting industry.
                </AlbumCard>
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
                <VMenuLink hash="#modals">Modals</VMenuLink>
                <VMenuLink hash="#avatars">Avatars</VMenuLink>
                <VMenuLink hash="#spinners">Spinners</VMenuLink>
                <VMenuLink hash="#cards">Cards</VMenuLink>
                <VMenuLink hash="#tabs">Tabs</VMenuLink>
                <VMenuLink hash="#tooltips">Tooltips</VMenuLink>
            </div>
        )
    }
}
