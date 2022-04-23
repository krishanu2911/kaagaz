import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaHome, FaArchive, FaTrash } from "react-icons/fa";
function Navbar() {
  return (
    <nav className={`${styles.navbar}`}>
      <Link className={`${styles.link} maple-flex`} to="/">
        <FaHome className="txt-xl" />
        <h1 className={`${styles.hide} ${styles.text}`}>Home</h1>
      </Link>
      <Link className={`${styles.link} maple-flex`} to="/archive">
        <FaArchive className="txt-lg" />
        <h1 className={`${styles.hide} ${styles.text}`}>Archive</h1>
      </Link>
      <Link className={`${styles.link} maple-flex`} to="/trash">
        <FaTrash className="txt-lg" />
        <h1 className={`${styles.hide} ${styles.text}`}>Trash</h1>
      </Link>
    </nav>
  );
}
export default Navbar;
