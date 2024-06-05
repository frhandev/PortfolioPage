import styles from './Header.module.css'
import hamburgerMenu from './hamburgerMenu.png'
import closeIcon from './close.png'
import React, { useState } from 'react';

function Header() {

    const [active, setActive] = useState(styles.navLinksContainer);
    const navToggle = () => {
        active === styles.navLinksContainer
            ? setActive(styles.navLinksContainer + ' ' + styles.nav_active)
            : setActive(styles.navLinksContainer)
    };

    return(
        <div className={styles.container}>
            <a href='#' className={styles.logo}>Muhammed</a>
            <nav className={active}>
                <button onClick={navToggle} className={styles.closeIcon}>
                    <img  src={closeIcon} alt="x mark" />
                </button>
                <a href="#home" className={styles.navLink}>Home</a>
                <a href="#projects" className={styles.navLink}>projects</a>
                <a href="#contact" className={styles.navLink}>Contact</a>
            </nav>
            <button onClick={navToggle} className={styles.nav_toggler}>
                <img src={hamburgerMenu} alt="nav_toggler" />
            </button>
        </div>
    );
}

export default Header