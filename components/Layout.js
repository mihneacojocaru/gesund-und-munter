import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className="layout">
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.svg" type="image/svg"/>
        <link rel="apple-touch-icon" href="/favicon.svg" type="image/svg" />
        <link rel="manifest" href="/manifest.json" />
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Gesund und Munter | BERATUNG",
  description: "Ganzheitliche Gesundheits- und Ernährungsberatung",
  keywords:
    "gesundheit ernährung sport einstellung veränderung bitterstoffe psychische gesundheit beratung",
};
