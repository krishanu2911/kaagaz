import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/archive">Archive</Link>
            <Link to="/trash">Trash</Link>
        </nav>
    )
}
export default Navbar;