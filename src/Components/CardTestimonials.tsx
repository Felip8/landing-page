import Star from "../assets/star.svg";
import StarEmpty from "../assets/star2.svg";
import { type ITestemunhas } from "./interfaces/Testemunhas";

interface TestemunhaProps {
  testemunhas: ITestemunhas;
}

export default function CardTestimonials({ testemunhas }: TestemunhaProps) {
  const { imagem, conteudo, nome, profissao, estrelas } = testemunhas;

  const totalStars = 5;
  const emptyStars = totalStars - (estrelas || 5);

  return (
    <div className="carousel-content">
      <div className="carousel-card">
        <img src={imagem} alt="Imagem perfil cliente" />
        <span className="testimony">
          <p>{conteudo}</p>
        </span>
        <div className="flex gap-1 rating-stars">
          {/* loop estrelas cheia */}
          {Array.from({ length: estrelas || 5 }).map((_, index) => (
            <img key={index} src={Star} alt="Estrela" className="w-5 h-5" />
          ))}

          {/* loop estrela vazia */}
          {Array.from({ length: emptyStars }).map((_, index) => (
            <img
              key={index}
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
