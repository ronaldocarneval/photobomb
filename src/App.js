
import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Galeria from './components/Galeria';


function App() {
  const galerias = [ ]
  const [imagens, setImagens] = useState([])

  const aoNovaImagemAdicionada = (imagem) => {
    setImagens([...imagens, imagem])
    console.log(imagens)
  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoImagemCadastrado={imagem => aoNovaImagemAdicionada (imagem) } />
      <Galeria />
    </div>
  );
}

export default App;
