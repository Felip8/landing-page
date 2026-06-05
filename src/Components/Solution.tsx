import Champion from "../assets/champion.svg";
import "../styles/solution.css";

export default function Solution() {
  return (
    <section className="container" id="solution">
      <header>
        <span>
          <h2>Soluções</h2>
          <span className="desktop-only">
            <h2>Sob medida para você</h2>
          </span>
        </span>
        <p>
          Inovação é com a gente! A <strong>DonaFrost </strong>
          já conquistou diversos clientes, seja você mais um deles, veja tudo
          que pode ganhar com nossos serviços.
        </p>
      </header>
      <section className="even-columns">
        <div className="card">
          <span>
            <img src={Champion} alt="ícone campeão" width={64} height={64} />
          </span>
          <div>
            <h3>Produto Vencedor</h3>
            <p>
              Ideia matadora, nosso time já ganhou diversos eventos de inovação
              com nosso produto, entre eles podemos citar o CityFarm da FAG e
              Startup Garage.
            </p>
            <hr />
          </div>
        </div>
      </section>
    </section>
  );
}
