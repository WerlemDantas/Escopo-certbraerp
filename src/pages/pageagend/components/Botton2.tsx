interface Button{
    children:any
    href?:string
}
export default function Botton2(props:Button){
    return (
        <div className="p-0">
            <button className={` flex items-center justify-center
               bg-blue-800 py-2 px-7 text-sm rounded-full hover:bg-blue-600 
               hover:scale-105 transition-all font-extrabold
              `}> <a href={props.href}>{props.children}</a>
                
            </button>
        </div>
    )
}