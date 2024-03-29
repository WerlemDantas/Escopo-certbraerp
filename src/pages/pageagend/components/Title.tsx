

interface TitleProps{
    titulo: string
    subtitulo: string
}
export default function Title(props:TitleProps){
    return (
        <div className="">
    
            <div className="flex items-center text-5xl text-blue-900 text-center justify-center font-extrabold ">
                <h1>{props.titulo}</h1>
            </div>
            <div className="flex items-center text-3xl text-gray-700 text-center justify-center font-bold">
                <h2>{props.subtitulo}</h2>
            </div>
        </div>
    )
}