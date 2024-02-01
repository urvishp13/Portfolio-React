import Project from "./Project"
import { FaFigma, FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt, FaGithubSquare } from "react-icons/fa"

export default function Work() {
    return (
        <section id="work-section" className="work-section">
            <h2>Tech Stack</h2>
            <div className="tech-stack">
                <div className="tech">
                    <FaHtml5 />
                </div> 
                <div className="tech">
                    <FaCss3Alt />
                </div> 
                <div className="tech">
                    <FaJs />    
                </div>    
                <div className="tech">
                    <FaReact />
                </div> 
                <div className="tech">
                    <FaJava />
                </div> 
                <div className="tech">
                    <img src="icons/firebase-1-logo 1.png" />
                </div> 
                <div className="tech">
                    <FaGitAlt />
                </div> 
                <div className="tech">
                    <FaGithubSquare />
                </div> 
                <div className="tech">
                    <FaFigma />
                </div> 
            </div>

            <h2>Projects</h2>
            <div className="projects">
                <Project 
                    img="screenshots/nba-finals-revisited.png"
                    desc="An interactive basketball game; go up against an opponent and see if you can win."
                    live="https://2008-nba-finals-revisited.netlify.app/"
                    github="https://github.com/urvishp13/2008-NBA-Finals"
                />
                <Project 
                    img="screenshots/we-are-the-champions.png"
                    desc="Write a compliment to your friend. Post, delete, and like what you see."
                    live="https://one-community.netlify.app/"
                    github="https://github.com/urvishp13/We-Are-The-Champions"
                />
                <Project 
                    img="screenshots/password-generator.png"
                    desc="Need an app that suggests strong passwords for you? Well, here you go."
                    live="https://premium-password.netlify.app/"
                    github="https://github.com/urvishp13/Password-Generator"
                />
                <Project 
                    img="screenshots/best-bank.png"
                    desc="A prototype for a banking app with a sleek design."
                    live="https://bestbank.netlify.app/"
                    github="https://github.com/urvishp13/BestBank"
                />
                <Project 
                    img="screenshots/color-generator.png"
                    desc="Do you need help finding a color palette for your next project? Well look no further because the Color Me Silly app will do all the searching for you."
                    live="https://color-me-silly.netlify.app/"
                    github="https://github.com/urvishp13/Color-Scheme-Generator"
                />
                <Project 
                    img="screenshots/learning-journal.png"
                    desc="A multi-page learning journal."
                    live="https://pathway-to-education.netlify.app/"
                    github="https://github.com/urvishp13/Learning-Journal"
                />
            </div>
        </section>
    )
}