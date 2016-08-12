// React
import React, {PropTypes} from "react";
import {StyleGuidePage} from "orion/guide/layout";
import {Section, SubSection} from 'orion/ui/helpers';
import Link from 'react-router/lib/Link';
import {Button, Section, SubSection, Spacer, Icon, Notice, VMenuLink} from 'orion/ui/helpers';

export class Home extends StyleGuidePage {
    intro() {
        return (
            <Section title="Introduction">
                <p className="l-row-gut-4">Orion is a lightweight framework built with html & css.</p>
            </Section>
        )
    }

    examples(){
        return (
            <Section title="Examples">
                <SubSection title="Login">
                    <p>Example pags have been created for the login-flow.</p>
                    <ul>
                        <li><Link to="examples/login">Login Page</Link></li>
                        <li><Link to="examples/signup">Sign-up Page</Link></li>
                        <li><Link to="examples/reset_password">Reset Password Pge</Link></li>
                    </ul>
                </SubSection>
            </Section>
        )
    }

    sidebar(){
        return (
            <div className="l-vmenu">
                <VMenuLink index={true}>← Home</VMenuLink>
                <VMenuLink hash="#introduction">Introduction</VMenuLink>
                <VMenuLink hash="#examples">Examples</VMenuLink>
            </div>
        )
    }

    main(){
        return [
          this.intro(),
          this.examples()
        ]
    }

}
