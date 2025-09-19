import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Donation from "@/components/Donation";
import Contact from "@/components/Contact";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>O.N.G Santé - Soins de qualité accessibles | Abidjan, Côte d'Ivoire</title>
        <meta name="description" content="Des soins de rêve à portée de main. ONG dédiée aux soins de santé abordables et de qualité supérieure en Côte d'Ivoire depuis 2018." />
        <meta name="keywords" content="ONG santé, soins médicaux, Abidjan, Côte d'Ivoire, consultations, imagerie médicale, urgences, tarifs accessibles" />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <main>
        <Hero />
        <About />
        <Services />
        <Donation />
        <Contact />
      </main>
    </>
  );
};

export default Home;