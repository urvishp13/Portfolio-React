import Project from "./Project"
import Tech from "./Tech"
import { FaFigma, FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt, FaGithubSquare } from "react-icons/fa"

export default function Work() {
    return (
        <section id="work-section" className="work-section">
            <h2>Tech Stack</h2>
            <div className="tech-stack">
                <Tech icon={<FaHtml5 />} tech="HTML" /> 
                <Tech icon={<FaCss3Alt />} tech="CSS" />
                <Tech icon={<FaJs />} tech="JS" /> 
                <Tech icon={<FaReact />} tech="React" />
                <Tech icon={<FaJava />} tech="Java" />
                <Tech icon={<img src="icons/firebase-1-logo 1.png" alt="Firebase logo"/>} tech="Firebase" />
                <Tech icon={<FaGitAlt />} tech="Git" />
                <Tech icon={<FaGithubSquare />} tech="GitHub" />
                <Tech icon={<FaFigma />} tech="Figma" />
            </div>

            <h2>Projects</h2>
            <div className="projects">
                <Project 
                    img="screenshots/nba-finals-revisited.png"
                    alt="mobile view screenshot of NBA Finals Revisited project"
                    desc="An interactive basketball game; go up against an opponent and see if you can win."
                    live="https://2008-nba-finals-revisited.netlify.app/"
                    github="https://github.com/urvishp13/2008-NBA-Finals"
                />
                <Project 
                    img="screenshots/we-are-the-champions.png"
                    alt="mobile view screenshot of We Are The Champions project"
                    desc="Write a compliment to your friend. Post, delete, and like what you see."
                    live="https://one-community.netlify.app/"
                    github="https://github.com/urvishp13/We-Are-The-Champions"
                />
                <Project 
                    img="screenshots/password-generator.png"
                    alt="mobile view screenshot of Password Generator project"
                    desc="Need an app that suggests strong passwords for you? Well, here you go."
                    live="https://premium-password.netlify.app/"
                    github="https://github.com/urvishp13/Password-Generator"
                />
                <Project 
                    img="screenshots/best-bank.png"
                    alt="mobile view screenshot of Best Bank project"
                    desc="A prototype for a banking app with a sleek design."
                    live="https://bestbank.netlify.app/"
                    github="https://github.com/urvishp13/BestBank"
                />
                <Project 
                    img="screenshots/color-generator.png"
                    alt="mobile view screenshot of Color Palette Generator project"
                    desc="Do you need help finding a color palette for your next project? Well look no further because the Color Me Silly app will do all the searching for you."
                    live="https://color-me-silly.netlify.app/"
                    github="https://github.com/urvishp13/Color-Scheme-Generator"
                />
                <Project 
                    img="screenshots/learning-journal.png"
                    alt="mobile view screenshot of Learning Journal project"
                    desc="A multi-page learning journal."
                    live="https://pathway-to-education.netlify.app/"
                    github="https://github.com/urvishp13/Learning-Journal"
                />
            </div>
        </section>
    )
}