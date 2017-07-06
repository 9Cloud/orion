"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var tooltip_1 = require("orion/ui/components/tooltip");
var cards_1 = require("orion/ui/components/cards");
var page_1 = require("./page");
var modal_1 = require("orion/ui/components/modal");
var helpers_1 = require("orion/ui/helpers");
var UIComponents = (function (_super) {
    __extends(UIComponents, _super);
    function UIComponents() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            show_modal_notice: false,
            show_confirm_modal: false
        };
        return _this;
    }
    UIComponents.prototype.modals = function () {
        var _this = this;
        var openNotice = function (e) {
            e.preventDefault();
            _this.setState({ show_modal_notice: true });
        };
        var closeNotice = function (e) {
            e.preventDefault();
            _this.setState({ show_modal_notice: false });
        };
        var openConfirm = function (e) {
            e.preventDefault();
            _this.setState({ show_confirm_modal: true });
        };
        var closeConfirm = function (e) {
            e.preventDefault();
            _this.setState({ show_confirm_modal: false });
        };
        var modal_notice_body = (<div className="l-container">
                <div className="l-row l-row-gut-2 ">
                    <div className="l-col-2 l-col-offset-1">
                        <helpers_1.Icon style={{ 'fontSize': '5rem' }} type="info"/>
                    </div>
                    <div className="l-col-7 l-col-offset-2">
                        <helpers_1.Notice>Something happened!</helpers_1.Notice>
                    </div>
                </div>
                <helpers_1.Spacer />
            </div>);
        var modal_confirm_body = (<div className="l-container">
                <div className="l-row l-row-gut-2 ">
                    <div className="l-col-2 l-col-offset-1">
                        <helpers_1.Icon style={{ 'fontSize': '5rem' }} type="question"/>
                    </div>
                    <div className="l-col-7 l-col-offset-2">
                        <helpers_1.Notice>Do you want to do this?</helpers_1.Notice>
                    </div>
                </div>
                <helpers_1.Spacer />
            </div>);
        return (<div className="section-container l-row-gut-4">
                <h1 className="section_title"><a name="modals">Modals</a></h1>
                <div> Open this <helpers_1.Button inline onClick={openNotice}>notice modal</helpers_1.Button></div>
                <helpers_1.Spacer />
                <div> Open this <helpers_1.Button onClick={openConfirm}>confirm modal</helpers_1.Button></div>

                {this.state.show_modal_notice ?
            <modal_1.ModalNotice title="Notice" on_close={closeNotice}>{modal_notice_body}</modal_1.ModalNotice> : null}
                {this.state.show_confirm_modal ? <modal_1.ModalConfirm title="Confirm" on_cancel={closeConfirm} on_confirm={closeConfirm}>{modal_confirm_body}</modal_1.ModalConfirm> : null}
            </div>);
    };
    UIComponents.prototype.avatars = function () {
        return (<div className="section-container l-row-gut-4">
                <h1 className="section_title"><a name="avatars">Avatars</a></h1>

                <div className="l-avatarandusername--horizontal l-row-gut-2">
                    <img src="http://lorempixel.com/200/200/people/3/" className="l-avatar"/>
                    <h5 className="l-col-gut-sm">Username</h5>
                </div>

                <div className="l-avatarandusername--vertical">
                    <img src="http://lorempixel.com/200/200/people/8/" className="l-avatar"/>
                    <h5>Username </h5>
                </div>
            </div>);
    };
    UIComponents.prototype.spinners = function () {
        return (<div className="section-container l-row-gut-4">
                <div className="l-vertical-display">
                    <span className="l-spinner"></span>
                    <p>Loading...</p>
                </div>

                <div className="l-horizontal-display">
                    <span className="l-spinner"></span>
                    <p className="l-col-gut-sm">Loading...</p>
                </div>
            </div>);
    };
    UIComponents.prototype.cards = function () {
        return (<div className="section-container l-row-gut-4">
                <h1 className="section_title"><a name="cards">Cards</a></h1>
                <p>There are different cards for different scenarios: User cards, album cards, and  </p>

                <h3>User Card</h3>
                <p> This is a user card. It contains a username, and avatar and some supplemental text. Ex: "Your friend just
                    liked your upload. </p>

                <cards_1.UserCard avatar="/assets/images/faces/cropped/1.jpg">
                    <p><a href="" className="l-text-link">Username </a>liked <a href="">Album title</a></p>
                </cards_1.UserCard>

                <h3>Comment Card</h3>
                <p> Comment cards contain the username, avatar and comments.</p>

                <cards_1.CommentCard avatar="/assets/images/faces/cropped/2.jpg">
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                   Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</p>
                </cards_1.CommentCard>

                <h3>Album Card</h3>
                <p> The album card contains a title, number of pictures, date uploaded, description, tags, and buttons
                    to interact with said album (edit,  upload, download, delete ) </p>

                <cards_1.AlbumCard>
                    Lorem Ipsum is simply dummy text of <a href="">the printing </a>and typesetting industry.
                </cards_1.AlbumCard>
            </div>);
    };
    UIComponents.prototype.tabs = function () {
        return (<div className="section-container l-row-gut-4">
                <h1 className="section_title"><a name="tabs">Tabs</a></h1>
                <ul className="tabui">
                    <li className="tabui_item tabui_item--active">Tab Active</li>
                    <li className="tabui_item tabui_item--hover">Tab Hover</li>
                    <li className="tabui_item tabui_item--default">Tab Default</li>
                    <li className="tabui_item tabui_item--default">Tab Default</li>
                </ul>
            </div>);
    };
    UIComponents.prototype.tooltips = function () {
        return (<div className="section-container l-row-gut-4">
                <h1 className="section_title"><a name="tooltips">Tooltips</a></h1>
                <h4 className="l-clear"></h4>

                <div>
                    A tooltip can be placed upon a text item.

                    <tooltip_1.Tooltip text="top" position="top">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <a href="#"> Learn More </a>
                        </p>
                    </tooltip_1.Tooltip>
                    ...
                    <tooltip_1.Tooltip text="left" position="left"><p>Lorem Ipsum.</p></tooltip_1.Tooltip>
                    ...
                    <tooltip_1.Tooltip text="bottom" position="bottom"><p>Lorem Ipsum.</p></tooltip_1.Tooltip>
                    ...
                    <tooltip_1.Tooltip text="right" position="right"><p>Lorem Ipsum.</p></tooltip_1.Tooltip>
                </div>

                <div>
                    It can also be generated with custom HTML async its contents.
                    <tooltip_1.Tooltip containerWidth="100px" html={<h1>HTML</h1>} position="right">
                        <p>Lorem Ipsum. pew pew brap brap</p>
                    </tooltip_1.Tooltip>

                    <tooltip_1.Tooltip html={<helpers_1.Button>A tooltip on a button</helpers_1.Button>} position="bottom">
                        <p>Lorem Ipsum.</p>
                    </tooltip_1.Tooltip>
                </div>
            </div>);
    };
    UIComponents.prototype.main = function () {
        return [
            this.modals(),
            this.avatars(),
            this.spinners(),
            this.cards(),
            this.tabs(),
            this.tooltips()
        ];
    };
    UIComponents.prototype.sidebar = function () {
        return (<div className="l-vmenu">
                <helpers_1.VMenuLink index={true}>← Home</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#modals">Modals</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#avatars">Avatars</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#spinners">Spinners</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#cards">Cards</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#tabs">Tabs</helpers_1.VMenuLink>
                <helpers_1.VMenuLink hash="#tooltips">Tooltips</helpers_1.VMenuLink>
            </div>);
    };
    return UIComponents;
}(page_1.StyleGuidePage));
exports.UIComponents = UIComponents;
