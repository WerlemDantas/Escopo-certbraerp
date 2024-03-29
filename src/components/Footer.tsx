import { IconFace, IconInsta, IconLinkedin, IconTikTok } from "./IndexIcons";


export default function Footer(){
    return (
        <div className=" flex  bg-gray-900 text-white px-5 py-5">
            <p>Todos os direitos reservados a ©Copyright</p>
            <div className="flex flex-grow justify-end">
              <a className="m-3  bg-gray-400 rounded-full py-1 px-1 hover:bg-gray-100 " href="/">
                {IconLinkedin}
              </a>
              <a className="m-3  bg-gray-400 rounded-full py-1 px-1 hover:bg-gray-100 " href="/">
                {IconInsta}
              </a>
              <a className="m-3 bg-gray-400 rounded-full py-1 px-1 hover:bg-gray-100 " href="/">
                {IconFace}
              </a>
              <a className="m-3  bg-gray-400 rounded-full py-1 px-1 hover:bg-gray-100 " href="/">
                {IconTikTok}
              </a>
            </div>
            
        </div>
    )
}