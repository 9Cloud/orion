// React
import React, {PropTypes} from "react";
import {StyleGuidePage} from "orion/guide/layout";
import {Div, Button, Section, SubSection, Spacer, Icon, VMenuLink} from 'orion/ui/helpers';
import {Notice, Blurb, Success, Info, Warning, Danger, ErrorState, BlankState} from 'orion/ui/helpers';


export class Interactions extends StyleGuidePage {
    main() {
        return (
          <Section title="States">

              <SubSection title="With Background">
                  <Notice>This is a notice.</Notice>
                  <Blurb>This is a blurb.</Blurb>
                  <Success>This is a success. No a triumph!</Success>
                  <Info>This is a informational.</Info>
                  <Warning>This is a warning. And your last in fact.</Warning>
                  <Danger>This is a dangerous thing.</Danger>
                  <ErrorState>This is a state of error.</ErrorState>
                  <BlankState>This is a blank state.</BlankState>
              </SubSection>


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
          </Section>
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
