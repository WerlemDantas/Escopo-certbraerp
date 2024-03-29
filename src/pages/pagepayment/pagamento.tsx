import Layout from "@/src/components/Layout";
import Title from "./components/Title";
import Header from "../pageagend/components/Header"
import Contador from "./components/Contador";
import Botton2 from "../pageagend/components/Botton2";
import Footer from "@/src/components/Footer";
import BottonAgend from "../pageagend/components/BottonAgend";




   
    

export default function Pagamento(){
    return (
        <div className="bg-gray-200">
            <Header/>
            <Layout>
                <div className="flex justify-start items-start">
                   <Botton2 href="../pagecalendar/calendario">Voltar</Botton2>
                </div>
           

                <Title titulo="Pagamento do Certificado Digital"/>
                <div className="flex text-center justify-center m-10 p-5 ">
                   <Contador/>
                </div>

                <div>
                    <Title subtitulo="Escolha abaixo a forma de pagamento:"/>
                </div>
                <div className="flex items-center justify-center bg-white rounded-xl p-56 m-7">
                       <h1 className="text-black font-extrabold ">Aqui ficará o gateway de pagamento</h1>
                </div>

                <div className="flex items-center justify-center">
                    <BottonAgend>Finalizar Pagamento</BottonAgend>
                </div>



            </Layout>

            <Footer/>

            

            
        </div>
    )}
