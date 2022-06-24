import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Philosophie from "../components/Philosophie";
import About from "../components/About";
import Beratung from "../components/Beratung";
import Kontakt from "../components/Kontakt";
import CookieConsent from "react-cookie-consent";
import { useEffect, useState } from "react";

export default function Home() {

  const [consent, setConsent] = useState(false);

  useEffect(()=>{
    setTimeout(() => {
      setConsent(true)
    }, 5000);
  });

  return (
    <div>
      <Layout>
        <Hero />
        <Philosophie />
        <About />
        <Beratung />
        <Kontakt />
      </Layout>
      {
        consent ? (<CookieConsent
          buttonText="Zustimmen"
          style={{ background: "#265a63", textAlign: "center", padding: ".5em" }}
          buttonStyle={{
            background: "#eeefec",
            color: "#232F3F",
            padding: "10px 20px",
            margin: "1em 3em",
          }}
        >
          <div className="container">
            {" "}
            Wir verwenden Cookies und ähnliche Technologien auf unserer Website
            und verarbeiten personenbezogene Daten von dir (z.B. IP-Adresse), um
            z.B. Inhalte und Anzeigen zu personalisieren, Medien von
            Drittanbietern einzubinden oder Zugriffe auf unsere Website zu
            analysieren. Die Datenverarbeitung kann auch erst in Folge gesetzter
            Cookies stattfinden. <br />
            <br /> Wir teilen diese Daten mit Dritten, die wir in den
            Privatsphäre-Einstellungen benennen.
          </div>
        </CookieConsent>) : null
      }
    </div>
  );
}
