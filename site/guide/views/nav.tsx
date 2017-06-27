import React, {PropTypes} from "react";
import {StyleGuidePage} from "./page";
import {Section, VMenuLink} from "orion/ui/helpers";
import {NavHeader, NavItem, NavDropdown, NavList} from 'orion/ui/header';

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
                           <NavItem/>
                           <NavItem/>
                           <NavItem/>
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
