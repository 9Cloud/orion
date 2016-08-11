import {Component} from "tide/components";
import React, {PropTypes} from "react";
import {observer} from "mobx-react";


const values_to_color_code = /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;

export class FormDebugger extends Component {
    static contextTypes = {
        form: React.PropTypes.object
    };

    get form() {
        return this.context.form;
    }

    escapeHtmlEntities(str) {
        // No jQuery, so use string replace.
        return str
            .replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&quot;');
    }

    syntaxHighlight(json) {
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(values_to_color_code, (match) => {
            let cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }

            return `<span class="${cls}">${this.escapeHtmlEntities(match)}</span>`;
        });
    }

    stringify(value) {
        let html = this.syntaxHighlight(JSON.stringify(value));
        return <div dangerouslySetInnerHTML={{__html: html}}/>;
    }

    render_item(item){
        let [key, obj] = item;

        let component = obj.component;
        let value = (component ? component.toJS() : undefined) || obj.value;

        return <li key={key}>{key} => {this.stringify(value)} </li>
    }

    render() {
        return (
            <div className="debugger">
                <p>Debugging Info</p>
                <ul>
                    {this.context.form.items.map((item) => {
                        return this.render_item(item)
                    })}
                </ul>
            </div>
        )
    }
}

