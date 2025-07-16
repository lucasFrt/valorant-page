import React, { useEffect, useState } from 'react';
import './App.css'
import type { AgenteType } from './types/agente.type';

function App() {
  const [agentes, setAgentes] = useState<Array<AgenteType>>([]);
  const URLagents = "https://valorant-api.com/v1/agents";
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
  
  return (
    <div className={'agents-container'}>
      <h1>Valorant Wiki </h1>
      <div className="agentes-grid">
        {agentes.map((agente) => (
          <div className='listaAgentes' key={agente.uuid}>
            <div className="agente-nome">{agente.displayName}</div>
            <img src={agente.displayIcon} alt={agente.displayName} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
