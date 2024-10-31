import React from 'react';
import eu from './eu.jpeg';
import familia from './familia.jpeg';
import jogos from './Jogos.jpeg';
import livro from './livro.jpeg';
import curintia from './curintia.jpeg';
import './App.css'; // Certifique-se de que o arquivo CSS está no mesmo diretório

const App = () => {
  return (
    <div>
      <header>
        <h1>Bem-vindo ao Meu Site</h1>
        <nav>
          <ul>
            <li><a href="#sobre-mim">Sobre Mim</a></li>
            <li><a href="#familia">Minha Família</a></li>
            <li><a href="#cotidiano">Meu Cotidiano</a></li>
          </ul>
        </nav>
      </header>
      
      <div className="container">
        <section id="sobre-mim">
          <h2>Sobre Mim</h2>
          <img src={eu} alt="Minha foto" />
          <p>Olá! Eu sou um entusiasta de programação e adoro aprender novas tecnologias.</p>
        </section>
      </div>

      <section id="familia">
        <h2>Minha Família</h2>
        <img src={familia} alt="Foto da minha família" />
        <p>Sou muito próximo da minha família. Temos momentos incríveis juntos!</p>
      </section>

      <section id="cotidiano">
        <h2>Meu Cotidiano</h2>
        <p>Adoro programar, ler livros e jogar videogame. Minha rotina é cheia de aprendizados e boas memórias! especialmente quando o Corinthians joga!</p>
        <div className="imagem">
          <img src={jogos} alt="Foto de livros" />
          <img src={livro} alt="foto de livros"/>
          <img src={curintia} alt="foto do maior de todos" />
        </div>
      </section>

      <footer>
        <p><strong>Vai curintia!!!</strong></p>
      </footer>
    </div>
  );
};

export default App;
