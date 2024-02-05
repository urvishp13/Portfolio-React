import questionMark from "../images/question-mark.png";

export default function About() {
  return (
    <section id="about-section" className="about-section">
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
          Music has provided Urvish with the ability to utilize objective and
          subjective creativity—a skill necessary in UI design. Engineering has
          allowed Urvish the ability to make practicial judgments on proper UX
          design. And Frontend Development has provided Urvish with the outlet
          to utilize all his past experiences all while doing what he loves:
          making his creations tangible.
        </p>
      </div>
    </section>
  );
}
