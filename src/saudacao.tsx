interface SaudacaoProps {
    nome: string;
    idade: number; 
  }
  
  export function Saudacao({ nome, idade }: SaudacaoProps) {
    return (
      <div>
        <h1>Olá {nome}, você tem {idade} anos</h1>
      </div>
    );
  }