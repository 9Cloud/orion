// React
import React, {PropTypes} from "react";
import {StyleGuidePage} from "orion/guide/layout";
import {Div, Button, Section, SubSection, Spacer, Icon, VMenuLink} from 'orion/ui/helpers';
import {Notice, Blurb, Success, Info, Warning, Danger, ErrorState, BlankState} from 'orion/ui/helpers';


export class Interactions extends StyleGuidePage {
    main() {
        return (
          <Section title="States" slug="states">
              <SubSection title="With Background">
                  <Notice>This is a notice.</Notice>
                  <Blurb>This is a blurb.</Blurb>
                  <Warning>This is a warning. And your last in fact.</Warning>
                  <Success>This is a success. No a triumph!</Success>
                  <Info>This is a informational.</Info>
                  <Danger>This is a dangerous thing.</Danger>
                  <ErrorState>This is a state of error.</ErrorState>
                  <BlankState>This is a blank state.</BlankState>
              </SubSection>


              <SubSection title="Without Background">
                  <Notice boxed={false}>This is a notice.</Notice>
                  <Blurb boxed={false}>This is a blurb.</Blurb>
                  <Warning boxed={false}>This is a warning. And your last in fact.</Warning>
                  <Success boxed={false}>This is a success. No a triumph!</Success>
                  <Info boxed={false}>This is a informational.</Info>
                  <Danger boxed={false}>This is a dangerous thing.</Danger>
                  <ErrorState boxed={false}>This is a state of error.</ErrorState>
                  <BlankState boxed={false}>This is a blank state.</BlankState>
              </SubSection>

              <Section title="Animations">
                  <div className="icon-heartbeat"></div>
                  <div className="icon-heart"></div>
              </Section>
          </Section>
        )
    }

    sidebar() {
        return (
            <div className="l-vmenu">
                <VMenuLink index={true}>← Home</VMenuLink>
                <VMenuLink hash="#states">State Notices</VMenuLink>
                <VMenuLink hash="#animations">Animations</VMenuLink>
            </div>
        )
    }
}
