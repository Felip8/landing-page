import { type ISolucoes } from "./interfaces/Solucoes";

interface SolucoesProps {
  solucoes: ISolucoes;
}

export default function CardSolucoes({ solucoes }: SolucoesProps) {
  const { imagem, titulo, conteudo } = solucoes;
  return (
    <div className="card">
      <span>
        <img src={imagem} alt="ícone campeão" width={64} height={64} />
      </span>
      <div>
        <h3>{titulo}</h3>
        <p>{conteudo}</p>
        <hr />
      </div>
    </div>
  );
}
