import Image from "next/image";
import img from '../images/Cert2.jpg'
import Botton from "../components/Botton"

export default function CardInfos(){
    return (
        <div className={`
        flex flex-col gap-20 items-center justify-center 
        w-full px-8 py-12 bg-white text-black 
        rounded-xl
        `}>
            
            <div className=" container flex items-center justify-center">
              <h1 className="text-3xl font-bold">Com nosso Certificado Digital, você pode:</h1>
            </div>
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="col-span-1">
                <Image 
                 className="rounded-xl m-1"
                 src={img}
                 width={700}
                 height={500}
                //  sizes="(max-width: 768px) 100vw, 33vw"
                 alt="Imagem Desktop"
                />
              </div>

              <div className="flex items-center justify-center flex-col col-span-1 gap-8">
                
                <p>
                  <b>Criptografar Suas Informações:</b> Proteja seus 
                dados sensíveis contra acessos não autorizados com criptografia avançada.
                </p>
                
                <p>
                  <b>Assinar Documentos Digitalmente:</b> Assine contratos, declarações e 
                outros documentos de forma segura e legalmente vinculativa.
                </p>
                
                <p>
                  <b>Verificar Sua Identidade:</b> Garanta que está interagindo com partes legítimas, 
                fornecendo confiança a seus clientes e parceiros.
                </p>
                
                <p>
                  <b>Conformidade Legal:</b> Esteja em conformidade com regulamentações e requisitos legais para transações digitais.

                </p>
              </div>
              <div className=" flex text-white justify-start items-center">
              <Botton href="../pageagend/agendamento">Adquirir Certificado Agora!</Botton>
              </div>
            </div>

        </div>
    )
}