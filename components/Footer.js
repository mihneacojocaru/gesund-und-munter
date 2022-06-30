import React from "react";
import {
  BsWhatsapp,
  BsInfoCircle,
  BsMailbox,
  BsInstagram,
} from "react-icons/bs";
import {RiFilePaper2Line} from 'react-icons/ri'
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/LOGO.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__elements container">
        <div className="footer__elements--element1">
          <p>Kontakt</p>
          <ul>
            <li>
            <a href="https://wa.me/4915906335291?text=Hallo!%20Ich%20würde%20gerne%20ein%20Gespräch%20buchen." 
               target="_blank"
               rel="noreferrer"
            >
              <BsWhatsapp /> 0159 063 35291
            </a>
            </li>
            <li>
              <a
                href="mailto:franziskascheidt@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <BsMailbox /> franziskascheidt@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/gesundundmunter.beratung/"
                 target="_blank"
                 rel="noreferrer"
              >
                <BsInstagram /> instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__elements--element2">
          <Link href="/">
            <a className="footer__elements--element2--logo">
              <Image src={logo} width="200px" height="62px" alt="gesund und munter logo"/>
            </a>
          </Link>
          <img src="/assets/Zertifizierung.png" alt="zertifizierung logo" />
        </div>
        <div className="footer__elements--element3">
          <p>Legal</p>
          <span>
            <Link href="/impressum">
              <a>
                <BsInfoCircle /> Impressum
              </a>
            </Link>
            <Link href="/datenschutz">
              <a>
                <RiFilePaper2Line /> Datenschutzerklärung
              </a>
            </Link>
          </span>
        </div>
      </div>
      <div className="footer__copyright">
        <p>
          Copyright &copy; Gesund und Munter Beratung 2022. Alle Rechte vorbehalten.{" "}
          <small>
          Design und Konzeption von{" "}
            <a
              href="https://mihneacojocaru.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              Mihnea Cojocaru
            </a>
            .
          </small>
        </p>
      </div>
    </div>
  );
}
