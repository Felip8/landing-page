import Button from "./Button";
import { type IProdutos } from "./interfaces/Produtos";

interface ProdutosProps {
  produtos: IProdutos;
}

export default function CardProdutos({ produtos }: ProdutosProps) {
  const { imagem, nome, conteudo } = produtos;

  return (
    <div className="pricing-card premium">
      <div className="product-image-container">
        <img src={imagem} alt={`Imagem do produto ${nome}`} />
      </div>
      <span className="plan">
        <h3>{nome}</h3>
        <p>{conteudo}</p>
      </span>
      <span className="price"></span>
      <Button text="Pedir agora" key="premium" />
    </div>
  );
}
