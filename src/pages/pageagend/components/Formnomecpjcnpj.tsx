import React, { useState } from 'react'


interface FormProps{
    tipo: string
    valor?:string
    tipoin: "text" | "number"
}



export default function Form(props:FormProps){     
    
    return(

    <div className=" flex flex-col items text-white font-bold text-3xl m-0 px-5 py-8 ">  
        
        <label>{props.tipo}</label>
        <input type={props.tipoin} pattern="([aA-zZ]+)" placeholder={props.valor} className={`flex w-96 h-11 rounded-lg
                  bg-gray-300  m-2 border-2 focus:border-blue-500
                   focus:outline-none text-black font-normal text-xl text-left focus:bg-white `}
                   />
    </div>
    )
}