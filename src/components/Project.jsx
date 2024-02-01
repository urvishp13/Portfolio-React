import { FaLink, FaGithub } from "react-icons/fa";

export default function Project(props) {
    return (
        <div className="project">
            <img src={props.img}/>
            <p>{props.desc}</p>
            <a href={props.live} target="_blank">Live <FaLink /></a>
            <a href={props.github} target="_blank">GitHub <FaGithub /></a>
        </div>
    )
}