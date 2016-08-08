import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {extendObservable, observable, computed, whyRun, action, map, autorun, autorunAsync} from 'mobx';
import {observer} from "mobx-react";
import Promise from 'bluebird';

// UI
import {
  Div,
  Button,
  Spacer,
  Blank,
  Notice,
  Error,
  Success,
  Icon,
  MarkDown,
  LoadingDiv,
  LoadingDivLarge
} from 'orion/ui/helpers';

import {Tag} from 'orion/ui/tags';
import {Component, Provider} from 'tide/components';
import classNames from 'classnames/bind';
import {ProseMirror} from "prosemirror/dist/edit";
import {elt} from "prosemirror/dist/util/dom";
import {defaultMarkdownParser, defaultMarkdownSerializer} from "prosemirror/dist/markdown";
import {schema} from "prosemirror/dist/schema-basic";
import {exampleSetup} from "prosemirror/dist/example-setup";
// import {menu} from 'prosemirror/dist/menu/menubar'

import markdown_it from 'markdown-it';

export class MarkdownEditor extends Component {
    constructor(props) {
        super(props);
    }
    
    static defaultProps = {
        initial_content: ""
    };
    
    componentDidMount() {
        this.pm = new ProseMirror({
            place  : this.refs.editor,
            doc    : defaultMarkdownParser.parse(this.props.initial_content),
            plugins: [
                exampleSetup.config({
                    menuBar    : false,
                    tooltipMenu: true
                })
            ]
        });
    }
    
    markdown() {
        return defaultMarkdownSerializer.serialize(this.pm.doc);// return markdown text
    }
    
    from_markdown(content) {
        return defaultMarkdownParser.parse(content); // return a schema
    }
    
    render() {
        return (
          <div ref="editor"></div>
        )
    }
}

// Output Markdown
export class MarkdownText extends Component {
    static propTypes = {
        text: React.PropTypes.string.isRequired
    };
    
    convert(content) {
        let md = markdown_it({
            html      : false,
            linkify   : true,
            typography: true
        });
        
        //md.use(plugin, options)
        return {__html: md.render(content)}
    }
    
    render() {
        let raw_markup = this.convert(this.props.text)
        return <div className="markdown" dangerouslySetInnerHTML={raw_markup}/>;
    }
}