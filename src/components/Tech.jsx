export default function Tech(props) {
    return (
        <div className="tech">
            <div>
                {props.icon}
            </div>
            <p>{props.tech}</p>
        </div>
    )
}