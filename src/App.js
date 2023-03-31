import { useState } from 'react';
import React, { Component }  from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import api from "./services/api";


function App() {

  const [input, setInput] = useState('')

  async function handleSearch(){

    if(input === ''){
      alert("Preencha algum cep!")
      return;
    }
  
  
  try{
    const response = await api.get(`${input}/json`);
    console.log(response)
  }catch{
      alert("Ops! erro ao buscar CEP...")
  }
  
}


  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

     <div className="containerInput">
        <input type="text"
        placeholder="Digite seu cep..."
        value = {input}
        onChange={(e) => setInput(e.target.value) }
        />
        
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button> 
     </div>

        <main className="main">
          <h2>CEP: 79003222</h2>
          <span>Rua Teste</span>
          <span>Complemento: </span>
          <span>Vila Rosa </span>
          <span>Estado </span>
        </main>
    </div>
  );
}

export default App;
