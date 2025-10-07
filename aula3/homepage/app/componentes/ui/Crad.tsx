interface ICard {
    titulo: string,
    descricao: string
    children?: React.ReactNode
} //se tem variável o valor não pode ser nulo
  //chlidren não é obrigatório, por isso tem ? e renderiza sem nada


export default function Card({titulo, descricao, children}:ICard){
    return(
        <div className="bg-red-500 p-4 rounded-lg w-[30vw]">
            <h1>{titulo}</h1>
            <p>{descricao}</p>
            {children} {/*componente, não precisa estar dentro de uma tag html*/}
        </div>
    )
}