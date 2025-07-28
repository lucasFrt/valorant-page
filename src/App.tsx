//imports

import React, { useEffect, useState } from 'react';
import './App.css'
import type { AgenteType } from './types/agente.type';
import { HeaderComponents } from './components/header/HeaderComponent';

//app
function App() {
  //hooks
  //useState para armazenar os agentes 
  const [agentes, setAgentes] = useState<Array<AgenteType>>([]);
  const [pesquisa, setPesquisa] = useState("");
  //URL da API
  const URLagents = "https://valorant-api.com/v1/agents";
  //useEffct busca API (agentes)
  useEffect(() => {
    
    fetch(URLagents)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Requisição falhou: " + response.statusText);
        }
        return response.json();
      })
      .then(response => {
        setAgentes(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


    const agentesFiltrados = agentes.filter((agente) =>
      agente.displayName.toLowerCase().includes(pesquisa.toLowerCase())
      );
  
  //retorno (pagina principal)
  return (

    <div className={'agentes-container'}>
      <HeaderComponents />
      <br />
      <h1>Agentes</h1>
      <label className="pesquisa-label">
        Pesquisar agentes: <input name="Pesquisa" onChange={(valor) => { 
          setPesquisa(valor.target.value);
        }} /> 
      </label>
      <hr />
      <br />
      <div className="agentes-grid">
        
        {agentesFiltrados.map((agente) => (
        <div className='listaAgentes' key={agente.uuid}>
          <div className="agente-nome">
            <p>{agente.displayName}</p>
          </div>
          <img src={agente.displayIcon} alt={agente.displayName} />
        </div>
        ))}
        </div>
    </div>
  );
 }
export default App
