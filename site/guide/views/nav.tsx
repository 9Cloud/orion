import {NavHeader, NavItem, NavList} from 'orion/ui/header';
import {Section, VMenuLink} from "orion/ui/helpers";
import * as React from "react";
import {StyleGuidePage} from "./page";

export class NavComponent extends StyleGuidePage {
    sidebar() {
        return (
            <div className="l-vmenu">
                <VMenuLink index={true}>← Home</VMenuLink>
            </div>
        )
    }

    navbar() {
        return (
            <Section title="Navigation Bar" key="1">
                <p className="l-row-gut-2"> This navigation bar is used globally across the site. </p>
                <NavHeader>
                    <div className="l-col-push-1 l-col-lg-10">
                        <NavList>
                            <NavItem anchor="hello"/>
                            <NavItem anchor="world"/>
                            <NavItem anchor="there"/>
                        </NavList>
                    </div>
                </NavHeader>
            </Section>
        )
    }

    main() {
        return [
            this.navbar()
        ]
    }
}
