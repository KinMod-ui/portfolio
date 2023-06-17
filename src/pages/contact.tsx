import Head from "next/head";
import Contact from "../components/contact/contactPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pratham Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contact />
    </>
  );
}
