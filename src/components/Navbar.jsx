export default function Navbar() {
    return (
        <nav className="nav">
            <div className="profile-info">
                <img className="profile-img" src="images/urvish-square-2.png" alt="Urvish's picture"/>
                <h1 className="profile-name">Urvish Patel</h1>
            </div>
            <ul className="nav-items">
                <li><a href="#home-section">Home</a></li>
                <li><a href="#about-section">About</a></li>
                <li><a href="#work-section">Work</a></li>
                <li><a href="#contact-section">Contact</a></li>
            </ul>
        </nav>
    )
}