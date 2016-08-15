// React
import React, {PropTypes} from "react";
import {Component} from "tide/components";
import {StyleGuidePage} from "orion/guide/layout";
import {VirtualScroll} from "react-virtualized";
import {Blank} from "orion/ui/helpers";
import {RichCard} from "orion/ui/components";
import {Chance} from "chance";
//import {Chance} from 'chance';
import {Div, Button, Section, SubSection, Spacer, Icon, Notice, VMenuLink} from 'orion/ui/helpers';


export class VirtualScrollExample extends Component {
    overscanRowCount = 0;
    scrollToIndex = 0;
    rowCount = 100;
    rowHeight = 150;
    containerHeight = 500;

    render() {
        // InfiniteLoader wraps virtual scroll
        // scrollToIndex={this.scrollToIndex}
        //                 className={styles.VirtualScroll}
        return (
          <div>
              <VirtualScroll
                ref='VirtualScroll'

                height={this.containerHeight}
                width={1000}

                rowHeight={this.rowHeight}

                scrollToAlignment="auto"
                overscanRowCount={this.overscanRowCount}
                noRowsRenderer={this.empty_state}
                rowCount={this.rowCount}
                rowRenderer={this.render_row}

                scrollToIndex={10}
                onRowsRendered={this.onRowsRendered}
                onScroll={this.onScroll}
                estimatedRowSize={this.rowHeight}
              />
          </div>
        )
    }

    onScroll(){
        // do nothing
    }

    onRowsRendered({overscanStartIndex, overscanStopIndex, startIndex, stopIndex}){
        // Callback invoked with information about the slice of rows that were just rendered:
    }

    //rowClassName : can use to zebra stripe rows

    empty_state() {
        return (
          <Blank>
              Nothing here...
          </Blank>
        )
    }

    render_row({index, isScrolling}){
        if(isScrolling){
            return <div>
                Scrolling...
            </div>;
        }

        let chance = new Chance();
        let tags = [{text: chance.word()}, {text: chance.word()}, {text: chance.word()}];

        return (
          <div>
              <RichCard
                    image={`http://lorempixel.com/100/100/people/${index % 10}/`}
                    text={chance.name()}
                    subtext={chance.sentence({words: 5})}
                    tags={tags}
              />
          </div>
        )
    }
}

export class NavComponent extends StyleGuidePage {
    sidebar() {
        return (
            <div className="l-vmenu">
                <VMenuLink index={true}>← Home</VMenuLink>
            </div>
        )
    }

    navbar() {
        return (
            <div>
                <h1>Navigation Bar</h1>
                <header className="demo-header l-bgcolor--secondary--darker l-col-gut-lg l-clearfix">
                    <div className="pg-container">
                        <a href="/" className="logo l-float-left">Logo</a>
                        <nav>
                            <ul className="l-nav-list">
                                <li className="l-nav-item"><a href="">Item one</a>
                                    <ul className="nav-dropdown">
                                        <li>Item One</li>
                                        <li>Item Two</li>
                                        <li>Item Three</li>
                                        <li>Item Four</li>
                                    </ul>
                                </li>
                                <li className="l-nav-item"><a href="">Item two</a></li>
                                <li className="l-nav-item"><a href="">Item three</a></li>

                                <li className="l-nav-item"><a href="">Item four</a></li>
                                <li className="l-nav-item"><a href="">Item five</a></li>
                                <li className="l-nav-item"><a href="">Item six</a></li>
                                <li className="l-nav-item"><span className="icon-user"></span> Hello User</li>
                                <li className="l-nav-item"><a href="" className="icon-inbox"></a></li>
                                <li className="l-nav-item"><a href="" className="icon-bell"></a></li>
                                <li className="l-nav-item"><a href="" className="icon-flag"></a></li>
                                <li className="l-nav-item">
                                    <a href="" className="icon-cog"></a>
                                    <ul className="nav-dropdown">
                                        <li>Item One</li>
                                        <li>Item Two</li>
                                        <li>Item Three</li>
                                        <li>Item Four</li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }

    scrolling(){
        return (
          <div>
              <h1>Scrollers</h1>
              <VirtualScrollExample />
          </div>
        )
    }

    main() {
        return [
            this.navbar(),
            this.scrolling()
        ]
    }
}
