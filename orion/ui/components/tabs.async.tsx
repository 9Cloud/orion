import * as React from "react";
import * as PropTypes from 'prop-types';

/* Async Tabs. Handles loading from others */
export class TabAsync {
    // // tabs that support asynchronous loading
    // // content is an array that holds the data
    // // you can either use TabsPanel, and handle loading/hiding states yourself.
    // // Or use TabsAsyncPanel ... which will show a loading icon during loading....
    // constructor() {
    //     this.cache = {};
    //     this.state = {
    //         cache: {},
    //         content: {}
    //     }
    // }
    //
    // load_content(index) {
    //     if (this.content[index]) {
    //         return;
    //     }
    //
    //     fetch(url, {method: 'GET', mode: 'cors', cache: 'default'})
    //         .then((response) => {
    //             if (response.ok) {
    //                 this.cache[url] = response;
    //                 this.on_success(index, response);
    //             }
    //             else {
    //                 this.on_failure(index, response);
    //             }
    //
    //         })
    // }
    //
    // on_success(index, response) {
    //     let content = this.state.content;
    //     let mime = response.headers.get("content-type", "application/octet-stream");
    //     let data;
    //
    //     switch (mime) {
    //         case 'text/plain':
    //             data = response.text();
    //             break;
    //         case 'application/json':
    //             data = response.json();
    //             break;
    //         case 'text/html':
    //             data = response.text();
    //             break;
    //         default:
    //             data = response.blob();
    //     }
    //
    //     content[index] = {
    //         data: data,
    //         mime: mime,
    //         failed: false,
    //         loading: false
    //     };
    //
    //     this.setState({content: content});
    // }
    //
    // on_failure(index, response) {
    //     content[index] = {
    //         data: null,
    //         failed: true,
    //         mime: mime,
    //         loading: false
    //     };
    // }
    //
    // render() {
    //     return (
    //         <Tabs onSelect={this.load_content.bind(this)}>
    //             <TabsMenu>
    //                 <TabItem active={true} index={0}>Tab Active</TabItem>
    //                 <TabItem active={true} index={1}>Tab Hover</TabItem>
    //                 <TabItem active={true} index={2}>Tab Default</TabItem>
    //             </TabsMenu>
    //
    //             <TabsPanel key={0} index={0}>0 => Hello Active Tab</TabsPanel>
    //             <TabsPanel key={1} index={1}>
    //                 {content[1].data}
    //             </TabsPanel>
    //             <TabsPanel key={2} index={2}>2 => Hello Default Tab</TabsPanel>
    //         </Tabs>
    //     )
    // }
}
