import questionMark from "../images/question-mark.png";

export default function About() {
  return (
    <section id="about-section" className="about-section">
      <div className="container">
        <div
          className="question"
          style={{ backgroundImage: `url(${questionMark})` }}
        >
          <p>WHO IS HE</p>
        </div>
        <div className="answer">
          <p>
            Urvish is a versatile individual. He is a <strong>Mechanical Engineering</strong> grad,
            a <strong>Music Producer</strong>, and a <strong>Frontend Developer</strong>. How are all these
            experiences interrelated? They all utilize creativity and design.
          </p>
          <p>
            Music Production has provided Urvish the ability to utilize objective and
            subjective creativity—a skill necessary to make UI designs appeal to users. Engineering Logic has
            allowed Urvish the ability to remake overly complex UX designs into more
            practical interfaces for busy users. And Frontend Skills have provided Urvish the tools to
            utilize his past experiences to do what he loves: making web apps highly useable.
          </p>
        </div>
      </div>
    </section>
  );
}
