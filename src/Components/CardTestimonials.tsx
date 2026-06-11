import { type ITestemunhas } from "./interfaces/Testemunhas";

interface TestemunhaProps {
  testemunhas: ITestemunhas;
}

export default function CardTestimonials({ testemunhas }: TestemunhaProps) {
  const { imagem, conteudo, nome, profissao } = testemunhas;

  return (
    <div className="carousel-content">
      <div className="carousel-card">
        <img src={imagem} alt="Imagem perfil cliente" />
        <span className="testimony">
          <p>{conteudo}</p>
        </span>
        {/* <span className="rating">
              <img src={Star} alt="ícone estrela" width={22} height={20} />
              <img src={Star} alt="ícone estrela" width={22} height={20} />
              <img src={Star} alt="ícone estrela" width={22} height={20} />
              <img src={Star} alt="ícone estrela" width={22} height={20} />
              <img
                src={StarOuter}
                alt="ícone estrela sem fundo"
                width={20}
                height={22}
              />
            </span> */}
        <span className="names">
          <p>{nome}</p>
          <p>{profissao}</p>
        </span>
      </div>
    </div>
  );
}
