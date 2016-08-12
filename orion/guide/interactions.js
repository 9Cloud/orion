// React
import React, {PropTypes} from "react";
import {StyleGuidePage} from "orion/guide/layout";
import {Button, Section, SubSection, Spacer, Icon, Notice, VMenuLink} from 'orion/ui/helpers';

export class Interactions extends StyleGuidePage {
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

    sidebar() {
        return (
            <div className="l-vmenu">
                <VMenuLink index={true}>← Home</VMenuLink>
                <VMenuLink hash="#states">States</VMenuLink>
                <VMenuLink hash="#notices">Notices</VMenuLink>
                <VMenuLink hash="#animations">Animations</VMenuLink>
            </div>
        )
    }
}
