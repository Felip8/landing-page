import "../styles/solution.css";
import CardSolucoes from "./CardSolucoes";
import { listaDeSolucoes } from "./interfaces/Solucoes";
import { type ISolucoes } from "./interfaces/Solucoes";

export default function Solution() {
  return (
    <section className="container" id="solution">
      <header>
        <span>
          <h2>Soluções</h2>
          <span className="desktop-only">
            <h2>O seu pet vai adorar</h2>
          </span>
        </span>
        <p>
          Na <strong> Agro & Pet Boiadeiro</strong>, você encontra nutrição
          premium, acessórios de qualidade e produtos de higiene para manter seu
          pet saudável, confortável e protegido.
        </p>
      </header>
      <section className="even-columns">
        {listaDeSolucoes.map((solucoes: ISolucoes) => (
          <CardSolucoes key={solucoes.id} solucoes={solucoes} />
        ))}
      </section>
    </section>
  );
}
