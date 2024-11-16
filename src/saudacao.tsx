interface SaudacaoProps {
    nome: string;
    idade: number; 
  }
  
  export function Saudacao({ nome, idade }: SaudacaoProps) {

    const maiorDeIdade = idade >= 18;

    return (
      <div>
        <h1>Olá {nome}, você tem {idade} anos</h1>
        <h2>Portanto você é {maiorDeIdade ? "maior" : "menor"} de idade</h2>
      </div>
    );
  }