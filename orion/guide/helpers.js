// React
import React, {PropTypes} from "react";
import {StyleGuidePage} from "orion/guide/layout";
import {Button, Section, SubSection, Spacer, Icon, Notice, VMenuLink} from 'orion/ui/helpers';

export class HelpersPage extends StyleGuidePage {
    sidebar() {
        return (
            <div className="l-vmenu">
                <VMenuLink index={true}>← Home</VMenuLink>
                <VMenuLink hash="#helpers">Helper Classes</VMenuLink>
            </div>
        )
    }

    main() {
        return (
            <div>
                <p> This is a quick guide for class names used on the style guide. These helpers will eventually be replaced by actual code snippets.</p>
                <Section title="helpers">
                <code>.l-float-left</code>
                <code>.l-float-right</code>
                <code>.l-clear</code>

                <code>.l-inline</code>

                <code>.l-hidden</code>
                <code>.l-no-margin</code>
                <code>.l-no-padding</code>

                <code>.l-center-txt</code>
                --- only center text
                <code>.l-hidden</code>

                <code>.l-align--abscenter </code>
                --- centers element exactly in the middle of the page both horizontally/vertically
                <code>.l-align--horizontal</code>
                --- centers div only horizontally
            </Section>
            </div>
        )
    }

}
