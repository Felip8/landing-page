import Racao1 from "../../assets/images/racao1.png";
import Racao2 from "../../assets/images/racao2.png";
import Racao3 from "../../assets/images/racao3.png";
import Racao4 from "../../assets/images/racao4.png";
import Racao5 from "../../assets/images/racao5.png";
import Racao6 from "../../assets/images/racao6.png";

export interface IProdutos {
  id: number;
  imagem: string;
  nome: string;
  conteudo: string;
}

export const listaDeProdutos: IProdutos[] = [
  {
    id: 1,
    imagem: Racao1,
    nome: "Golden Gatos",
    conteudo: "Ração Golden Gatos Castrados sabor salmão 10,1kg",
  },
  {
    id: 2,
    imagem: Racao2,
    nome: "Special Dog",
    conteudo: "Ração Special Dog Carne 3Kg",
  },
  {
    id: 3,
    imagem: Racao3,
    nome: "Pista Mix",
    conteudo: "ALCON CLUB PSITA MIX 550G",
  },
  {
    id: 3,
    imagem: Racao4,
    nome: "Finotrato Cat Stix",
    conteudo: "Finotrato Cat Stix Atum 6 unidades 15g cada",
  },
  {
    id: 3,
    imagem: Racao5,
    nome: "Finotrato Nature",
    conteudo: "Finotrato Nature Adultos Rpm 15Kg",
  },
  {
    id: 3,
    imagem: Racao6,
    nome: "Ninho e nectar",
    conteudo: "Ninho e nectar para Beija-flor",
  },
];
