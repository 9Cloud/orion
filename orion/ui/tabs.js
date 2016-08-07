/*

Usage:

 <Tabs>
   <TabsMenu>
     <TabItem active={true} index={0}>Tab Active</TabItem>
     <TabItem active={true} index={1}>Tab Hover</TabItem>
     <TabItem active={true} index={2}>Tab Default</TabItem>
   </TabsMenu>

   <TabsPanel key={0} index={0}>Hello Active Tab</TabsPanel>
   <TabsPanel key={1} index={1}>Hello Hover Tab</TabsPanel>
   <TabsPanel key={2} index={2}>Hello Default Tab</TabsPanel>
 </Tabs>

 */

import React, {PropTypes} from 'react';

/** UI: Menu **/
export const TabsMenu = (props) => (
  <div className="tabui">
      {props.children}
  </div>
);

/** UI: Tab Menu Item **/
export class TabItem extends React.Component {
    static propTypes    = {enabled: React.PropTypes.bool, index: React.PropTypes.number.isRequired};
    static defaultProps = {enabled: true};
    static contextTypes = {
        parent: React.PropTypes.object
    };
    
    constructor(props) {
        super(props);
        this.select_tab = this.select_tab.bind(this);
    }
    
    select_tab() {
        this.context.parent.show_tab(this.props.index);
    }
    
    render() {
        let classes   = '';
        let parent    = this.context.parent;
        let is_active = parent.is_active_tab(this.props.index);
        let tab_index = this.props.enabled ? (this.props.index + 1) : -1; // +1 because in chrome tabindex 1 is the URL window
        classes += `tabui_item tabui_item--${is_active ? 'active' : 'default'}`;
        
        return (
          <li onClick={this.select_tab}
              onFocus={this.select_tab}
              className={classes}
              tabIndex={tab_index}>
              {this.props.children}
          </li>
        )
    }
}

/** UI: Panel **/
export class TabsPanel extends React.Component {
    static propTypes    = {index: React.PropTypes.number};
    static contextTypes = {
        parent: React.PropTypes.object
    };
    
    render() {
        let classes = '';
        classes += (this.context.parent.is_active_tab(this.props.index) ? '' : 'l-hidden');
        
        return (
          <div className={classes}>
              {this.props.children}
          </div>
        )
    }
}

/** Wrapper class for logic **/
export class Tabs extends React.Component {
    static childContextTypes = {
        parent: React.PropTypes.object
    };
    
    constructor(tabs) {
        super(tabs);
        this.tabs  = tabs;
        this.state = {
            'active_tab_index': 0
        }
    }
    
    show_tab(index) {
        this.setState({
            'active_tab_index': index
        })
    }
    
    is_active_tab(index) {
        return this.state.active_tab_index == index;
    }
    
    getChildContext() {
        return {parent: this}
    }
    
    render() {
        return (
          <div>
              {this.props.children}
          </div>
        )
    }
}

/* Async Tabs. Handles loading from others */
export class TabAsync {
    // tabs that support asynchronous loading
    // content is an array that holds the data
    // you can either use TabsPanel, and handle loading/hiding states yourself.
    // Or use TabsAsyncPanel ... which will show a loading icon during loading....
    constructor() {
        this.cache = {};
        this.state = {
            cache  : {},
            content: {}
        }
    }
    
    load_content(index) {
        if (this.content[index]) {
            return;
        }
        
        fetch(url, {method: 'GET', mode: 'cors', cache: 'default'})
          .then((response) => {
              if (response.ok) {
                  this.cache[url] = response;
                  this.on_success(index, response);
              }
              else {
                  this.on_failure(index, response);
              }
              
          })
    }
    
    on_success(index, response) {
        let content = this.state.content;
        let mime    = response.headers.get("content-type", "application/octet-stream");
        let data;
        
        switch (mime) {
            case 'text/plain':
                data = response.text();
                break;
            case 'application/json':
                data = response.json();
                break;
            case 'text/html':
                data = response.text();
                break;
            default:
                data = response.blob();
        }
        
        content[index] = {
            data   : data,
            mime   : mime,
            failed : false,
            loading: false
        };
        
        this.setState({content: content});
    }
    
    on_failure(index, response) {
        content[index] = {
            data   : null,
            failed : true,
            mime   : mime,
            loading: false
        };
    }
    
    render() {
        return (
          <Tabs onSelect={this.load_content.bind(this)}>
              <TabsMenu>
                  <TabItem active={true} index={0}>Tab Active</TabItem>
                  <TabItem active={true} index={1}>Tab Hover</TabItem>
                  <TabItem active={true} index={2}>Tab Default</TabItem>
              </TabsMenu>
              
              <TabsPanel key={0} index={0}>0 => Hello Active Tab</TabsPanel>
              <TabsPanel key={1} index={1}>
                  {content[1].data}
              </TabsPanel>
              <TabsPanel key={2} index={2}>2 => Hello Default Tab</TabsPanel>
          </Tabs>
        )
    }
}
