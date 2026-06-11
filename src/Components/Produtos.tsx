import "../styles/precos.css";
import CardProdutos from "./CardProdutos";
import { listaDeProdutos, type IProdutos } from "./interfaces/Produtos";

export default function Produtos() {
  return (
    <section id="pricing" className="container">
      <header>
        <p className="desktop-only">Produtos e preços</p>
        <h2>Nossos produtos</h2>
      </header>

      <div className="products-grid">
        {listaDeProdutos.map((produtos: IProdutos) => (
          <CardProdutos key={produtos.id} produtos={produtos} />
        ))}
      </div>
    </section>
  );
}
