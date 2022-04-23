import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css"
function Navbar() {
    return (
        <nav className={`${styles.navbar}`}>
            <Link to="/">Home</Link>
            <Link to="/archive">Archive</Link>
            <Link to="/trash">Trash</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </nav>
    )
}
export default Navbar;