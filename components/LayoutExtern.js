 import Head from 'next/head'
 import Header from './HeaderExtern'
 import Footer from './Footer'
 
 export default function Layout({title, keywords, description, children}) {
   return (
     <div className='layout'>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name='keywords' content={keywords}/>
        </Head>
        <Header/>
          {children}
        <Footer/>
     </div>
   )
 }

 Layout.defaultProps = {
    title: "Gesund und Munter | BERATUNG",
    description: "Lorem ipsum dolor",
    keywords: "these are the keywords",
 }
 