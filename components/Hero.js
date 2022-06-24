import React from 'react'

function Hero() {
  return (
    <section id='home' className='hero'>
        <div className="hero__hero1--bg">
            <div className="container hero__hero1">
              <h1>FINDE IN <strong>DEIN</strong> GESUNDES LEBEN UND <strong>ENTFALTE</strong> DEIN POTENZIAL</h1>
              <img src='/assets/hero1.png' alt="gesudes Müsli mit Heidelbeere neben Eukalyptus " />
            </div>
        </div>
        <div className="hero__hero2--bg">
          <div className="container hero__hero2">
            <img src="/assets/hero2.png" alt="gesunde junge Frau in der Natur" />
            <h2>Was wäre möglich, wenn du dich in deinem Körper wohlfühlen und mit Energie und Freude durch dein Leben gehen könntest?</h2>
            <p>Ich gebe dir Raum, um laut zu denken und groß davon zu träumen. Die Coachings unterstützen dich darin (zurück) in ein Leben zu finden, in dem dein Körper dich nicht begrenzt, sondern trägt.</p>
          </div>
        </div>
    </section>
  )
}

export default Hero