import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../public/assets/LOGO.png";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const navLinks = [
  {
    text: "Home",
    link: "home",
    offset: -80,
  },
  {
    text: "Philosophie",
    link: "philosophie",
    offset: -30,
  },
  {
    text: "Über mich",
    link: "about",
    offset: -50,
  },
  {
    text: "Beratung",
    link: "beratung",
    offset: -50,
  },
  {
    text: "Kontakt",
    link: "kontakt",
    offset: -80,
  },
];

export default function Header() {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (clicked) document.body.style.overflow = "hidden";
    if (!clicked) document.body.style.overflow = "scroll";
  }, [clicked]);

  useEffect(() => {
    const myFunction = () => {
      window.scrollY >= 80 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", myFunction);
    return () => window.removeEventListener("scroll", myFunction);
  }, []);

  const clickHandler = (e) => {
    e.preventDefault();
    setClicked(!clicked);
  };

  return (
    <header className={scrolled ? "animate-scroll" : undefined}>
      <div className="container header">
        <div className="header__logo">
          <Link href="/">
            <a>
              <Image src={logo} width="200px" height="62px" alt="gesund und munter logo" />
            </a>
          </Link>
        </div>
        <nav className={`nav ${clicked && "nav__active"}`}>
          <ul>
            {navLinks.map((e, index) => (
              <li key={index}>
                <Link href={e.link === 'home' ? '/' :`/#${e.link}`}>
                  <a>{e.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__navbarToggle">
          {clicked ? (
            <div onClick={clickHandler} className="nav__closeBtn">
              <AiOutlineClose />
            </div>
          ) : (
            <div onClick={clickHandler} className="nav__menuBtn">
              <AiOutlineMenu />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
