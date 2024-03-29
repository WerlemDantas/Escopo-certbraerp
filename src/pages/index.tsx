import Botton from "../components/Botton";
import Cabecalho from "../components/Cabecaho";
import CardInfos from "../components/CardInfos";
import CardComents from "../components/CardsComents";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import TextApresentation from "../components/TextApresentation";
import Video from "../components/Video";


export default function Home() {
  return (

    <div className={`bg-cover bg-fixed bg-center bg-[url('../images/certimage.png')] h-full`}>
      <Cabecalho/>
      <Layout titulo="Proteja Suas Transações Online com Certificado Digital">
        
          <div className="m-3" >
              <Video/>
          </div>

        <div className="text-2xl">
        <TextApresentation/>
        </div>
        <div className="m-5">
          <Botton href="../pageagend/agendamento">Comprar Certificado</Botton>
        </div>
        <div>
          <CardInfos/>
          
        </div>

      </Layout>
      
      
      
    <div className={`flex flex-col bg-blue-300 items-center justify-center 
        px-8 py-12 mt-0
        `}>
      <div className="container items-center">
        <h1 className=" flex flex-col items-center justify-center text-4xl text-black">Avaliações de Clientes:</h1>
        <div className="flex flex-grow">
          <CardComents nome="João" comentario="Melhor lugar para adquirir certificado digital"/>
          <CardComents nome="Maria" comentario="Melhor lugar para adquirir certificado digital"/>
          <CardComents nome="Pedro" comentario="Melhor lugar para adquirir certificado digital"/>
          <CardComents nome="Marcos" comentario="Melhor lugar para adquirir certificado digital"/>
        </div>
      </div>
    </div>  
      <div>
        <Footer/>
      </div>
    </div>
  )
  }