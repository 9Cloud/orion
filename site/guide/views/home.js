
import React, {PropTypes} from "react";
import {StyleGuidePage} from "./page";
import {Div, Button, Section, SubSection, Spacer, Icon, Notice, VMenuLink} from 'orion/ui/helpers';
import {Link} from 'tide/router/link';

export class Home extends StyleGuidePage {
    intro() {
        return (
            <Section title="Introduction">
                <p className="l-row-gut-4">Orion is a lightweight framework built with html & css.</p>
            </Section>
        )
    }

    examples() {
        return (
            <Section title="Examples">
                <SubSection title="Login">
                    <p>Example pages have been created for the login-flow.</p>
                    <ul>
                        <li><Link to="example">Example Page</Link></li>
                        <li><Link to="login">Login Page</Link></li>
                        <li><Link to="register">Sign-up Page</Link></li>
                        <li><Link to="reset_password">Reset Password Pge</Link></li>
                    </ul>
                </SubSection>
            </Section>
        )
    }

    sidebar() {
        return (
            <div className="l-vmenu">
                <VMenuLink hash="#">Home</VMenuLink>
                <VMenuLink hash="#introduction">Introduction</VMenuLink>
                <VMenuLink hash="#examples">Examples</VMenuLink>
            </div>
        )
    }

    main() {
        return [
            this.intro(),
            this.examples()
        ]
    }

}
