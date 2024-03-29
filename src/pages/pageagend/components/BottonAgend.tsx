interface Button{
    children:any
    href?:string
}
export default function BottonAgend(props:Button){
    return (
        <div className="p-3">
            <button className={` flex items-center justify-center
               bg-blue-800 py-6 text-2xl px-24 m-0 rounded-full hover:bg-blue-600 
               hover:scale-105 transition-all font-extrabold
              `}> <a href={props.href}>{props.children}</a>
                
            </button>
        </div>
    )
}