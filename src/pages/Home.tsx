import "../styles/header.css";
import "../styles/utility.css";
import Hero from "../Components/Hero";
import Solution from "../Components/Solution";
import Testimonials from "../Components/Testimonials";
import Planos from "../Components/Produtos";
import Contato from "../Components/Contato";
import Footer from "../Components/footer";
import Header from "../Components/Header";

// Importações do React-Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

      {/* Configuração ideal do Toastify integrada ao seu site */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
