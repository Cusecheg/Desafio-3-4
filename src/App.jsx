// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './Componentes/Navbar'
import Presentation from './Componentes/Presentation'
import Projects from './Componentes/Projects'
import './App.css'
import Aboutme from './Componentes/Aboutme'
import Footer from './Componentes/Footer'

function App() {

  return (
    <>
      <Navbar
        linkLinkedin='https://www.linkedin.com/in/juan-useche-79b395235/'
        linkGithub='https://github.com/Cusecheg' />
      <Presentation />
      <Projects />
      <Aboutme
        title='Sobre mim'
        year1='2019'
        year2='2024'
        textYear1={
          <>
          <br/>
          <br/>
            Curso: Ensino Medio. <br/>
            Instituto: E.T.I Simón Rodriguez.  <br/>
            Título: Técnico Medio em Eletrônica. <br/>
            Pais: Venezuela. <br/>
            Status: Concluido.
          </>
        }        
        textYear2={
        <>
        <br/>
        <br/>
          Curso: Formação em Tecnologia. <br/>
          Instituto: Escola Dnc.  <br/>
          Título: Dev Full-Stack. <br/>
          Pais: Brasil. <br/>
          Status: Em andamento.
        </>
        } />



        
      <Footer
        linkWhatsaap='https://wa.me/qr/BASVWSE4NYQ3J1'
        contact='(47) 989217524'
        email='Juanuseche47@gmil.com'
        linkLinkedin='https://www.linkedin.com/in/juan-useche-79b395235/'
        linkGithub='https://github.com/Cusecheg'
        linkInstagram='https://www.instagram.com/cusecheg_/'/>
      
    </>
  )
}

export default App
