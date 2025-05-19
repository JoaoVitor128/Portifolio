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
          <article>
            <h2>Quem sou eu?</h2>
            <p><span className='bold'>Olá! Meu nome é João Vitor, tenho 13 anos e sou super curioso, responsável e criativo.</span>
              Estou começando no mundo dos freelas e adoro aprender coisas novas!
              Já tenho experiência com HTML, CSS, JS, Git e Github e React JS, e estou sempre buscando melhorar.
              Mesmo sendo jovem, levo a sério os compromissos que assumo e entrego tudo com dedicação e capricho.
              Se você precisa de uma ajudinha com alguma tarefa, pode contar comigo! 😊</p>
          </article>
          <article>
            <h2>Por que confiar em mim?</h2>
            <p>Mesmo tendo apenas 13 anos, eu levo muito a sério tudo o que faço. Quando me comprometo com um trabalho, dou o meu melhor para entregar no prazo, com qualidade e atenção aos detalhes. Sou uma pessoa responsável, organizada e gosto de aprender com cada experiência.

              Entendo que confiança se constrói com atitudes, então sempre busco ser claro na comunicação, ouvir com atenção o que o cliente precisa e manter o respeito em todas as etapas do trabalho.

              Além disso, tenho o apoio dos meus responsáveis, o que garante ainda mais segurança para quem trabalha comigo. Se você me der uma chance, vai ver que posso ser jovem, mas sou muito comprometido! 😊</p>
          </article>
          <article>
            <h2>Entre em contato.</h2>
            <h2><a href="https://bit.ly/43j6AXZ" target="_blank"><i class="fa-brands fa-whatsapp"></i> - Whatsapp</a></h2>       
          </article>
        </section>
        <section className='projects'>
          <h2>Conheça meus melhores projetos.</h2>
          <article>
            <Project title="HDc-Host" img={hdcHost} desc={"Uma landing page de um site de hospedagem."} link={"https://joaovitor128.github.io/hDC-Host/"} />
            <Project title="To Do List" img={toDoList} desc={"Um site para organizar suas tarefas."} link={"https://joaovitor128.github.io/ToDoList/"} />
          </article>
          <article>
            <Project title="Dev Notes" img={devNotes} desc={"Um site para organizar suas tarefas."} link={"https://joaovitor128.github.io/DevNotes/"} />
            <Project title="Starbucks" img={starbucks} desc={"Um site que fiz no inicio dos meus estudos, onde criei um site do starbucks."} link={"https://joaovitor128.github.io/starbucks/"} />
          </article>
          <article>
            <Project title="Jhoo Elétrica" img={eletrica} desc={"Apenas meu MELHOR site, uma landing page de um grupo de eletricistas."} link={"https://joaovitor128.github.io/jhooEletrica/"} />
            <Project title="Gerador de Senhas" img={pass} desc={"Um site onde você pode criar uma senhas."} link={"https://joaovitor128.github.io/GeradorDeSenhas/"} />
          </article>
          <article>
          <Project title="Gerador de QR Code" img={qrCode} desc={"Um site onde você pode criar um QR Code para seu site."} link={"https://joaovitor128.github.io/GeradorDeQRCode/"} />
          </article>
        </section>
      </div>
    </div>
  )
}

export default App
