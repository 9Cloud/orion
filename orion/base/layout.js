// React
import React, {PropTypes} from "react";
import {Component} from "tide/components";
import {Header} from "orion/base/header";

export class StyleGuidePage extends Component {
    render() {
        return (
          <div>
              <Header />

              <div className="l-clearfix l-row-gut-4"></div>

              <div className="pg-container">
                  <div className="l-sidebar l-col-lg-3">
                      {this.sidebar()}
                  </div>

                  <div className="l-col-lg-9">
                      {this.main()}
                  </div>
              </div>
          </div>
        )
    }
}