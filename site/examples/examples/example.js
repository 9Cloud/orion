import React from "react";
import {Presenter} from "tide/components";
import {Form, Input, Password, Checkbox} from "orion/ui/forms";
import {Button, Spacer} from "orion/ui/helpers";
import {Link} from "tide/router/link";

export class ExamplePage extends Presenter {
    render() {
        return (
          <div className="l-clearfix">
                <div className="breadcrumb_container l-col-8 breadcrumb_list l-col-gut-lg">
                    <span><a href="" className="l-white-link">Page 1</a></span>
                    <span className="icon-angle-right l-col-gut-sm"></span>
                    <span><a href="" className="l-white-link l-col-gut-sm"> Page 2 </a></span>
                    <span className="icon-angle-right"></span>
                    <span><a className="current_pg l-txt-link l-col-gut-sm">Page 3</a></span>
                </div>

                <button className="l-btn l-col-1 l-col-offset-3">New</button>

                <div className="l-row-gut-2 l-col-gut-lg">
                    <p><a href="" className="l-text-link">Album title </a>uploaded by <a href="">Username</a></p>
                    <div>Album info <span class="icon-question"></span></div>
                </div>

                <div className="l-clearfix l-bgcolor--secondary--darker l-border l-horizontal-display l-col-gut-lg l-row-gut-3">
                      <button className="l-btn">Download Album</button>
                      In Stream
                      <div className="stream"><img src="http://lorempixel.com/70/70" alt=""/></div>
                      <div className="stream"><img src="http://lorempixel.com/70/70/people/3" alt=""/></div>
                      <div className="stream"><img src="http://lorempixel.com/70/70/people/4" alt=""/></div>
                      <div className="stream"><img src="http://lorempixel.com/70/70/people/2" alt=""/></div>
                      <a href="" className="l-txt-link">Switch to Blog View</a>
                      <button className="l-btn-ghost"> <span className="icon-play l-color--secondary--dark"></span>Play Slideshow</button>
                  </div>

                <div className="l-col-lg-8 l-col-gut-lg">
                      <div className="l-row-gut-1">
                         <div className="l-col-4">
                             <button className="l-btn-secondary"><span className="icon-cog"></span>Edit</button>
                             <span className="l-spinner"></span>
                             <button className="l-btn-secondary"><span className="icon-arrow-left"></span>Sizes</button>
                         </div>
                          
                          <div className="l-col-gut-md">
                              <button className="l-btn-secondary icon-angle-left l-col-gut-sm"></button>
                              Page <span className="img-current">2</span> of <span>16</span>
                              <a href="" className="l-txt-link">Go</a>
                              <button className="l-btn-secondary icon-angle-right l-col-gut-sm"></button>
                          </div>
                      </div>

                      <figure className="l-bgcolor--secondary--darker l-row-gut-1">
                          <img className="single_img" src="http://lorempixel.com/833/846" alt=""/>
                      </figure>

                      <div className="l-clearfix">
                          <a href="" className="l-txt-link l-col-4">Leave A Comment</a>
                          
                          <div className="l-col-5">
                              <button className="l-btn-secondary icon-angle-left l-col-gut-sm"></button>
                              Page <span className="img-current">2</span> of <span>16</span>
                              <a href="" className="l-txt-link">Go</a>
                              <button className="l-btn-secondary icon-angle-right l-col-gut-sm"></button>
                          </div>

                          <a href="" className="l-white-link l-col-3">More Info</a>
                      </div>

                      <h3>Recent Comments</h3>
                      <textarea className="l-textarea" name="" id="" cols="30" rows="10"></textarea>
                  </div>

              <div className="l-col-lg-3 l-col-offset-1">
                  <a href="" className="l-txt-link">Show annotation</a>
                  <button className="l-btn-ghost">Add Annotation</button>
                  <div className="ad l-row-gut-3">Ad</div>
                  <div className="ad l-row-gut-3">Ad</div>
                  <div className="ad l-row-gut-3">Ad</div>
              </div>
          </div>
        )
    }
}
