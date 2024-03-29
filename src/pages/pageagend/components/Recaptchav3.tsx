import { IconRecaptch } from "@/src/components/IndexIcons";

export default function Recaptcha(){
    return(
        <div>
            <div> 
                <div className="flex flex-grow items-center m-2">
                  
                  <input className="m-2 h-5 w-5" type="checkbox" name="" id="" />
                  <h1 className="text-lg m-1 font-bold">Eu não sou um robô</h1>
                </div>
                <div className="flex items-center justify-end">
                  {IconRecaptch}
                </div>
            </div>
        </div>
    )
}