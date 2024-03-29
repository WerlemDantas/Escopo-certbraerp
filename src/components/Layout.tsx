import Title from "./Title"
import Video from "./Video"

interface LayoutProps{
    titulo?: string
    children: any
}


export default function Layout(props:LayoutProps){
    return (
        <div  className={`
        mt-14
        px-10 py-8 text-white rounded-xl
        m-6 text-4xl bg-scroll
      `} >
            <Title>{props.titulo}</Title>
            <div className="m-5 text-2xl">
              {props.children}
            </div>

        </div>
    )
}