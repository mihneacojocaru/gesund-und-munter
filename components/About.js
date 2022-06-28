import React from "react";

export default function About() {
  return (
    <section id="about" className="about container">
      <div className="about__paragraph1">
        <img src="/assets/Franzi1.png" alt="Franziska Scheidt Fachberater für ganzheitliche Gesundheit in Bielefeld" />
        <div className="about__paragraph1--text1">
          <h2>ÜBER MICH</h2>
          <p>
            Mein Name ist <strong>Franziska Scheidt</strong> und ich lebe und
            arbeite in Bielefeld.
          </p>
          <p>
            „Ich träume davon, dass Menschen ihre Gesundheit wieder in die
            eigene Hand nehmen und echte Lebensfreude empfinden.“
          </p>
        </div>
        <div className="about__paragraph1--text2">
          <p>
            Vor einigen Jahren bin ich meiner <strong>Leidenschaft</strong>{" "}
            gefolgt und habe mich zur Fachberaterin für ganzheitliche{" "}
            <strong>Gesundheit</strong> und Ernährung ausbilden lassen.
          </p>
          <p>
            Seit jeher bin ich von der Biologie und Funktionsweise des
            menschlichen Körpers begeistert. Zu sehen, wie der Körper sich
            repariert und gesundhält (sofern ihm das passende Umfeld und die
            richtigen “Rohstoffe” geboten werden), fasziniert mich zutiefst.
            Diese Begeisterung gebe ich in meinen Coachings weiter.
          </p>
          <p>
            <strong>Dein Leben</strong> ist nicht dazu gedacht, beschwerlich und von Krankheit geprägt zu sein. Denkst du nicht auch? Ich freue mich, wenn ich auch dich auf deinen Weg unterstützen kann.
          </p>
        </div>
      </div>
      <div className="about__paragraph2">
        <img src="/assets/apples_pic1.png" alt="Gesunde Äppfel in einem Korb" />
        <div className="about__paragraph2--text">
          <h3>Menschen</h3>
          <p>
            Ich mag das Zusammensein und -arbeiten mit Menschen, Das ist
            wahrscheinlich auch der Grund, warum ich in meinem ersten Beruf
            Sozialarbeiterin geworden bin. Neben meiner Tätigkeit in der
            Gesundheitsberatung bin ich weiterhin im Sozialwesen tätig. Ich
            liebe die bunte Vielfalt, die beide Berufe in mein Leben bringen.
          </p>
        </div>
      </div>
      <div className="about__paragraph3">
        <img src="/assets/wald.png" alt="Grüner Wald aus Tannen von oben" />
        <div className="about__paragraph3--text">
          <h3>Waldverliebt</h3>
          <p>
          Kein Ort lässt mich tiefer und schneller entspannen als der Wald. Das satte Grün der Blätter, die rauschenden Baumkronen und die angenehme Stille lassen meinen Akku wie nichts anderes voll werden. Besonders in intensiven Lebensphasen gehört der regelmäßige Ausflug ins Grüne für mich dazu.
          </p>
        </div>
      </div>
      <div className="about__paragraph4">
        <img src="/assets/group.png" alt="Gruppen von jungen Menschen auf einem Hügel mit schöner Aussicht" />
        <div className="about__paragraph4--text">
          <h3>Glaube</h3>
          <p>
          Ich liebe Jesus und wenig im Leben lässt mich mehr an die Größe und Kreativität eines Gottes glauben, als die Schönheit des menschlichen Körpers. Wenn ich sehe mit welcher Genialität unser Organismus mit seinen winzigen Zellen und Zellbausteinen aufgebaut ist, kann ich nur staunen - über einen Gott, der sich das alles ausgedach hat.
          </p>
        </div>
      </div>
    </section>
  );
}
