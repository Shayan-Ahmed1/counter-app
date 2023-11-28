import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-body-tertiary bg-dark">
                <a className="navbar-brand" href="http://localhost:3000/">
                    Navbar
                </a>
            </nav>
        );
    }
}

export default Navbar;