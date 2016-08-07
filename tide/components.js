import {observer} from 'mobx-react';
import React, {Component as ReactComponent} from 'react';
import ReactDom from 'react-dom';
import * as utils from "./utils";

var defaultContextTypes = {
    // Tide Bubbling
    parent: React.PropTypes.object,
    // Context provided by router (e.g. react-router or others)
    router: React.PropTypes.object,
    
    // Application specific
    app: React.PropTypes.object,
    state : React.PropTypes.object,
    store : React.PropTypes.object,
    cache : React.PropTypes.object,
    user  : React.PropTypes.object
};


class TideEvent {
    /*
     - name: what is this event called
     -  currentTarget—- representing whom the event handler has attached to (basically this if your event is being handled by the function you are in).
     - target: who dispatched the event
     — detail: some details about event (e.g. current click count)
     - bubbles: does this bubble up through the DOM
     - cancelable: can we cancel this?
     - timeStamp
     */
    
    constructor(name, target, details) {
        this.name    = name;
        this.target  = target;
        this.details = details;
        
        this.bubbles    = true;
        this.cancelable = false;
    }
    
    stopPropagation() {
        this.bubbles = false;
    }
    
    allowPropagation() {
        this.bubbles = true;
    }
}

export const MobxObserver = observer(ReactComponent);

export class Component extends MobxObserver {
    constructor(props) {
        /*
         We're subclassing something so the displayName = MiddleC thanks to Mobservable munging.
         So lets set the displayName back to what it's supposed to be.
         */
        super(props);
        utils._bindAll(this);
        this.__proto__.constructor.displayName = this.__proto__.constructor.name;
    }
    
    getChildContext() {
        // Return merged context w/ this as the parent
        // return {...this.context, ...{parent: this}};
        return {parent: this};
    }
    
    // Not supported in IE8. IE8 support has been dropped from React 0.15+
    get parent() {
        return this.getParent();
    }
    
    // IE8 Support
    getParent() {
        return this.context.parent;
    }
    
    trigger(eventName, details = {}) {
        let e = new TideEvent(eventName, this, details);
        this.handleEvents(e)
    }
    
    handleEvents(e) {
        e.currentTarget = this;
        let value       = null;
        
        if (e.name in this) {
            console.log('Calling ', e.name, ' on ', this);
            value = this[e.name].call(this, e);
        }
        if (e.bubbles) {
            const parent = e.currentTarget.parent;
            
            if (parent == undefined && parent == null) {
                console.log('Terminal ', e.name, ' on ', this.constructor.name);
            }
            else {
                console.log('Bubbling ', e.name, ' on ', this.constructor.name, ' --> ', parent);
                parent.handleEvents(e);
            }
        }
        
        return value;
    }
}

Component.contextTypes      = defaultContextTypes;
Component.childContextTypes = defaultContextTypes;


export class ApplicationComponent extends Component {
    constructor(props) {
        /*
         We're subclassing something so the displayName = MiddleC thanks to Mobservable munging.
         So lets set the displayName back to what it's supposed to be.
         */
        super(props);
        utils._bindAll(this);
        this.__proto__.constructor.displayName = this.__proto__.constructor.name;
    }
    
    
    /*
    Return a url of a given name
    
    Usage: this.context.app.url('some_key', value)
    */
    url(name, ...params) {
        let i         = 0;
        const pattern = this.urls[name];
        
        const result  = pattern.replace(/(:\w+)/ig, (match) => {
            const value = params[i];
            i = i + 1;
            return value;
        });
        
        if (!result) {
            throw `URL reverse: Could not find a match for ${name}`
        }
        
        return result
    }
    
    getChildContext() {
        let store = this.store || this.context.store;
        let state = store.state;
        return {
            parent: this,
            app   : this,
            
            state : state,
            store : store,
            
            cache : this.cache,
            user  : store.user
        };
    }
}

export class Provider extends Component {
    constructor(props) {
        super(props);
    }
    
    getChildContext() {
        // Return merged context w/ this as the parent
        return {...this.props.context, ...{parent: this}};
    }
    
    render() {
        return this.props.children;
    }

}

export default Component;