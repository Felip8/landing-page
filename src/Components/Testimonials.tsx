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
      <section className="carousel">
        {listaDeTestemunhas.map((testemunhas: ITestemunhas) => (
          <CardTestimonials key={testemunhas.id} testemunhas={testemunhas} />
        ))}
      </section>
    </section>
  );
}
