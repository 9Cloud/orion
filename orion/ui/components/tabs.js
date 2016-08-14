/*

Usage:

 TabItem - The text to be displayed for the menu
 TabsPanel - the content to be revealed when a item is clicked
 TabsMenu - Presentational wrapper for tabs item. Can be omitted.
 Tabs - Supervising container
    - show_tab(index): will show a tab of this index
    - is_active_tab(index): returns true if tab of this index is visible

 <Tabs>
   <TabsMenu>
     <TabItem active={true} index={0}>Tab Active</TabItem>
     <TabItem index={1}>Tab Hover</TabItem>
     <TabItem index={2}>Tab Default</TabItem>
   </TabsMenu>

   <TabsPanel key={0} index={0}>Hello Active Tab</TabsPanel>
   <TabsPanel key={1} index={1}>Hello Hover Tab</TabsPanel>
   <TabsPanel key={2} index={2}>Hello Default Tab</TabsPanel>
 </Tabs>

 */
import {Component} from 'tide/components';
import React, {PropTypes} from "react";
import {observable, action, computed} from 'mobx';
import classNames from 'classnames/bind';

/** UI: Menu **/
export const TabsMenu = (props) => (
  <div className="tabui">
      {props.children}
  </div>
);

/** Wrapper class for logic **/
export class Tabs extends Component {
    @observable active_tab_index = 0;

    @action show_tab(index) {
        active_tab_index = index;
    }

    is_active_tab(index) {
        return this.active_tab_index == index;
    }

    render() {
        return (
          <div>
              {this.props.children}
          </div>
        )
    }
}

/** UI: Tab Menu Item **/
export class TabItem extends Component {
    static propTypes = {
        enabled: React.PropTypes.bool,
        index: React.PropTypes.number.isRequired
    };
    static defaultProps = {
        enabled: true
    };

    @computed get active(){
        return this.parent.is_active_tab(this.props.index);
    }

    @action select_tab(e) {
        e.preventDefault();
        this.parent.show_tab(this.props.index);
    }

    render() {
        if(!this.props.enabled){
            return this.render_disabled();
        }

        return this.render_enabeld();
    }

    render_enabled(){
        let classes = classNames({
            "tabui_item": true,
            "tabui_item--active": this.active,
        });

        // +1 because in chrome tabindex 1 is the URL window
        let tab_index = this.props.enabled ? (this.props.index + 1) : -1;

        return (
            <li onClick={this.select_tab}
                onFocus={this.select_tab}
                className={classes}
                tabIndex={tab_index}>
                {this.props.children}
            </li>
        )
    }

    render_diabled(){
        return (
            <li className="tabui_item tabui_item--disabled">
                {this.props.children}
            </li>
        )
    }
}

/** UI: Panel **/
export class TabsPanel extends Component {
    static propTypes = {
        index: React.PropTypes.number.isRequired
    };

    @computed get active(){
        return this.parent.is_active_tab(this.props.index);
    }

    render() {
        return (
            <div className={this.active ? "" : 'l-hidden'}>
                {this.props.children}
            </div>
        )
    }
}