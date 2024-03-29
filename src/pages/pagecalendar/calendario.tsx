
import Footer from "@/src/components/Footer";
import Layout from "../../components/Layout";
import BottonAgend from "../pageagend/components/BottonAgend";
import Header from "../pageagend/components/Header"
import TextInit from "./components/TextInit";
import Title from "./components/Title";
import Botton2 from "../pageagend/components/Botton2";

export default function Calendario(){
    return (
        <div className=" m-0 bg-gray-200">
            <Header/>
            <Layout>

                <div className="flex justify-start items-start">
                   <Botton2 href="../pageagend/agendamento">Voltar</Botton2>
                </div>
                
                <div className="m-5">
                  <Title titulo="Agendamento de Videoconferência"/>
                </div>
                <div className="">
                    <TextInit/>
                </div>
                <div className="">
                    <Title subtitulo="Selecione abaixo a data e hora que melhor se adequam à sua agenda:"/>
                </div> 
                <div className=" flex flex-col items-center justify-center rounded-xl bg-white">
                   <iframe className="w-[1000px] h-[650px] m-5 rounded-xl"
                      src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FSao_Paulo&bgcolor=%23ffffff&showPrint=0&hl=pt_BR&mode=WEEK&showCalendars=0&showTabs=0&title=Video%20Confer%C3%AAncia&src=bHVjYXMubWVkZWlyb3NAYnJhZXJwLmNvbS5icg&src=Y19hZTI1ZjcwOTEzNjQ3NzVmOGE2OWJhODljNDRhYTkwNzVhMTc2NTZiMzE5ZjcyODg4MTUwMzM4NzExZWRlZGI3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=cHQtYnIudXkub2ZmaWNpYWwjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043"
                     // style="border-width:0" width="800" height="600" frameBorder="0" scrolling="no"

                   ></iframe>
                   <div className="m-3">
                    <BottonAgend href="../pagepayment/pagamento">continuar para pagamento </BottonAgend>
                   </div>
                </div>          
            </Layout>

            <Footer/>
        </div>
    )
}