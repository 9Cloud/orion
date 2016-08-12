// React
import React, {PropTypes} from "react";
import {StyleGuidePage} from "orion/guide/layout";
import {Button, Section, SubSection, Spacer, Icon, Notice, VMenuLink} from 'orion/ui/helpers';

export class TypographyPage extends StyleGuidePage {
    sidebar() {
        return (
            <div className="l-vmenu">
                <VMenuLink index={true}>← Home</VMenuLink>
                <VMenuLink hash="#avatars">Avatars</VMenuLink>
                <VMenuLink hash="#spinners">Spinners</VMenuLink>
                <VMenuLink hash="#cards">Cards</VMenuLink>
                <VMenuLink hash="#tabs">Tabs</VMenuLink>
                <VMenuLink hash="#tooltips">Tooltips</VMenuLink>
                <VMenuLink hash="#modals">Modals</VMenuLink>
            </div>
        )
        return (
          <ul>
              <li><a href="/"> ← Home </a></li>
              <li><a href="#fonts">Fonts</a></li>
              <li><a href="#headings">Headings</a></li>
              <li><a href="#paragraphs">Paragraphs</a></li>
          </ul>

        )
    }

    main() {
        return (
          <div>
              <h1 className="section_title"><a name="fonts">Fonts</a></h1>

              <p>We use <a href="https://www.google.com/fonts/specimen/Karla">Karla</a></p>

              <h1 className="section_title"><a name="headings">Headings</a></h1>
              <div>
                  <h1>h1. Heading </h1>
              </div>
              <div>
                  <h2>h2. Subtitle </h2>
              </div>
              <div>
                  <h3>h3. Subheading </h3>
              </div>
              <div>
                  <h4>h4. Heading </h4>
              </div>
              <div>
                  <h5>h5. Heading </h5>
              </div>

              <h1 className="section_title"><a name="paragraphs">Paragraphs</a></h1>
              <div>
                  <p className="l-body">
                      Created with <code> .l-body </code>
                  </p>
                  Example:
                  <p className="l-body">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                  </p>

                  <p className="l-txt--loud">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                  </p>

                  <p className="l-txt--quiet">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                  </p>

                  <p className="l-txt--xtr-quiet">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      uding versions of Lorem Ipsum.
                  </p>
              </div>
          </div>
        )
    }

}
