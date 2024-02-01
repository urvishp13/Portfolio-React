import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div className="copyright">
                © 2023 Urvish Patel 
            </div>
            <div className="socials">
                <a href="https://www.linkedin.com/in/urvishpatel13/" target="_blank"><FaLinkedin /></a>
                <a href="https://github.com/urvishp13" target="_blank"><FaGithubSquare /></a>
            </div>
        </footer>
    )
}