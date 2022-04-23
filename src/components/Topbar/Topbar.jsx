import React from "react";
import styles from "./Topbar.module.css";
import { IoApps } from "react-icons/io5";
import { Link } from "react-router-dom";
function Topbar() {
  return (
    <div className={`${styles.topbar} maple-flex`}>
      <div className={`${styles.aligncenter} maple-flex gap`}>
        <IoApps className={`${styles.toggleicon} txt-xl`} />
        <h1 className={`${styles.title} txt-xxl`}>Kaagaz</h1>
      </div>
      <div className={`${styles.aligncenter} maple-flex gap`}>
        <Link className="txt-lg" to="/login">Login</Link>
        <Link className="txt-lg" to="/signup">Signup</Link>
      </div>
    </div>
  );
}
export default Topbar;
