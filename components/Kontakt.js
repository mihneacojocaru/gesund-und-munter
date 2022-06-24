import React, { useEffect, useState } from "react";
import emailjs from 'emailjs-com';
import { Puff } from "react-loader-spinner";


export default function Kontakt() {

  const [danke, setDanke] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const antwort = await emailjs.sendForm('service_mbphqqw', 'template_6kgbemp', e.target, 'lULXC5lH_CEvQi-mj');

      if(antwort.text === 'OK'){
        setDanke(true)
        setTimeout(()=>{
          setDanke(false);
          window.scrollTo(0,0);
        }, 2000)

      }else{
        setError(true)
      }

    } catch (error) {
      console.error(error)
      setError(true)
    }

    setTimeout(()=>{
      setError(false);
    }, 5000)

    e.target.reset();
  };

  return (
    <section id="kontakt" className="kontakt container">
      <div className="kontakt__sectionHeader">
        <h2>Kontakt</h2>
        <p>Habe ich dein Interesse geweckt? Dann kontaktiere mich.</p>
        <div className="kontakt__sectionHeader--alert">
          {danke && (
            <>
              <Puff height={30} width={30} color="#265a63" ariaLabel="loading" />
              <span>Vielen Dank für deine Nachricht!</span>
            </>
          )}
        </div>
        <div className="kontakt__sectionHeader--error">
          {error && <span>Ups...Es ist ein Fehler aufgetreten. <br /> Bitte versuche es später noch einmal.</span>}
        </div>
      </div>
      <form className="kontakt__form" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" required />
        <input name="email" type="email" placeholder="E-mail Addresse" required />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Deine Nachricht"
          required
        ></textarea>
        <button type="submit">Senden</button>
      </form>
    </section>
  );
}
