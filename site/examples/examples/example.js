import React from "react";
import ReactDOM from "react-dom";
import {Presenter, View} from "tide/components";
import {Div, Button, Section, SubSection, Spacer, Notice, VMenuLink, Blurb} from "orion/ui/helpers";
import {MarkdownEditor} from "orion/ui/forms/editor";
import {TagModel, TagListEditable} from "orion/ui/components";
import {Form, Input, TextArea, FormDebugger, Select, Checkbox, RadioGroup, FormItem} from "orion/ui/forms";
import {Link} from "tide/router/link";
import {action, computed, observable} from "mobx";

export class ExamplePage extends Presenter {

    render() {
        const pictures = [
            new Picture("/assets/images/wide/ball-sunset-field.jpg"),
            new Picture("/assets/images/faces/woman-scarf-eyes.jpg", true),
            new Picture("/assets/images/wide/sunset-panorama.jpg"),
            new Picture("/assets/images/people/woman-corn-field.jpg")
        ];

        return (
            <div className="l-clearfix">
                <div className="l-col-gut-md top_container l-clearfix">
                    <div className="breadcrumb_container l-col-8">
                        <a href="" className="breadcrumb_link">Community</a>
                        <span className="icon-chevron-thin-right l-col-gut-sm"></span>
                        <a href="" className="breadcrumb_link">Album</a>
                        <span className="icon-chevron-thin-right"></span>
                        <span className="current_pg l-col-gut-sm">Picture</span>
                    </div>

                    <button className="l-btn l-float-right">New <span
                        className="icon-upload l-primary-light l-col-gut-sm"></span></button>
                </div>

                <div className="l-row-gut-2 l-col-gut-md">
                    <img className="l-avatar l-float-left" src="http://lorempixel.com/60/60/people/2" alt=""/>
                    <div className="l-col-gut-md">
                        <p><a href="" className="l-text-link">Username </a>uploaded by <a href="">Album title</a></p>
                        <div>Album info <span className="icon-question"></span></div>
                    </div>
                </div>

               <PictureActionBar pictures={pictures} />

                <div className="l-col-lg-8 l-col-gut-md">
                    <PictureView picture={pictures[1]}/>
                    <PictureView picture={pictures[2]}/>
                    <PictureView picture={pictures[3]}/>
                </div>

                <div className="l-col-lg-4 l-col-gut-sm">
                    <Button color="ghost" size="small" className="l-row-gut-1">
                        <span className="icon-play l-secondary--light"></span>
                        Play Slideshow
                    </Button>
                    <div className="ad l-row-gut-1">Ad</div>
                    <div className="ad l-row-gut-1">Ad</div>
                    <div className="ad l-row-gut-1">Ad</div>
                </div>
            </div>
        )
    }
}

class PictureActionBar extends Presenter {
    @observable original_y = null;
    @observable glued = false;

    componentDidMount(){
        const node = ReactDOM.findDOMNode(this.refs.bar);
        this.original_y = node.getBoundingClientRect().top - window.pageYOffset;
        // node.getBoundingClientRect() can be used to find if thing is within viewport
        // if its a positive value but less than the viewport height?

        window.addEventListener("scroll", _ => {
            if(window.pageYOffset >= this.original_y){
                this.glued = true;
            }
            else{
                this.glued = false;
            }
        });
    }

    render(){
        let pictures = this.props.pictures;
        let style;
        if(this.glued){
            style = {
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 9000,
                width: "100vw"
            }
        }else{
            style = {position: 'static'};
        }

        return (
             <div ref="bar" style={style}
                    className="l-clearfix l-bgcolor--secondary--dark l-border--secondary--light--top l-border--secondary--light--bottom l-horizontal-display l-col-gut-md l-row-gut-3">
                    <Button size="small">Download Album</Button>

                    <p className="l-col-gut-md">In Stream</p>

                    <FilmStrip pictures={pictures}/>
                    <Pagination />
                </div>
        )
    }
}

class PictureView extends Presenter {
    @observable open = false;

    open_comment_form(e) {
        e.preventDefault()
        this.open = 'comment_form'
    }

    open_more_info(e) {
        e.preventDefault()
        this.open = 'more_info'
    }

    render() {
        let picture = this.props.picture;

        return (
            <div>
                <div className="l-row-gut-1 l-clearfix">
                    <div className="l-col-4">
                        <Button color="secondary" icon="cog">Edit</Button>
                    </div>
                </div>

                <figure className="l-bgcolor--secondary--darker l-box-shadow l-row-gut-1">
                    <img className="single_img"
                         src={picture.image}
                         alt=""/>
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

                <h3 class="l-row-gut-2">Recent Comments</h3>
                <CommentBlock />
            </div>
        )
    }
}

class CommentBlock extends View {
    @observable number_loaded = 3;
    @observable count = 10;

    @computed get all_loaded() {
        return this.number_loaded >= this.count;
    }

    @action load_more(event) {
        event.preventDefault();
        this.number_loaded = 10;
    }

    @computed get comments() {
        let comments = [];
        for (let i = 1; i <= this.number_loaded; i++) {
            comments.push({
                'avatar': `/assets/images/faces/cropped/${i}.jpg`
            })
        }
        return comments;
    }

    render() {
        let number_unloaded = 10;

        return (
            <div className="comments_wrapper l-row-gut-4">
                {
                    this.comments.map(comment => <Comment comment={comment}/>)
                }
                {
                    this.all_loaded
                        ? ""
                        : <div className="l-center-txt">
                        <a onClick={this.load_more} href="" className="l-txt-link">
                            Load {number_unloaded} more
                        </a>
                    </div>
                }
            </div>
        )
    }
}

const Pagination = (props) => {
    return (
        <div className="l-center-txt l-horizontal-display">
            <div className="l-col-gut-sm">Page
                <button className="current_img l-secondary--lighter">2</button>
                of <span>16</span></div>
            <a href="" className="l-txt-link l-col-gut-sm">Go</a>
        </div>
    )
}


class AddCommentForm extends Presenter {
    submit() {
        alert("This would submit if it were a real app!")
    }

    render() {
        return (
            <Form ref="form">
                <MarkdownEditor ref="message" name="message" placeholder="Write here..." className="l-row-gut-1"/>
                <Div float="right">
                    <Button onClick={this.submit}>Submit</Button>
                </Div>
            </Form>
        )
    }
}

class MoreInfo extends Presenter {
    render() {
        return (
            <div>
                <div><strong>Resolution:</strong> Awesome x Amazing!</div>
                <div><strong>Created By:</strong> Someone So Cool!</div>
                <div><strong>In</strong> The very best community</div>
                <div><strong>Addendum:</strong> Like totally...</div>

                <Form>
                    <PictureTagger label="Tags" name="picture_tags"/>
                </Form>
            </div>
        )
    }
}


export class PictureTagger extends FormItem {
    fake_suggestions(_text) {
        return Promise.resolve([
            new TagModel({id: 1, text: "Ron", url: "/users/Ron"}),
            new TagModel({id: 1, text: "Toby", url: "/users/Toby"}),
            new TagModel({id: 1, text: "Kekeli", url: "/users/Kekeli"}),
            new TagModel({id: 1, text: "Kay", url: "/users/Kay"})
        ])
    }

    @computed get tags() {
        return this.value;
    }

    @action add_tags(tag_array) {
        for (let tag_text of tag_array) {
            if (this.tags.includes(tag_text)) {
                this.add_error(`${tag_text}: this user has already been added`);
                continue;
            }
            this.tags.push({
                text: tag_text
            });
        }
    }

    @action remove_tag(tag) {
        this.clear_errors();
        let tags = this.tags.filter((t) => t.text != tag.text);
        this.set_value(tags);
    }

    render() {
        return (
            <div>
                <TagListEditable
                    name={this.props.name}
                    label={this.props.label}
                    fetch_suggestions={this.fake_suggestions}
                    add_tags={this.add_tags}
                    remove_tag={this.remove_tag}
                />
            </div>
        )
    }
}

class Picture {
    constructor(src, current = false) {
        this.image = src;
        this.current = current;
    }
}
class FilmStrip extends View {
    @computed get pictures() {
        return this.props.pictures;
    }

    render() {
        return (
            <div className="stream_wrapper l-bgcolor--secondary--darker">
                <Button color="ghost" className="icon-chevron-thin-left stream_navbtn"/>
                {
                    this.pictures.map(p => (
                        <div className={`stream l-col-gut-half ${p.current ? 'current_in_stream' : ''}`}>
                            <img className="l-border stream_img" src={p.image} alt=""/>
                        </div>
                    ))
                }
                <Button color="ghost" className="icon-chevron-thin-right stream_navbtn"/>
            </div>
        )
    }
}
const Comment = (props) => {
    let comment_class = '';
    let comment = props.comment;

    if (props.collapsed) {
        comment_class = 'l-txt--quiet';
    }
    return (
        <div className="l-clearfix l-card--comments">
            <img className="l-avatar l-col-1" src={comment.avatar} alt=""/>
            <div className="l-col-2 l-col-gut-md">
                <p className="l-white-link">Username</p>
                <p className="l-date">June 17, 2015</p>
            </div>

            <p className={`l-col-8 ${comment_class}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
            </p>
        </div>
    )
};