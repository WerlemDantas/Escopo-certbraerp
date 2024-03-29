import Pacotes from "./components/Pacotes";
import Layout from "@/src/components/Layout";
import Title from "./components/Title";
import Form from "./components/Formnomecpjcnpj";
import Header from "../pageagend/components/Header"
import Botton2 from "./components/Botton2";
import React from 'react'  
import Recaptcha from "./components/Recaptchav3";
import BottonAgend from "./components/BottonAgend";
import Footer from "@/src/components/Footer";

export default function Agendamento (){
    return (
       <div className="overflow-x-hidden bg-gray-200">
         
        <Header/>
        
        <Layout >

            <div className="flex justify-start items-start">
                <Botton2 href="../">Voltar</Botton2>
            </div>
         
           <div>
             <Title titulo="Escolha a opção abaixo:" subtitulo="para compra do certificado"/>
           </div>               
         
        </Layout>
         <div className="flex items-center justify-center bg-blue-300 p-9 w-screen" >  
            <div className="flex flex-grow">
            
              <Pacotes tipo="e-CPF" href="#compra-agend" descricao="Certificado Digital A1" valor="R$ 90,00"/>
              <Pacotes tipo="e-CNPJ" href="#compra-agend" descricao="Certificado Digital A1" valor="R$ 110,00"/>
              <Pacotes tipo="e-CPF" href="#compra-agend" descricao="Certificado Digital A3" valor="R$ 110,00"/>
              <Pacotes tipo="e-CNPJ" href="#compra-agend" descricao="Certificado Digital A3" valor="R$ 130,00"/>
            </div>            
            
         </div>
         <div id="compra-agend" className="bg-gray-700 m-7 rounded-xl px-9 py-1">
         <h1 className="flex items-center text-white justify-center mt-5 font-extrabold text-4xl">Preencha os dados abaixo para prosseguir:</h1>
               
               <div className="flex flex-grow">
                 <div className="flex flex-col p-5 m-3 items-end">
                    <Form tipoin="text" tipo="Nome Completo" valor="Digite seu nome completo ..."/>
                    <Form tipoin="text" tipo="CPF/CNPJ" valor="CPF/CNPJ"/>
                 </div>
                <div className="flex flex-col p-5 m-3 items-end justify-end">
                  <Form tipoin="text" tipo="Telefone" valor="(00) 00000-0000"/>
                  <Form tipoin="text" tipo="E-mail" valor="Digite seu e-mail ..."/>
                </div>

               </div>
              
              
              <div className="flex flex-col items-end justify-end m-0 text-white">
                 <Botton2 href="../pageagend/agendamento">Upload arquivos</Botton2>
                 <div className="m-2">
                   <Recaptcha/>
                 </div>
              </div>
              <div className="flex items-center justify-center text-white mb-3">
                   <BottonAgend href="../pagecalendar/calendario">Continuar para agendamento</BottonAgend>
              </div>
         </div>
         <Footer/>

       </div>
    )
}