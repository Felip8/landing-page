import "../styles/testimonials.css";
import CardTestimonials from "./CardTestimonials";
import {
  listaDeTestemunhas,
  type ITestemunhas,
} from "./interfaces/Testemunhas";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <header>
        <span>
          <p className="desktop-only">Conselho de quem conhece</p>
          <h2>Cada cliente importa!</h2>
        </span>
        <p>
          Quem já pediu sabe da qualidade das nossas receitas, estamos tirando
          aquela ideia de que comida congelada tem de ser algo sem gosto,
          acompanhe abaixo os testemunhos de quem já comprou e aprovou.
        </p>
      </header>
      <div className="carousel">
        <div className="carousel-content">
          {/* Primeira renderização da lista original */}
          {listaDeTestemunhas.map((testemunhas) => (
            <CardTestimonials
              key={`orig-${testemunhas.id}`}
              testemunhas={testemunhas}
            />
          ))}

          {/* SEGUNDA RENDERIZAÇÃO (Os clones que criam a ilusão de infinito) */}
          {listaDeTestemunhas.map((testemunhas) => (
            <CardTestimonials
              key={`clone-${testemunhas.id}`}
              testemunhas={testemunhas}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
