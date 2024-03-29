import Botton2 from "../components/Botton2"

interface PacotesProps{
    tipo: string
    descricao: string
    valor: string
    href: string

    
}

export default function Pacotes(props:PacotesProps){
    return (
        <div className={` flex flex-col items-center text-center justify-center
         bg-gray-700 px-4 py-5 w-1/4 rounded-xl 
        m-7 hover:scale-105 transition-all hover:bg-gray-600
        `}>
            
            <div className={`text-gray-100 m-3
            `}>
                <div className="text-2xl font-extrabold m-3">
                  <h1>{props.tipo}</h1>
                </div>
                <div className="text-lg font-extrabold m-2">
                    <h2>{props.descricao}</h2>
                </div>
                <div className="flex bg-blue-800 items-center justify-center text-lg font-extrabold m-9 p-2 rounded-xl">
                    <h1>{props.valor}</h1>
                </div>
                <div className="flex items-center justify-center">
                    <Botton2 href={props.href}>Compre agora</Botton2>
                </div>

            </div>
        </div>
    )
}