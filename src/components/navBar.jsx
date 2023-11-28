import React from 'react'

const Navbar = ({ totalCounters }) => {
    return (
        <nav className="navbar bg-body-tertiary bg-dark">
            <a className="navbar-brand" href="http://localhost:3000/">
                Navbar {" "}
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
}

export default Navbar;