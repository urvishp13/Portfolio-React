import { FaBars } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"

export default function Navbar() {

    const menu =  document.querySelector(".hamburger")
    const navItems = document.querySelector(".nav-items")
    
    function openMenu() {
        menu.classList.add("hide")
        navItems.classList.add("open-nav")
    }

    function closeMenu() {
        menu.classList.remove("hide")
        navItems.classList.remove("open-nav")
    }

    return (
        <nav className="nav">
            <div className="profile-info">
                <img className="profile-img" src="images/urvish-square-2.png" alt="Urvish's picture"/>
                <h1 className="profile-name">Urvish Patel</h1>
            </div>
            <FaBars className="hamburger" onClick={openMenu} />
            <ul className="nav-items">
                <FaXmark className="close-burger" onClick={closeMenu} />
                <li><a href="#home-section">Home</a></li>
                <li><a href="#about-section">About</a></li>
                <li><a href="#work-section">Work</a></li>
                <li><a href="#contact-section">Contact</a></li>
            </ul>
        </nav>
    )
}