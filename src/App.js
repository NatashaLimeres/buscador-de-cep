import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">BUSCADOR CEP</h1>
      
      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu CEP..."
        />

        <button className="searchButton">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
      
      <main className="main">
        <h2>CEP: 11070060</h2>
        <span>Rua doutor moura ribeiro</span>
        <span>Complemento: 108 </span>
        <span>Marapé</span>
        <span>Santos - SP</span>
      </main>

    </div>
  );
}

export default App;
