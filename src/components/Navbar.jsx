import { FaBars } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"
import { useState } from "react"

export default function Navbar() {

    const [classes, setClasses] = useState({
        menu: "hamburger", 
        nav: "nav-items", 
        close: "close-burger hide"
    })

    function openMenu() {
        setClasses({
            menu: "hamburger hide",
            nav: "nav-items open-nav",
            close: "close-burger"
        })
    }

    function closeMenu() {
        setClasses({
            menu: "hamburger",
            nav: "nav-items",
            close: "close-burger hide"
        })
    }

    return (
        <nav className="nav">
            <div className="profile-info">
                <img className="profile-img" src="images/urvish-square-2.png" alt="Urvish's picture"/>
                <h1 className="profile-name">Urvish Patel</h1>
            </div>
            <FaBars className={classes.menu} onClick={openMenu} />
            <ul className={classes.nav}>
                <FaXmark className={classes.close} onClick={closeMenu} />
                <li><a href="#home-section">Home</a></li>
                <li><a href="#about-section">About</a></li>
                <li><a href="#work-section">Work</a></li>
                <li><a href="#contact-section">Contact</a></li>
            </ul>
        </nav>
    )
}