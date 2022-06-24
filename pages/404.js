import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Layout from '../components/LayoutExtern'
import {RiAlarmWarningLine} from 'react-icons/ri'
import { Puff } from "react-loader-spinner";

export default function PageNotFound() {

  const router = useRouter();

  useEffect(()=>{
    
    setTimeout(()=>{
        router.push('/')
    }, 3000)
    
  }, [])

  return (
    <Layout>
        <section className='notFound container'>
            <div className="notFound__text">
                <h4><RiAlarmWarningLine/> Oops!</h4>
                <p>Die Seite, die du suchst, gibt es leider nicht (mehr). Oder war vielleicht ein Fehler in dem Link, den du geklickt/eingegeben hast?</p>
                <p>Keine Sorgen. Du wirst automatisch auf die Hauptseite weitergeleitet.</p>
                <p></p>
                <h2>404</h2>
            </div>
            <div className="notFound__image">
                <img src="/assets/404.png" alt="dog looking at computer" />
            </div>
        </section>
    </Layout>
  )
}
