import woman1 from "../../assets/images/woman3.png";
import woman2 from "../../assets/images/woman2.png";
import man1 from "../../assets/images/man.png";
import man2 from "../../assets/images/men2.png";

export interface ITestemunhas {
  id: number;
  imagem: string;
  conteudo: string;
  estrelas: number;
  nome: string;
  profissao: string;
}

export const listaDeTestemunhas: ITestemunhas[] = [
  {
    id: 1,
    imagem: woman1,
    estrelas: 5,
    conteudo:
      "O atendimento é excelente e as rações são sempre fresquinhas. Meu cachorro aceitou super bem a Special Dog que comprei aqui, o pelo dele está lindo e o preço foi o melhor da região!",
    nome: "Priscila Magalhães",
    profissao: "Arquiteta",
  },
  {
    id: 2,
    imagem: woman2,
    estrelas: 4,
    conteudo:
      "Melhor pet shop! Sempre que preciso mandar a ração dos meus gatos, eles entregam super rápido aqui em casa. Facilita demais a minha rotina e o atendimento pelo WhatsApp é nota 10.",
    nome: "Mariana Costa",
    profissao: "Designer",
  },
  {
    id: 3,
    imagem: man1,
    estrelas: 5,
    conteudo:
      "Lugar completo! Encontro desde as marcas de ração que meus pets gostam até os produtos de higiene e cremes específicos para o banho deles. Recomendo de olhos fechados.",
    nome: "Carlos Eduardo",
    profissao: "Engenheiro",
  },
  {
    id: 4,
    imagem: man2,
    estrelas: 4,
    conteudo:
      "Sou cliente fiel por causa da confiança e das ofertas imperdíveis. Encontro tudo o que preciso para os meus animais de estimação em um só lugar e com preços muito justos.",
    nome: "Rodrigo Almeida",
    profissao: "Administrador",
  },
];
