import Image from "next/image"
import logo from "../../../images/Group 19.png"

export default function Header(){
    return(
          
            <div className=" bg-blue-900 px-8 py-4 fixed left-0 top-0 right-0  ">
              <div className="flex mr-6">
                <div>
                  <a href="/">
                    <Image
                    className="ml-12"
                     src={logo}
                     alt="Logo"
                     height={30}
                     width={64}
                    />
                  
                  </a>
                </div>  
             
                <a className="flex flex-grow px-1 justify-end text-white mr-2" href="/">Contato  |</a>
                <a className="flex px-1 justify-end text-white mr-2 " href="/">Pacotes  |</a>
                <a className="flex justify-end text-white ml-2" href="/">Entrar</a>
              </div>
            </div>
         
        
    )
}