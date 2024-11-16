interface SaudacaoProps {
    nome?: string;
    idade?: number; 
  }
  
  export function Saudacao({ nome, idade }: SaudacaoProps) {

    const maiorDeIdade = idade && idade >= 18;
    const nomeDisplay = nome ? nome : "Visitante"; 
    const idadeDisplay = idade !== undefined ? idade : "desconhecida";

    return (
      <div>
        <h1>Olá {nomeDisplay}, você {idade ? `tem ${idadeDisplay} anos`: "não declarou sua idade"}</h1>
        <h2>Portanto você é {idade? `${maiorDeIdade ? "maior" : "menor"} de idade`: "de idade desconhecida"}</h2>
      </div>
    );
  }