import questionMark from "../images/question-mark.png"

export default function About() {
  return (
    <section id="about-section" className="about-section" >
      <div className="question" style={{ backgroundImage: `url(${questionMark})`}}>
        <p>WHO IS HE</p>
      </div>
      <div className="answer">
        <p>
          Urvish is a versatile individual. He is a Mechanical Engineering grad,
          a Music Producer, and a Frontend Developer. How are all these
          experiences interrelated? They all utilize creativity and design.
        </p>
        <p>
          Because of these experiences, Urvish knows how to navigate the field
          of designer’s block, approach UX from a practical perspective, and
          approach UI design from an imaginative, creative direction. Frontend
          Development puts all his experiences together to allow him to create
          products he never imagined making.
        </p>
      </div>
    </section>
  );
}
