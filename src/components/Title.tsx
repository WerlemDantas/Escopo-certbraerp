interface TitleProps{
    children: string
}

export default function Title(props:TitleProps){
    return (
        <div className="m-7">
            <h1>{props.children}</h1>
        </div>

    )
}