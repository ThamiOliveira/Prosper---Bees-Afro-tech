import './App.css';
import Header from './Components/Header/Header';
import Card from './Components/Container/Container';
import mickey from './mickey.png';

function App() {
  return (
    <div className="App">
      <Header />

      <div id='cards'>
        <Card
          imagem={mickey}
          texto="Mickey Mouse é um personagem de desenho animado e que se tornou o símbolo da Walt Disney Company. O personagem foi criado em 1928 por Walt Disney e o desenhista Ub Iwerks e dublado por Walt Disney."
          titulo="Mickey Mouse" />
      </div>
    </div>
  );
}
export default App;