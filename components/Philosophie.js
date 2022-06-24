import React from "react";
import { FaLeaf, FaCarrot, FaCreativeCommonsBy} from "react-icons/fa";

import {IoMdPeople} from 'react-icons/io'

export default function Philosophie() {
  return (
    <section id="philosophie" className="philosophie--bg">
      <div className="philosophie container">
        <div className="philosophie__title">
          <h2>Philosophie</h2>
        </div>
        <div className="philosophie__cards">
          <div className="philosophie__cards--card">
            <FaLeaf />
            <h4>LEBENSNAH</h4>
            <p>
              Nur wenn deine gesunde Lebensweise alltagstauglich ist, bleibt sie
              dir langfristig erhalten. Ich berate dich lebensnah.
            </p>
          </div>
          <div className="philosophie__cards--card">
            <FaCreativeCommonsBy />
            <h4>INDIVIDUELL</h4>
            <p>
              Die Beratung ist ausgerichtet auf deine individuelle Situation und
              orientiert sich an deinen persönlichen Wünschen.
            </p>
          </div>
          <div className="philosophie__cards--card">
            <IoMdPeople />
            <h4>GEMEINSAM</h4>
            <p>
              Das Etablieren neuer Routinen kann herausfordernd sein. Du musst
              es nicht alleine schaffen. Teamarbeit ist das Geheimnis.
            </p>
          </div>
          <div className="philosophie__cards--card">
            <FaCarrot />
            <h4>UNKOMPLIZIERT</h4>
            <p>
              Es muss nicht immer kompliziert sein. Gesundes Leben geht auch
              einfach. Ich zeige dir, wie es geht.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
