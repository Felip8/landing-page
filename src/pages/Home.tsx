import "../styles/header.css";
import "../styles/utility.css";
import Hero from "../Components/Hero";
import Solution from "../Components/Solution";
import Testimonials from "../Components/Testimonials";
import Planos from "../Components/Produtos";
import Contato from "../Components/Contato";
import Footer from "../Components/footer";
import Header from "../Components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Solution />
      <Testimonials />
      <Planos />
      <Contato />
      <Footer />
    </>
  );
}
