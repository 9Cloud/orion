// React
import React, {PropTypes} from "react";
import {StyleGuidePage} from "orion/guide/layout";

export class Interactions extends StyleGuidePage {
    sidebar() {
        return (
          <ul>
              <li><a href="/"> ← Home </a></li>
              <li><a href="#states">States</a></li>
              <li><a href="#notices">Notices</a></li>
              <li><a href="#animations">Animations</a></li>
          </ul>
        )
    }

    main() {
        return (
          <div>
              <h1 className="section_title"><a name="states">States</a></h1>

              <div className="l-col-5">
                  <h3>Success</h3>
                  <div className="l-success l-bgcolor--ui-faded-green l-box-shadow"> Good job!</div>
                  <p className="l-success"> Good job!</p>
              </div>

              <div className="l-col-5 l-col-offset-1">
                  <h3> Error </h3>
                  <div className="l-error l-bgcolor--ui-faded-yellow l-box-shadow"> This is an error</div>
                  <p className="l-error"> This is an error </p>
              </div>

              <div className="l-clearfix">
                  <h3> Blank State </h3>
                  <p className="l-blank-state"> Sorry, no comments yet! </p>
              </div>
              <div>
                  <h1 className="section_title"><a name="notices"> Notices</a></h1>
                  <p className="l-notice"> Hello, this is a friendly notice. </p>
              </div>

              <div>
                  <h1 className="section_title"><a name="animations">Animations</a></h1>
                  <div className="icon-heartbeat"></div>
                  <div className="icon-heart"></div>
              </div>
          </div>
        )
    }

}
