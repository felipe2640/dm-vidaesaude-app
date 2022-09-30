import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CTAone from "../components/CTAone";
import CTAtwo from "../components/CTAtwo";
import FormsCTA from "../components/formCTA";
import Header from "../components/Headerdm";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Diniz e Mourão Vida e saúde</title>
        <link rel="icon" href="/exampleDM.png" />
      </Head>
      <Header />
      <CTAone />
      <CTAtwo />
    </>
  );
};

export default Home;
