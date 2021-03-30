import React from 'react';
import Header from "./components/Header";
import Tarjetas from "./components/Tarjetas";
import Footer from "./components/Footer";
import arraySerie from './rickandmorty.json'

function App() {
  return (
    <div className="pagina">
      <Header/>
    <div className="hijo">{arraySerie.map(function(serie, idx){
      return (
        <div className="tarjetas" key ={idx}>
          <Tarjetas datoSerie={serie}/>
        </div>
      )
    })}</div>
    <Footer/>
    </div>
  );
}

export default App;
