import Star from "../assets/star.svg";
import StarEmpty from "../assets/star2.svg"; // Importe o SVG da estrela vazia
import { type ITestemunhas } from "./interfaces/Testemunhas";

interface TestemunhaProps {
  testemunhas: ITestemunhas;
}

export default function CardTestimonials({ testemunhas }: TestemunhaProps) {
  // Certifique-se de que "estrelas" está sendo mapeada do seu arquivo de interfaces/mock
  const { imagem, conteudo, nome, profissao, estrelas } = testemunhas;

  // A matemática do seu professor aplicada aqui:
  const totalStars = 5;
  const emptyStars = totalStars - (estrelas || 5); // Fallback para 5 caso o dado mude ou suma

  return (
    <div className="carousel-content">
      <div className="carousel-card">
        <img src={imagem} alt="Imagem perfil cliente" />
        <span className="testimony">
          <p>{conteudo}</p>
        </span>
        <div className="flex gap-1 rating-stars">
          {/* Loop para as estrelas cheias */}
          {Array.from({ length: estrelas || 5 }).map((_, index) => (
            <img
              key={`full-${index}`}
              src={Star}
              alt="Estrela"
              className="w-5 h-5"
            />
          ))}

          {/* Loop para preencher o resto com estrelas vazias */}
          {Array.from({ length: emptyStars }).map((_, index) => (
            <img
              key={`empty-${index}`}
              src={StarEmpty}
              alt="Estrela Vazia"
              className="w-5 h-5"
            />
          ))}
        </div>
        <span className="names">
          <p>{nome}</p>
          <p>{profissao}</p>
        </span>
      </div>
    </div>
  );
}
