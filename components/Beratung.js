import React from "react";
import { Link as SLikin } from "react-scroll";
import { BsStars } from "react-icons/bs";
import { GiGlowingHands, GiMuscleUp, GiDistressSignal } from "react-icons/gi";
import { BsSearch, BsStar, BsVolumeUp } from "react-icons/bs";
import { FaAward } from "react-icons/fa";

export default function Beratung() {
  return (
    <section id="beratung" className="beratung--bg">
      <div className="beratung">
        <div className="beratung__section1 container">
          <h2>Beratung</h2>
          <p>
            Die Bereiche Ernährung und Mikronährstoffversorgung bilden die
            Kernstücke der Beratungsarbeit. Ebenfalls schauen wir uns die
            Lebensbereiche Bewegung und Sport sowie die mentale Gesundheit an.
          </p>
          <div className="beratung__section1--containers">
            <div className="beratung__section1--containers--container1">
              <h3 className="test">Kostenfreies Schnuppergespräch</h3>
              <p>
                In einem kostenfreien Erstgespräch lernen wir uns kennen. Wir besprechen, wie dein Weg hin zu mehr Gesundheit aussehen kann. 
              </p>
              <SLikin
                  to={"kontakt"}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="button-design draw-border"
                >
                  Buchen
                </SLikin>
            </div>
            <div className="beratung__section1--containers--container2">
              <h3>60-minütige Einzelberatung</h3>
              <h5>Eine Einzelberatung eignet sich, wenn...</h5>
              <ul>
                <li>
                  du chronisch erkrankt und auf der Suche nach
                  Experten-Empfehlungen für Fachärzte, Therapeuten und
                  Heilpraktiker bist?
                </li>
                <li>
                  du konkrete Fragen hast, die dich bewegen und du kurzfristig
                  Unterstützung benötigst?
                </li>
              </ul>
              <span>
                <SLikin
                  to={"kontakt"}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="button-design draw-border"
                >
                  Buchen
                </SLikin>
              </span>
            </div>
            <div className="beratung__section1--containers--container3">
              <h3>Gesundheitscoaching</h3>
              <ul className="list1">
                <li>Steigere dein Wohlbefinden!</li>
                <li>Erhöhe dein Energielevel!</li>
                <li>Baue Körpergewicht ab/auf!</li>
                <li>Reduziere dein Stresslevel!</li>
              </ul>
              <h5>Im Gesundheitscoaching sind enthalten:</h5>
              <ul className="list2">
                <li>Vorgespräch</li>
                <li>Anamnese mit Ist-Zustand-Analyse</li>
                <li>3 Beratungsgespräche</li>
                <li>dein persönlicher Gesundheitsplan</li>
                <li>Rezepte</li>
                <li>Begleitende Alltags-Beratung</li>
                <li>Coachingdauer - 12 Wochen</li>
              </ul>
              <span>
                <SLikin
                  to={"kontakt"}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="button-design draw-border"
                >
                  Buchen
                </SLikin>
              </span>
            </div>
            <div className="beratung__section1--containers--container4">
              <h3>Seminare und Workshops</h3>
              <ul>
                <li>
                Seminare und Workshops finden in regelmäßigen Abständen statt
                </li>
                <li>
                  Aktuelle Termine werden über Instagram bekannt gegeben
                </li>
                <li>
                  Du möchtest ein Seminar oder einen Workshop für deine Firma,
                  deinen Sportverein oder deinen Freundeskreis buchen? Dann schreib mir gerne eine Mail.
                </li>
              </ul>
              <p></p>
              <span>
                <SLikin
                  to={"kontakt"}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="button-design draw-border"
                >
                  Buchen
                </SLikin>
              </span>
            </div>
          </div>
        </div>
        <div className="beratung__section2">
          <div className="beratung__section2--text">
            <h4>
              FRANZISKA SCHEIDT <FaAward />
            </h4>
            <h3>Fachberaterin für holistische Gesundheit </h3>
          </div>
          <div className="beratung__section2--zertifizierung">
            <img src="/assets/Zertifizierung.png" alt="zertifizierung logo" />
          </div>
        </div>
        <div className="beratung__section3 container">
          <div className="beratung__section3--title">
            <h4>
              „GESUNDHEIT KRIEGT MAN NICHT IM HANDEL, SONDERN DURCH DEN
              LEBENSWANDEL.”
            </h4>
            <h5>SEBASTIAN KNEIPP</h5>
          </div>
          <div className="beratung__section3--cardContainer">
            <div className="beratung__section3--cardContainer--card">
              <BsSearch />
              <h3>GANZHEITLICH</h3>
              <p>
                Wir betrachten deine Gesundheit ganzheitlich. Neben deinen
                Essensgewohnheiten sprechen wir über Bereiche wie
                Stressmanagement, Bewegung, Mikronährstoffe und die Bedeutung
                deiner Gedanken und Emotionen.
              </p>
            </div>
            <div className="beratung__section3--cardContainer--card">
              <BsStar />
              <h3>AUF AUGENHÖHE</h3>
              <p>
                Du und ich sind ein Team und arbeiten auf Augenhöhe zusammen. In
                den meisten Fällen weißt du intuitiv, was dir guttut. Deshalb
                sind deine eigenen Ideen mindestens genauso wichtig für deine
                Entwicklung wie meine.
              </p>
            </div>
            <div className="beratung__section3--cardContainer--card">
              <BsVolumeUp />
              <h3>ZURÜCK ZUR NATUR</h3>
              <p>
                Fastfood, Mikrowellen und das geliebte Auto machen unser
                modernes Leben leichter, aber nicht gesünder. Wenn wir uns dem natürlichen und ursprünglichen Leben
                zuzuwenden, wird unser Körper erneut aufblühen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
