import woman1 from "../../assets/images/woman3.png";
import woman2 from "../../assets/images/woman2.png";
import man1 from "../../assets/images/man.png";
import man2 from "../../assets/images/men2.png";

export interface ITestemunhas {
  id: number;
  imagem: string;
  conteudo: string;
  nome: string;
  profissao: string;
}

export const listaDeTestemunhas: ITestemunhas[] = [
  {
    id: 1,
    imagem: woman1,
    conteudo:
      "O atendimento é excelente e as rações são sempre fresquinhas. Meu cachorro aceitou super bem a Special Dog que comprei aqui, o pelo dele está lindo e o preço foi o melhor da região!",
    nome: "Priscila Magalhães",
    profissao: "Arquiteta",
  },
  {
    id: 2,
    imagem: woman2,
    conteudo:
      "O atendimento é excelente e as rações são sempre fresquinhas. Meu cachorro aceitou super bem a Special Dog que comprei aqui, o pelo dele está lindo e o preço foi o melhor da região!",
    nome: "Priscila Magalhães",
    profissao: "Arquiteta",
  },
  {
    id: 3,
    imagem: man1,
    conteudo:
      "O atendimento é excelente e as rações são sempre fresquinhas. Meu cachorro aceitou super bem a Special Dog que comprei aqui, o pelo dele está lindo e o preço foi o melhor da região!",
    nome: "Priscila Magalhães",
    profissao: "Arquiteta",
  },
  {
    id: 4,
    imagem: man2,
    conteudo:
      "O atendimento é excelente e as rações são sempre fresquinhas. Meu cachorro aceitou super bem a Special Dog que comprei aqui, o pelo dele está lindo e o preço foi o melhor da região!",
    nome: "Priscila Magalhães",
    profissao: "Arquiteta",
  },
];
