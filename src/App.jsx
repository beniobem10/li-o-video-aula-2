import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 

function App() {
  return (
    <>
      <body>
          <header>
            <img src="" alt="" />
          </header>
          
          <main>
              <section className='descricao'>
                <h1>Acesse a plataforma</h1>
                
                <p>Faça seu login ou registre-se para começart seus projetos ainda hoje.</p>
              </section>

              <section className='login'>
                  <form action="">
                        <div className='input-box'>
                          <label htmlFor="email">E-mail</label>
                          <input type="email" placeholder='Digite seu E-mail' id='email'/>
                        </div>
                        <div className='input-box'>
                          <label htmlFor="senha">Senha</label>
                          <a href=''>Esqueceu sua senha?</a>
                          <input type="password" placeholder='Digite sua Senha' id='senha'/>
                        </div>
                        
                        <button>Entrar</button>
                  </form>

                  <p>
                    Ainda não tem uma conta ? <a href="">Inscreva-se</a>
                  </p>
              </section>
          </main>
      </body>
    </>
  )
}

export default App
