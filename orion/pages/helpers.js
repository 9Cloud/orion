// React
import React, {PropTypes} from "react";
import {StyleGuidePage} from "orion/base/layout";

export class HelpersPage extends StyleGuidePage {
    sidebar() {
        return (
          <ul>
              <li><a href="/"> ← Home </a></li>
              <li><a href="#classnames">Class Names</a></li>
          </ul>
        )
    }

    theme() {
        return (
          <div className="section-container l-row-gut-4">

          </div>
        )
    }


    main() {
        return (
          <div>
              <div class="section-container">
                  <h1 class="section_title"><a name="classnames">Helpers</a></h1>
                  <code>.l-float-left</code>
                  <code>.l-float-right</code>
                  <code>.l-clear</code>
                  <code>.l-inline</code>
                  <code>.l-hidden</code>
                  <code>.l-no-margin</code>
                  <code>.l-no-padding</code>
                  <code>.l-center-txt --- only center text</code>
                  <code>.l-hidden</code>
                  <code>.l-align--abscenter  --- centers element exactly in the middle of the page both horizontally/vertically</code>
                  <code>.l-align--horizontal  --- centers div only horizontally</code>
              </div>
          </div>
        )
    }

}
