import {Section, SubSection, VMenuLink} from 'orion/ui/helpers';
import * as React from "react";
import {Link} from 'tide/router/link';
import {StyleGuidePage} from "./page";

export class Home extends StyleGuidePage {
    intro() {
        return (
            <Section title="Introduction">
                <p className="l-row-gut-4">
                    At it's core, Orion is a lightweight framework built with html & css.
                    You can use it just by including the main.scss file included with the distribution, and nothing else.
                    <br/>
                    <br/>
                    Where it really shines though is when you use the entire stack of UI components that come bundled with Orion, and built in React.
                </p>
            </Section>
        )
    }

    examples() {
        return (
            <Section title="Examples">
                <SubSection title="Login">
                    <p>Simple example pages of a login flow, that leverage Orion's form library.</p>
                    <ul>
                        <li><Link to="login">Login Page</Link></li>
                        <li><Link to="register">Sign-up Page</Link></li>
                        <li><Link to="reset_password">Reset Password Pge</Link></li>
                    </ul>
                </SubSection>
                <SubSection title="Application Examples">
                    <p>More complicated examples, of in-app pages.</p>
                    <ul>
                        <li><Link to="example">Picture Gallery</Link></li>
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
