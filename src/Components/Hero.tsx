import HeroRectangleOne from "../assets/images/ChatGPT Image 11 de jun. de 2026, 16_35_32.png";
// import HeroRectangleTwo from "../assets/images/HeroRectangleTwo.png";
import "../styles/hero.css";
import Button from "./Button";

export default function Hexto() {
  return (
    <section id="hero">
      <span className="desktop-only">
        {/* <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" /> */}
      </span>
      <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
      <div className="container content">
        {/* <p className="desktop-only">Olá</p> */}
        <h1>Cuidando de quem faz parte da sua vida!</h1>
        <p>
          Produtos para Pets, Agropecuária e Equinos com Qualidade e Confiança
        </p>
        <div className="flex gap-1">
          <span>
            <Button text="Cadastre-se" />
          </span>
          <span className="desktop-only">
            <Button text="Veja mais" secondary />
          </span>
        </div>
      </div>
    </section>
  );
}
