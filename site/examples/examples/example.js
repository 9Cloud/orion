import React from "react";
import {Presenter} from "tide/components";
import {Form, Input, Password, Checkbox} from "orion/ui/forms";
import {Button, Spacer} from "orion/ui/helpers";
import {Link} from "tide/router/link";

export class ExamplePage extends Presenter {
    render() {
        return (
          <div className="l-clearfix">
                <div className="l-col-gut-lg top_container">
                    <div className="breadcrumb_container l-col-8 breadcrumb_container">
                        <a href="" className="breadcrumb_link">Page 1</a>
                        <span className="icon-angle-right l-col-gut-sm"></span>
                        <a href="" className="breadcrumb_link l-col-gut-sm"> Page 2 </a>
                        <span className="icon-angle-right"></span>
                        <span className="current_pg l-col-gut-sm">Page 3</span>
                    </div>

                    <button className="l-btn l-col-2 l-col-offset-2">New <span className="icon-upload l-primary-light l-col-gut-sm"></span></button>
                </div>

                <div className="l-row-gut-2 l-col-gut-lg">
                    <p><a href="" className="l-text-link">Album title </a>uploaded by <a href="">Username</a></p>
                    <div>Album info <span className="icon-question"></span></div>
                </div>

                <div className="l-clearfix l-bgcolor--secondary--light l-border l-horizontal-display l-col-gut-lg l-row-gut-3">
                      <button className="l-btn">Download Album</button>
                      <p className="l-col-gut-sm">In Stream</p>

                    <div className="l-bgcolor--secondary--dark l-border">
                        <button className="icon-angle-left l-btn-ghost l-bgcolor--secondary--dark stream_navbtn"></button>
                        <div className="stream l-col-gut-sm l-border"><img src="http://lorempixel.com/70/70" alt=""/></div>
                        <div className="stream l-col-gut-sm l-border"><img src="http://lorempixel.com/70/70/people/3" alt=""/></div>
                        <div className="stream l-col-gut-sm l-border"><img src="http://lorempixel.com/70/70/people/4" alt=""/></div>
                        <div className="stream l-col-gut-sm l-border"><img src="http://lorempixel.com/70/70/people/2" alt=""/></div>
                        <button className="icon-angle-right l-btn-ghost l-bgcolor--secondary--dark stream_navbtn"></button>
                    </div>

                      <a href="" className="l-txt-link l-col-gut-lg">Switch to Blog View</a>
                      <button className="l-btn-ghost"><span className="icon-play l-secondary--light"></span>Play Slideshow</button>
                  </div>

              <div className="l-col-lg-8 l-col-gut-lg">
                <div>
                      <div className="l-row-gut-1">
                         <div className="l-col-4">
                             <button className="l-btn-secondary"><span className="icon-cog"></span> Edit</button>
                             <span className="l-spinner"></span>
                             <button className="l-btn-secondary">Sizes <span className="icon-chevron-thin-down"></span></button>
                         </div>
                          
                         <div className="l-horizontal-display">
                              <button className="l-btn-secondary icon-angle-left"></button>
                              <div className="l-col-gut-sm">Page <span className="current_img l-secondary--lighter">2</span> of <span>16</span></div>
                              <a href="" className="l-txt-link l-col-gut-sm">Go</a>
                              <button className="l-btn-secondary icon-angle-right"></button>
                          </div>
                      </div>

                      <figure className="l-bgcolor--secondary--darker l-box-shadow l-row-gut-1">
                          <img className="single_img" src="https://images.unsplash.com/photo-1468818519844-64bc429824de?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb" alt=""/>
                      </figure>

                      <div className="l-clearfix">
                          <a href="" className="l-txt-link l-col-4">Leave A Comment</a>
                          
                          <div className="l-col-5 l-horizontal-display">
                              <button className="l-btn-secondary icon-angle-left"></button>
                              <div className="l-col-gut-sm">Page <button className="current_img l-secondary--lighter">2</button> of <span>16</span></div>
                              <a href="" className="l-txt-link l-col-gut-sm">Go</a>
                              <button className="l-btn-secondary icon-angle-right"></button>
                          </div>

                          <a href="" className="l-white-link l-col-2 l-col-push-2">More Info</a>
                      </div>

                      <h3 class="l-row-gut-2">Recent Comments</h3>
                      <div className="comments_wrapper l-row-gut-3">
                          <div className="l-clearfix">
                            <img className="l-avatar l-col-2" src="http://lorempixel.com/70/70/people/2" alt=""/>
                            <div className="l-col-9 l-col-gut-md">
                                <h5 className="l-white-link">Username</h5>
                                <h3 className="l-date">June 17, 2015</h3>
                                <p className="l-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</p>
                            </div>
                          </div>

                          <div className="l-clearfix">
                             <img className="l-avatar l-col-2" src="http://lorempixel.com/70/70/people/2" alt=""/>
                              <div className="l-col-9 l-col-gut-md">
                                    <h5 className="l-white-link">Username</h5>
                                    <h3 className="l-date">June 17, 2015</h3>
                                    <p className="l-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</p>
                               </div>
                          </div>
                      </div>

                </div>

                <div>
                      <div className="l-row-gut-1">
                         <div className="l-col-4">
                             <button className="l-btn-secondary"><span className="icon-cog"></span> Edit</button>
                             <button className="l-btn-secondary">Sizes <span className="icon-chevron-thin-down"></span></button>
                         </div>

                          <div className="l-horizontal-display">
                              <button className="l-btn-secondary icon-angle-left"></button>
                              <div className="l-col-gut-sm">Page <span className="current_img l-secondary--lighter">2</span> of <span>16</span></div>
                              <a href="" className="l-txt-link l-col-gut-sm">Go</a>
                              <button className="l-btn-secondary icon-angle-right"></button>
                          </div>
                      </div>

                      <figure className="l-bgcolor--secondary--darker l-box-shadow l-row-gut-1">
                          <img className="single_img" src="https://images.unsplash.com/photo-1471705301355-ec78367a7b07?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1125&q=80&cs=tinysrgb" alt=""/>
                      </figure>

                      <div className="l-clearfix">
                          <a href="" className="l-txt-link l-col-4">Leave A Comment</a>

                          <div className="l-col-5 l-horizontal-display">
                              <button className="l-btn-secondary icon-angle-left"></button>
                              <div className="l-col-gut-sm">Page <button className="current_img l-secondary--lighter">2</button> of <span>16</span></div>
                              <a href="" className="l-txt-link l-col-gut-sm">Go</a>
                              <button className="l-btn-secondary icon-angle-right"></button>
                          </div>

                          <a href="" className="l-white-link l-col-2 l-col-push-2">More Info</a>
                      </div>
                  </div>
              </div>
              <div className="l-col-lg-4 l-col-gut-lg">
                  <div className="l-row-gut-1"><a href="" className="l-txt-link">Show annotation</a></div>
                  <button className="l-row-gut-1 l-btn-ghost">Add Annotation</button>
                  <div className="ad l-row-gut-3">Ad</div>
                  <div className="ad l-row-gut-3">Ad</div>
                  <div className="ad l-row-gut-3">Ad</div>
              </div>

          </div>
        )
    }
}
