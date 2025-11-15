import { useState } from 'react'
import './App.css'

import myPhoto from "./assets/myPhoto.webp"
import hdcHost from "./assets/hDc-host.webp"
import toDoList from "./assets/toDoList.webp"
import devNotes from "./assets/devNotes.webp"
import starbucks from "./assets/starbucks.webp"
import eletrica from "./assets/eletrica.webp"
import qrCode from "./assets/qrCode.webp"
import pass from "./assets/pass.webp"
import vcm from "./assets/vcm.webp"

import julianaBarbosa from "./assets/Clientes/julianaBarbosa.webp"

import Project from "./Component/Project"

function App() {
  return (
    <div className='App'>
      <header>
        <div className="text">
          <h1>Portifólio</h1>
          <h2>João Vitor</h2>
        </div>
        <img src={myPhoto} alt="" className='photo' />
      </header>
      <div className='principal'>
        <section className='text'>
          <div>
            <h2>Quem sou eu?</h2>
            <p><span className='bold'>Olá! Meu nome é João Vitor, tenho 13 anos e trabalho com programação a 2 anos.</span>
              sempre tive vontade de codar, e hoje, tenho esse sonho realizado no desenvolvimento de softwares front-end,
              tenho como competencias: <span className="bold">HTML, CSS, JS, React, Git, Github e GML(Game Maker Lenguage),
                além do uso do Figma como
                ferramenta de trabalho.</span>
            </p>
          </div>
          <div>
            <h2>Por que confiar em mim?</h2>
            <p>Apesar de novo, tenho força de vontade em fazer a diferença em uma empresa, sou responsavel, 
              tenho facilidade em me comunicar e em aprender novas tecnologias.</p>
          </div>
          <div>
            <h2>Entre em contato.</h2>
            <h2><a href="https://bit.ly/43j6AXZ" target="_blank"><i class="fa-brands fa-whatsapp"></i> - Whatsapp</a></h2>
          </div>
        </section>
          <h2>Conheça meus melhores projetos.</h2>
        <section className='projects'>
            <Project className="project" title="HDc-Host" img={hdcHost} desc={"Uma landing page de um site de hospedagem."} link={"https://joaovitor128.github.io/hDC-Host/"} />
            <Project className="project" title="To Do List" img={toDoList} desc={"Um site para organizar suas tarefas."} link={"https://joaovitor128.github.io/ToDoList/"} />
            <Project className="project" title="Dev Notes" img={devNotes} desc={"Um site para organizar suas tarefas."} link={"https://joaovitor128.github.io/DevNotes/"} />
            <Project className="project" title="Jhoo Elétrica" img={eletrica} desc={"Apenas meu MELHOR site, uma landing page de um grupo de eletricistas."} link={"https://joaovitor128.github.io/jhooEletrica/"} />
            <Project className="project" title="Gerador de Senhas" img={pass} desc={"Um site onde você pode criar uma senhas."} link={"https://joaovitor128.github.io/GeradorSenha/"} />
            <Project className="project" title="Gerador de QR Code" img={qrCode} desc={"Um site onde você pode criar um QR Code para seu site."} link={"https://joaovitor128.github.io/GeradorDeQRCode/"} />
            <Project className="project" title="Camp Simulator" img={vcm} desc={"Um site onde você pode simular de forma aleatorias campeonatos como Libertadores, Champios League, Copa de Mundo e Brasileirão"} link={"https://camp-simuler.netlify.app"} />
        </section>
          <h2>Site de Clientes.</h2>
        <section className='projects'>
            <Project  className="project" title="Juliana Barbosa Nails" img={julianaBarbosa} desc={"Um site de uma nail designer."} link={"https://juliana-barbosa.vercel.app"} />
        </section>
      </div>
    </div>
  )
}

export default App
