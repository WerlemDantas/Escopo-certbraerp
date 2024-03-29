import { IconMComent, IconUser } from "./IndexIcons"


interface CardComentsprops{
    nome: string
    comentario: string
}

export default function CardComents(props:CardComentsprops){
   return (
    <div className="container bg-gray-400 px-5 py-5 w-1/4 rounded-xl m-5 hover:scale-105 transition-all">
        <div>
            <div className=" flex  justify-end m-3">
              {IconMComent}
            </div>
            <div className="flex justify-start m-3 bg-gray-50 w-6 h-6 rounded-full">
              {IconUser}
            </div>
        </div>
        
        <h1 className=" flex text-3xl ml-3">{props.nome}</h1>
        <div className="ml-1 mt-3">
            <p className={
                `bg-gray-50 px-4 py-5 text-2xl
                 rounded-xl ml-1
                
                `}>{props.comentario}</p>
        </div>
    </div>
   )
}