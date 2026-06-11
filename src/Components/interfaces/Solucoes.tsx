import Nutricao from "../../assets/nutricao.svg";
import Bone from "../../assets/bone.svg";
import Higiene from "../../assets/higiene.svg";

export interface ISolucoes {
  id: number;
  imagem: string;
  titulo: string;
  conteudo: string;
}

export const listaDeSolucoes: ISolucoes[] = [
  {
    id: 1,
    imagem: Nutricao,
    titulo: "Nutrição Premium e Rações",
    conteudo:
      "Oferecemos as melhores marcas de rações do mercado para cães e gatos. Fórmulas com nutrição completa, balanceada, sem corantes e específicas para cada fase da vida ou necessidade do seu animal de estimação.",
  },
  {
    id: 2,
    imagem: Bone,
    titulo: "Acessórios, Brinquedos e Conforto",
    conteudo:
      "Garanta o bem-estar e a diversão do seu pet. Contamos com uma linha completa de casinhas confortáveis, bebedouros práticos e brinquedos interativos desenvolvidos para gastar energia, reduzir o estresse e estimular o desenvolvimento saudável.",
  },
  {
    id: 3,
    imagem: Higiene,
    titulo: "Estética, Higiene e Cuidados",
    conteudo:
      "Mantenha o seu amigo limpo, cheiroso e protegido. Nossa seleção inclui cremes de hidratação, shampoos específicos, produtos para banho e uma linha de cuidados para garantir pelos brilhantes, pele protegida e livre de parasitas.",
  },
];
