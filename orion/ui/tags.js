import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observable, computed, action, map, autorunAsync} from "mobx";
import {observer} from "mobx-react";
import Promise from "bluebird";
import {FormItem} from "orion/ui/forms_lib/form_item";
import {Div, Spacer, ErrorText, Icon} from "orion/ui/helpers";
import classNames from "classnames/bind";
// UI


/*
 Tag types: default, blue, subtle

 <Tag type="blue" />

 Props
 - url
 - type
 - text

 */
const tag_class_name = (type) => {
    type = type ? type : 'default';
    return classNames({
        'l-tag': true,
        'l-tag--blue': type == 'blue',
        'l-tag--subtle': type == 'subtle'
    });
};

export const Tag = (props) => {
    let {tag, type, ...others} = props;
    return <div className={tag_class_name(type)} {...others}>{tag.text}</div>;
};

export const LinkedTag = (props) => {
    let {tag, type, ...others} = props;
    return <div className={tag_class_name(type)} {...others}><a href={tag.url}>{tag.text}</a></div>;
};

export const EditableTag = (props) => {
    let {tag, type, ...others} = props;
    const onClick = (e) => {
        e.preventDefault();
        props.remove_tag(tag);
    };
    return <div className={tag_class_name(type)} key={tag.text} onClick={onClick}>
        {tag.text}
        <Icon type="remove" />
    </div>
};
EditableTag.defaultProps = {
    type: "blue"
};

/*
 Renders a list of tags
 Expects prop 'tags' to contain a list of tags in the following shape:
 {'url': string, 'text': string}

 if editable, expects to be provided an onRemove prop that actually handles removing the tag from the list.
 */
export class TagList extends Component {
    static propTypes = {
        render_tag: React.PropTypes.func,
        remove_tag: React.PropTypes.func,
        tags: React.PropTypes.array.isRequired,
        editable: React.PropTypes.bool,
        linked: React.PropTypes.bool
    };

    static defaultProps = {
        tags: [],
        editable: false,
        linked: false
    };

    render_tag(tag) {
        let {linked, editable, render_tag} = this.props;

        if (render_tag){
            return render_tag(tag);
        }

        if (linked) {
            return <LinkedTag tag={tag}/>
        }
        if (editable) {
            return <EditableTag tag={tag} remove_tag={this.props.remove_tag}/>
        }
        return <Tag tag={tag}/>
    }

    render() {
        let {tags} = this.props;

        return (
            <ul>
                {tags.map((t, i) => <li key={i} className="l-inline">{this.render_tag(t)}</li>)}
            </ul>
        )
    }
}


export class TagModel {
    constructor(options) {
        this.id = options.id;
        this.text = options.text;
        this.url = options.url;
    }
}
/*
 Display a list of editable tags. If fetch_suggestions is given, it will also show a suggester block.

 Accepts tags as an array in the format of:
 [
 {key: ___, value: ___ }
 ]


 Accepts fetch_suggestions.
 This function must return a promise that resolves to an array of suggested tags in the format:
 [
 {key: ___, value: ___ }
 ]

 Focus

 - kept when you mouse over tab, or type in input, or focus into input

 */
export class EditableTagList extends FormItem {
    @observable tag_string = "";
    @observable focus = true;

    static propTypes = {
        min_suggestion_length: React.PropTypes.number,
        fetch_suggestions: React.PropTypes.func,
        delimeter: React.PropTypes.string,
        add_tags: React.PropTypes.func.isRequired,
        remove_tag: React.PropTypes.func.isRequired
    };

    static defaultProps = {
        type: "tag",
        initial_tags: [],
        min_suggestion_length: 3,
        delimeter: ","
    };


    register() {
        this.form.register(this.props.name, []);
    }

    @computed get tags(){
        return this.value;
    }

    // Helper
    split(tag_string) {
        return tag_string.split(this.props.delimeter).map((text) => text.trim()).filter((text) => text !== "")
    }

    // UI
    @action set_string(event) {
        this.take_focus();
        this.clear_errors();
        this.tag_string = event.target.value;
    }

    @action add_tags(tag_string) {
        this.props.add_tags(this.split(tag_string))
    }

    @action on_paste(event) {
        // If the tag string is empty add the pasted information as a tag
        // Otherwise, add it to the tag string
        event.preventDefault();
        this.clear_errors();

        const clipboardData = event.clipboardData || window.clipboardData;
        const clipboard_string = clipboardData.getData('text');
        if (this.tag_string.trim() == "") {
            this.add_tags(clipboard_string);
        }
        else {
            this.tag_string += clipboard_string;
        }
    }

    @action submit(event) {
        // Pressing enter or tab will add a tag
        if (event.key == 'Enter' || event.key == 'Tab') {
            event.preventDefault();
            event.stopPropagation();

            let tag_string = this.tag_string; // Dereference tag string since it is an observable
            this.add_tags(tag_string);
            this.tag_string = "";
        }

        // If the tag string is empty, backspace will remove the last added tag
        if (event.key == 'Backspace') {
            if (this.tag_string == "") {
                event.preventDefault();
                event.stopPropagation();

                let last_tag = this.tags[this.tags.length - 1];
                this.props.remove_tag(last_tag);
            }
        }
    }

    @action apply_suggestion(id, text) {
        this.tag_string = "";
        this.add_tags(text);
    }

    @action lose_focus() {
        this.focus = false;
    }

    @action take_focus() {
        this.focus = true;
    }

    render() {
        let suggester_visible = this.props.fetch_suggestions && this.focus;

        return (
            <div>
                {this.props.label ? <label>{this.props.label}</label> : ""}
                <Spacer />

                <div className="l-float-left">
                    <TagList tags={this.tags}
                             editable={true}
                             remove_tag={this.props.remove_tag}
                             render_tag={this.props.render_tag}
                    />
                </div>

                <div className="l-col-4 l-float-right"
                     onMouseLeave={this.lose_focus}
                     onMouseEnter={this.take_focus}>

                    <input className="l-input l-fullwidth" type="text"
                           placeholder={this.props.placeholder}
                           value={this.tag_string}
                           onChange={this.set_string}
                           onKeyDown={this.submit}
                           onPaste={this.on_paste}

                           onFocus={this.take_focus}
                    />

                    <Div hidden={!suggester_visible}>
                        <Suggester text={this.tag_string}
                                   onSelect={this.apply_suggestion}
                                   fetch={this.props.fetch_suggestions}/>
                    </Div>
                </div>

                <Spacer />
                {this.errors.map((err, i) => <ErrorText key={i}>{err.message}</ErrorText>)}
            </div>
        )
    }
}


export class Suggester extends Component {
    @observable cached_suggestions = map();
    @observable current_suggestions = [];
    @observable loading = false;
    @observable text = "";

    static propTypes = {
        min_suggestion_length: React.PropTypes.number,
        text: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        min_suggestion_length: 3
    };

    constructor(props) {
        super(props);
        autorunAsync(this.fetch);
    }

    fetch() {
        /**
         * Fetch suggestions from server. Will use props.fetch(this.text) to actually get the suggestions
         */
        let cache = this.cached_suggestions;
        console.info('checking...', this.text, this.text.length);

        if (this.loading) {
            console.debug('loading...', this.text);
            return Promise.resolve(false);
        }

        if (cache.has(this.text)) {
            console.debug('no need to check...', this.text);
            return Promise.resolve(true);
        }

        // Make request
        if (this.text.length > this.props.min_suggestion_length) {
            console.debug('fetching...', this.text);
            this.loading = true;
            let query = this.text;
            return this.props.fetch(this.text)
                .then(action("fetch-callback", (values) => {
                    // Set value into cache
                    cache.set(query, values);

                    console.debug('setting...', query);

                    this.current_suggestions = values;
                    this.loading = false;

                    return Promise.resolve(true);
                })).catch((err) => {
                    this.loading = false;
                    console.log(err);
                    return Promise.resolve(false);
                });
        }

        return Promise.resolve(false);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.text = nextProps.text.trim();
    }

    @computed get suggestions() {
        return this.current_suggestions;
    }

    render_suggestion() {
        let text_is_too_short = this.props.text.length < this.props.min_suggestion_length;

        if (text_is_too_short) {
            return <li>
                <Icon type="question"/>
                No suggestions. You must type at least {this.props.min_suggestion_length} characters...
            </li>
        }

        if (this.loading) {
            return <li><Icon type="spinner"/> Loading ...</li>
        }

        if (this.suggestions.length == 0) {
            return <li className="blank_state">No suggestions...</li>
        }

        return this.suggestions.map(({id, text}, index) => (
            <li onClick={(e) => this.props.onSelect(id, text)}
                key={index}>
                {text}
            </li>))
    }

    render() {
        if (this.text == "") {
            return <div></div>;
        }

        return (
            <div className="l-select-wrapper l-fullwidth">
                <div className="l-select-dd l-fullwidth" style={{display: 'block'}}>
                    <ul>
                        {this.render_suggestion()}
                    </ul>
                </div>
            </div>
        )
    }
}