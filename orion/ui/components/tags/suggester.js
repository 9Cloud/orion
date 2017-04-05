import {Presenter, View} from "tide/components";
import React from "react";
import {observable, computed, action, map, reaction} from "mobx";
import * as mobxReact from "mobx-react";
import {Icon} from "orion/ui/helpers";
import {InputDropdown} from "orion/ui/fragments/input_dropdown";


// Status Constants
const OK = 100;
const TEXT_TOO_SHORT = 200;
const LOADING = 300;


export class Suggester extends Presenter {
    @observable cached_suggestions = map();
    @observable current_suggestions = [];
    @observable loading = false;
    @observable text = "";

    debounce_for_ms = 300;
    fetch_process = null;

    static propTypes = {
        min_suggestion_length: React.PropTypes.number,
        text: React.PropTypes.string.isRequired,
        on_change: React.PropTypes.func.isRequired
    };

    static defaultProps = {
        min_suggestion_length: 3
    };

    constructor(props) {
        super(props);
        this.fetch_process = reaction(() => this.text, this.fetch, false, this.debounce_for_ms)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.text = nextProps.text.trim();
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        if (this.fetch_process) {
            this.fetch_process();
            this.fetch_process = null;
        }
    }

    @action fetch(query_text) {
        /**
         * Fetch suggestions from server. Will use props.fetch(this.text) to actually get the suggestions
         */
        let cache = this.cached_suggestions;

        // A request is already in flight
        if (this.loading) {
            return Promise.resolve(false);
        }
        // Cache Exists
        if (cache.has(query_text)) {
            return Promise.resolve(true);
        }

        // Make request for new data
        if (query_text.length > this.props.min_suggestion_length) {
            this.loading = true;
            return this.props.fetch(query_text)
                .then(action("fetch-callback", (values) => {
                    // Set value into cache
                    cache.set(query_text, values);
                    this.current_suggestions = values;
                    this.loading = false;

                    return Promise.resolve(true);
                })).catch((err) => {
                    // Error Condition
                    this.loading = false;
                    console.log(err);
                    return Promise.resolve(false);
                });
        }

        return Promise.resolve(false);
    }

    @computed get suggestions() {
        return this.current_suggestions;
    }

    @computed get status(){
        if(this.text.length < this.props.min_suggestion_length){
            return TEXT_TOO_SHORT;
        }
        if(this.loading){
            return LOADING;
        }
        return OK;
    }

    render() {
        if (this.text == "") return <div></div>;

        return (
            <SuggestionDropdown
                suggestions={this.suggestions}
                status={this.status}
                on_change={this.props.on_change}
                min_suggestion_length={this.props.min_suggestion_length}
            />)
    }
}


export class SuggestionDropdown extends View {
    static propTypes = {
        suggestions: mobxReact.PropTypes.arrayOrObservableArrayOf(React.PropTypes.shape({
            id: React.PropTypes.number,
            text: React.PropTypes.string
        })).isRequired,
        min_suggestion_length: React.PropTypes.number.isRequired,
        on_change: React.PropTypes.func.isRequired,
        status: React.PropTypes.oneOf([OK, TEXT_TOO_SHORT, LOADING]),

        //render_suggestions: React.PropTypes.func,
    };

    clicked_suggestion(item, e) {
        this.props.on_change(e, item);
    }

    render_suggestions() {
        const {status, suggestions} = this.props;

        if (status == TEXT_TOO_SHORT) {
            return <li>
                <Icon type="question"/>
                No suggestions. You must type at least {this.props.min_suggestion_length} characters...
            </li>
        }

        if (status == LOADING) {
            return <li><Icon type="spinner"/> Loading ...</li>
        }

        if (suggestions.length == 0) {
            return <li className="l-blank-state">No suggestions...</li>
        }

        return suggestions.map((item, index) => (
            <li onClick={this.clicked_suggestion.bind(this, item)}
                key={index}>
                {item.text}
            </li>))
    }

    render() {
        return (
            <InputDropdown>{this.render_suggestions()}</InputDropdown>
        )
    }
}
