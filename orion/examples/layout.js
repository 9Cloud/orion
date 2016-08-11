// React
import React, {PropTypes} from "react";
import {Component} from "tide/components";
import Link from 'react-router/lib/Link';

export class Header extends Component {
    render() {
        return (
            <header className="header l-clearfix">
                <div className="pg-container">
                    <Link to="/"><h1 className="logo">Site Name</h1></Link>

                    <nav className="nav-container l-float-right">
                        <ul className="nav-list">
                            <li className="nav-item"><Link to="examples/login">Login</Link></li>
                            <li className="nav-item"><Link to="examples/signup" className="l-btn menu_btn">Signup</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export class ExamplePage extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className="l-clearfix l-row-gut-4"></div>

                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}