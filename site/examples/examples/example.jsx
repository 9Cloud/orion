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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var components_1 = require("orion/ui/components");
var cards_1 = require("orion/ui/components/cards");
var forms_1 = require("orion/ui/forms");
var editor_1 = require("orion/ui/forms/editor");
var helpers_1 = require("orion/ui/helpers");
var React = require("react");
var ReactDOM = require("react-dom");
var tide_1 = require("tide");
var TagModel = (function () {
    function TagModel(options) {
        this.id = options.id;
        this.text = options.text;
        this.url = options.url;
    }
    return TagModel;
}());
var ExamplePage = (function (_super) {
    __extends(ExamplePage, _super);
    function ExamplePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExamplePage.prototype.render = function () {
        var pictures = [
            new Picture("/assets/images/wide/ball-sunset-field.jpg"),
            new Picture("/assets/images/faces/woman-scarf-eyes.jpg", true),
            new Picture("/assets/images/wide/sunset-panorama.jpg"),
            new Picture("/assets/images/people/woman-corn-field.jpg")
        ];
        return (<div className="l-clearfix">
                <div className="l-col-gut-md top_container l-row-gut-1 l-clearfix">
                    <div className="breadcrumb_container l-col-8">
                        <a href="" className="breadcrumb_link">Community</a>
                        <span className="icon-chevron-thin-right l-col-gut-sm"></span>
                        <a href="" className="breadcrumb_link">Album</a>
                        <span className="icon-chevron-thin-right"></span>
                        <span className="current_pg l-col-gut-sm">Picture</span>
                    </div>
                    <helpers_1.Button icon="upload" className="l-float-right">New</helpers_1.Button>
                </div>
                <div className="l-row-gut-2 l-col-gut-md">
                    <cards_1.UserCard avatar="/assets/images/faces/cropped/1.jpg">
                        <div className="l-row-gut-half"><a href="" className="l-text-link">Username </a>uploaded <a href="">Album title</a></div>
                        <div>Album info <span className="icon-question"></span></div>
                    </cards_1.UserCard>
                </div>

                <PictureActionBar pictures={pictures}/>

                <div className="l-col-lg-8 l-col-gut-md">
                    <PictureView picture={pictures[1]}/>
                    <PictureView picture={pictures[2]}/>
                    <PictureView picture={pictures[3]}/>
                </div>

                <div className="l-col-lg-4 l-col-gut-sm">
                    <helpers_1.Button color="ghost" size="small" className="l-row-gut-1" icon="play" iconcolor="neutral">Play Slideshow
                    </helpers_1.Button>

                    <div className="ad l-row-gut-1">Ad</div>
                    <div className="ad l-row-gut-1">Ad</div>
                    <div className="ad l-row-gut-1">Ad</div>
                </div>
            </div>);
    };
    return ExamplePage;
}(tide_1.Presenter));
exports.ExamplePage = ExamplePage;
var PictureActionBar = (function (_super) {
    __extends(PictureActionBar, _super);
    function PictureActionBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.original_y = null;
        _this.glued = false;
        return _this;
    }
    PictureActionBar.prototype.componentDidMount = function () {
        var _this = this;
        var node = ReactDOM.findDOMNode(this.refs.bar);
        this.original_y = node.getBoundingClientRect().top - window.pageYOffset;
        // node.getBoundingClientRect() can be used to find if thing is within viewport
        // if its a positive value but less than the viewport height?
        window.addEventListener("scroll", function (_) {
            if (window.pageYOffset >= _this.original_y) {
                _this.glued = true;
            }
            else {
                _this.glued = false;
            }
        });
    };
    PictureActionBar.prototype.render = function () {
        var pictures = this.props.pictures;
        var style;
        if (this.glued) {
            style = {
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 9000,
                width: "100vw"
            };
        }
        else {
            style = { position: 'static' };
        }
        return (<div ref="bar" style={style} className="l-clearfix l-bgcolor--secondary--dark l-border--secondary--light--top l-border--secondary--light--bottom l-horizontal-display l-col-gut-md l-row-gut-3">
                <a href="#" className="l-col-gut-sm">Album Title</a>
                <p className="l-col-gut-md stream_title">In Stream</p>
                <FilmStrip pictures={pictures}/>
                <Pagination />

                <div className="l-col-gut-lg">
                    <helpers_1.Button size="small" className="stream_download_btn">Download Album</helpers_1.Button>
                </div>
            </div>);
    };
    return PictureActionBar;
}(tide_1.Presenter));
__decorate([
    mobx_1.observable
], PictureActionBar.prototype, "original_y", void 0);
__decorate([
    mobx_1.observable
], PictureActionBar.prototype, "glued", void 0);
var PictureView = (function (_super) {
    __extends(PictureView, _super);
    function PictureView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.open = '';
        return _this;
    }
    PictureView.prototype.open_comment_form = function (e) {
        e.preventDefault();
        if (this.open == 'comment_form') {
            this.open = '';
        }
        else {
            this.open = 'comment_form';
        }
    };
    PictureView.prototype.open_more_info = function (e) {
        e.preventDefault();
        if (this.open == 'more_info') {
            this.open = '';
        }
        else {
            this.open = 'more_info';
        }
    };
    PictureView.prototype.render = function () {
        var picture = this.props.picture;
        return (<div>
                <div className="l-row-gut-1 l-clearfix">
                    <div className="l-col-4">
                        <helpers_1.Button color="secondary" icon="cog">Edit</helpers_1.Button>
                    </div>
                </div>

                <figure className="l-bgcolor--secondary--darker l-box-shadow l-row-gut-1">
                    <img className="single_img" src={picture.image} alt=""/>
                </figure>

                <div className="l-clearfix">
                    <a onClick={this.open_comment_form} href="" className="l-txt-link l-col-4">Leave A Comment</a>
                    <div className="l-align-right">
                        <a href="" onClick={this.open_more_info} className="l-white-link">More Info</a>
                    </div>
                </div>

                <div>
                    {this.open == 'comment_form' ? <AddCommentForm /> : ""}
                    {this.open == 'more_info' ? <MoreInfo /> : ""}
                </div>

                <h3 className="l-row-gut-2">Recent Comments</h3>
                <CommentBlock />
            </div>);
    };
    return PictureView;
}(tide_1.Presenter));
__decorate([
    mobx_1.observable
], PictureView.prototype, "open", void 0);
var CommentBlock = (function (_super) {
    __extends(CommentBlock, _super);
    function CommentBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.number_loaded = 3;
        _this.count = 10;
        return _this;
    }
    Object.defineProperty(CommentBlock.prototype, "all_loaded", {
        get: function () {
            return this.number_loaded >= this.count;
        },
        enumerable: true,
        configurable: true
    });
    CommentBlock.prototype.load_more = function (event) {
        event.preventDefault();
        this.number_loaded = 10;
    };
    Object.defineProperty(CommentBlock.prototype, "comments", {
        get: function () {
            var comments = [];
            for (var i = 1; i <= this.number_loaded; i++) {
                comments.push({
                    'avatar': "/assets/images/faces/cropped/" + i + ".jpg"
                });
            }
            return comments;
        },
        enumerable: true,
        configurable: true
    });
    CommentBlock.prototype.render = function () {
        var number_unloaded = 10;
        return (<div className="comments_wrapper l-row-gut-4">
                {this.comments.map(function (comment) { return <Comment comment={comment}/>; })}
                {this.all_loaded
            ? ""
            : <div className="l-center-txt">
                            <a onClick={this.load_more} href="" className="l-txt-link">
                                Load {number_unloaded} more
                            </a>
                        </div>}
            </div>);
    };
    return CommentBlock;
}(tide_1.View));
__decorate([
    mobx_1.observable
], CommentBlock.prototype, "number_loaded", void 0);
__decorate([
    mobx_1.observable
], CommentBlock.prototype, "count", void 0);
__decorate([
    mobx_1.computed
], CommentBlock.prototype, "all_loaded", null);
__decorate([
    mobx_1.action
], CommentBlock.prototype, "load_more", null);
__decorate([
    mobx_1.computed
], CommentBlock.prototype, "comments", null);
var Pagination = function (props) {
    return (<div className="l-center-txt l-horizontal-display">
            <div className="l-col-gut-sm">
                Page
                <button className="current_img l-secondary--lighter"> 2</button>
                of <span> 16</span>
            </div>
            <a href="" className="l-txt-link l-col-gut-sm">Go</a>
        </div>);
};
var AddCommentForm = (function (_super) {
    __extends(AddCommentForm, _super);
    function AddCommentForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddCommentForm.prototype.submit = function () {
        alert("This would submit if it were a real app!");
    };
    AddCommentForm.prototype.render = function () {
        return (<forms_1.Form ref="form">
                <editor_1.MarkdownEditor ref="message" name="message" placeholder="Write here..." className="l-row-gut-1"/>
                <helpers_1.Div float="right">
                    <helpers_1.Button onClick={this.submit}>Submit</helpers_1.Button>
                </helpers_1.Div>
            </forms_1.Form>);
    };
    return AddCommentForm;
}(tide_1.Presenter));
var MoreInfo = (function (_super) {
    __extends(MoreInfo, _super);
    function MoreInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoreInfo.prototype.render = function () {
        return (<div className="l-border l-col-gut-md">
                <p><strong>Resolution:</strong> Awesome x Amazing!</p>
                <p><strong>Created By:</strong> <a href="">Username</a></p>
                <p><strong>In:</strong> <a href="">The very best community</a></p>
                <p><strong>Addendum:</strong> Like totally...</p>

                <forms_1.Form>
                    <PictureTagger label="Tags" name="picture_tags"/>
                </forms_1.Form>
            </div>);
    };
    return MoreInfo;
}(tide_1.Presenter));
var PictureTagger = (function (_super) {
    __extends(PictureTagger, _super);
    function PictureTagger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PictureTagger.prototype.fake_suggestions = function (_text) {
        return Promise.resolve([
            new TagModel({ id: 1, text: "Ron", url: "/users/Ron" }),
            new TagModel({ id: 1, text: "Toby", url: "/users/Toby" }),
            new TagModel({ id: 1, text: "Kekeli", url: "/users/Kekeli" }),
            new TagModel({ id: 1, text: "Kay", url: "/users/Kay" })
        ]);
    };
    Object.defineProperty(PictureTagger.prototype, "tags", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    PictureTagger.prototype.add_tags = function (tag_array) {
        for (var _i = 0, tag_array_1 = tag_array; _i < tag_array_1.length; _i++) {
            var tag_text = tag_array_1[_i];
            if (this.tags.includes(tag_text)) {
                this.add_error(tag_text + ": this user has already been added");
                continue;
            }
            this.tags.push({
                text: tag_text
            });
        }
    };
    PictureTagger.prototype.remove_tag = function (tag) {
        this.clear_errors();
        var tags = this.tags.filter(function (t) { return t.text != tag.text; });
        this.set_value(tags);
    };
    PictureTagger.prototype.render = function () {
        return (<div>
                <components_1.TagListEditable name={this.props.name} label={this.props.label} fetch_suggestions={this.fake_suggestions} add_tags={this.add_tags} remove_tag={this.remove_tag}/>
            </div>);
    };
    return PictureTagger;
}(forms_1.FormItem));
__decorate([
    mobx_1.computed
], PictureTagger.prototype, "tags", null);
__decorate([
    mobx_1.action
], PictureTagger.prototype, "add_tags", null);
__decorate([
    mobx_1.action
], PictureTagger.prototype, "remove_tag", null);
exports.PictureTagger = PictureTagger;
var Picture = (function () {
    function Picture(src, current) {
        if (current === void 0) { current = false; }
        this.image = src;
        this.current = current;
    }
    return Picture;
}());
var FilmStrip = (function (_super) {
    __extends(FilmStrip, _super);
    function FilmStrip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FilmStrip.prototype, "pictures", {
        get: function () {
            return this.props.pictures;
        },
        enumerable: true,
        configurable: true
    });
    FilmStrip.prototype.render = function () {
        return (<div className="stream_wrapper l-bgcolor--secondary--darker">
                <helpers_1.Button color="ghost" className="icon-chevron-thin-left stream_navbtn"/>
                {this.pictures.map(function (p) { return (<div className={"stream l-col-gut-half " + (p.current ? 'current_in_stream' : '')}>
                            <img className="l-border stream_img" src={p.image} alt=""/>
                        </div>); })}
                <helpers_1.Button color="ghost" className="icon-chevron-thin-right stream_navbtn"/>
            </div>);
    };
    return FilmStrip;
}(tide_1.View));
__decorate([
    mobx_1.computed
], FilmStrip.prototype, "pictures", null);
var Comment = function (props) {
    var comment_class = '';
    var comment = props.comment;
    if (props.collapsed) {
        comment_class = 'l-txt--quiet';
    }
    return (<cards_1.CommentCard avatar="/assets/images/faces/cropped/3.jpg">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</p>
        </cards_1.CommentCard>);
};
