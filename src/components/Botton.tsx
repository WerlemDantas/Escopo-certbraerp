interface Button{
    children:any
    href:string
}
export default function Botton(props:Button){
    return (
        <div className="p-3">
            <button  className={`
               bg-blue-800 py-4 px-10 m-7 rounded-full hover:bg-blue-600 
               hover:scale-105 transition-all font-bold
              `}> <a href={props.href}>{props.children}</a>
                
            </button>
        </div>
    )
}