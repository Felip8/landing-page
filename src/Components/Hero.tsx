import HeroRectangleOne from "../assets/images/HeroRectangleOne.png";
import HeroRectangleTwo from "../assets/images/HeroRectangleTwo.png";
import "../styles/hero.css";
import Button from "./Button";

export default function Hexto() {
  return (
    <section id="hero">
      <span className="desktop-only">
        <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
      </span>
      <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
      <div className="container content">
        <p className="desktop-only">Olá</p>
        <h1>
          Comida de mãe direto no seu apê, é só pedir que entregamos para você!
        </h1>
        <p>
          Já pensou em matar a saudade daquela comida caseira? O melhor de tudo,
          nossas receitas são 100% saudáveis, bora entrar no shape.
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
