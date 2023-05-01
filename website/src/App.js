import './App.css';
import Header from './Components/Header/Header';
import BotaoMenu from './Components/BotaoMenu/BotaoMenu';
import imagem from './img.png';
import Estante from './Components/Estante/Estante';
import Avaliacao from './Components/Avaliacao/Avaliacao';
import livro1 from './livro1.jpg';
import livro2 from './livro2.jpg';
import livro3 from './livro3.jpg';
import livro4 from './livro4.jpg';
import { AiFillHeart, AiOutlineStar, AiFillGift, AiOutlineMessage} from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <Header imagem={imagem} />

      <div className='conteudo'>
        <div className='acoes'>
          <BotaoMenu icone={<AiFillHeart/>} nome="Favoritos" />
          <BotaoMenu icone={<AiFillGift/>} nome="Desejados" />
          <BotaoMenu icone={<AiOutlineStar/>} nome="Avaliados" />
          <BotaoMenu icone={<AiOutlineMessage/>} nome="Resenhas" />
        </div>
        <div className='estante'>
          <div style={{ fontSize: '50px' }}>
            Minha estante
          </div>
          <div className='listaEstante'>
            <Estante
              texto="Mickey Mouse é um personagem de desenho animado e que se tornou o símbolo da Walt Disney Company.
          O personagem foi criado em 1928 por Walt Disney e o desenhista Ub Iwerks e dublado por Walt Disney."
              titulo="Mickey Mouse" 
              imagem={livro1}
              />
               <Estante
              texto="Mickey Mouse é um personagem de desenho animado e que se tornou o símbolo da Walt Disney Company.
          O personagem foi criado em 1928 por Walt Disney e o desenhista Ub Iwerks e dublado por Walt Disney."
              titulo="Mickey Mouse" 
              imagem={livro2}
              />
               <Estante
              texto="Mickey Mouse é um personagem de desenho animado e que se tornou o símbolo da Walt Disney Company.
          O personagem foi criado em 1928 por Walt Disney e o desenhista Ub Iwerks e dublado por Walt Disney."
              titulo="Mickey Mouse" 
              imagem={livro3}
              />
               <Estante
              texto="Mickey Mouse é um personagem de desenho animado e que se tornou o símbolo da Walt Disney Company.
          O personagem foi criado em 1928 por Walt Disney e o desenhista Ub Iwerks e dublado por Walt Disney."
              titulo="Mickey Mouse" 
              imagem={livro4}
              />


          </div>
        </div>
      </div>
      <div className="avaliacoes" style={{ fontSize: '50px' }}>
        Minha estante
        <div className=''>
          <Avaliacao imagem={livro2}/>
        </div>
      </div>
    </div>
  );
}
export default App;
