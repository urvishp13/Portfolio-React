import { FaLink, FaGithub } from "react-icons/fa"
import { useState, useEffect } from "react"

export default function Project(props) {

    const [screenshot, setScreenshot] = useState(window.screen.width > 500 ? props.imgDesktop : props.imgMobile)

    useEffect(function() {
        window.addEventListener("resize", function() {
            setScreenshot(window.screen.width > 500 ? props.imgDesktop : props.imgMobile)
        })
    }, [window.screen.width])

    return (
        <div className="project">
            <img src={screenshot} alt={props.alt}/>
            <p>{props.desc}</p>
            <a href={props.live} target="_blank">Live <FaLink /></a>
            <a href={props.github} target="_blank">Code <FaGithub /></a>
        </div>
    )
}