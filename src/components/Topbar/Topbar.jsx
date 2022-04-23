import React from 'react'
import styles from "./Topbar.module.css"
// import { Fa } from "react-icons/fa";
function Topbar() {
    return (
        <div className={`${styles.topbar} maple-flex`}>
            {/* <FaHamburger /> */}
           <h1 className={`${styles.title} txt-xxl`}>Kaagaz</h1>
           <section>
             
           </section> 
        </div>
    )
}
export default Topbar;