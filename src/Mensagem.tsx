interface MensagemProps {
    texto: String,
}
export function Mensagem({texto}:MensagemProps){
    return (
        <div>
            <h1>{texto}</h1>
        </div>
    )
}