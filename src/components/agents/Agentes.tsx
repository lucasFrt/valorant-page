import React, { useEffect, useState } from 'react';
import './agents-component.css'
import type { AgenteType } from '../../types/agente.type';
import ModalComponent from '../modal/ModalComponent';



//app
export function Agentes() {

  const [agenteSelecionado, setAgenteSelecionado] = useState<string | null>(null);

  const [abreModal, setAbreModal] = useState(false)
  //hooks
  //useState para armazenar os agentes 
  const [agentes, setAgentes] = useState<Array<AgenteType>>([]);
  const [todosAgentes, setTodosAgentes] = useState<Array<AgenteType>>([]);
  const [pesquisa, setPesquisa] = useState("");
  //URL da API
  const URLagents = "https://valorant-api.com/v1/agents";

  //useEffct busca API (agentes)

  useEffect(() => {
    const agentesFiltrados = todosAgentes.filter((agente) =>
      
      agente.displayName.toLowerCase().includes(pesquisa.toLowerCase())
      );
      setAgentes(agentesFiltrados)
  },[pesquisa, todosAgentes])
  
      
    useEffect(() => {
    fetch(URLagents)
      .then((response) => {
        if (!response.ok) {

          throw new Error("Requisição falhou: " + response.statusText);
        }
        return response.json();
      })
      .then(response => {
        // setAgentes(response.data);
        setTodosAgentes(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  //retorno (pagina principal)
  return (
    

    <div className={'agentes-container'}>
      
      <br />
      <h1>Agentes</h1>
      
      <label className="texto-pesquisa" >
        Pesquisar agentes: <input name="Pesquisa" className="caixa-pesquisa" onChange={(valor) => { 
          setPesquisa(valor.target.value);
        
        }} /> 
      </label>
      <hr />
      <br />
      <div className="agentes-grid">
        {
          abreModal && <ModalComponent uuid={agenteSelecionado as string} isOpen={abreModal}/> 
        }
        {agentes.map((agente) => (
        <div className='listaAgentes' key={agente.uuid}>
          <div className="agente-nome"
          onClick={() => {
            setAbreModal(true);
            setAgenteSelecionado(agente.uuid);
          }}>
            <div className='caixa-agente'>
              <p>{agente.displayName}</p>
              <img className='imagem-agente' src={agente.displayIcon} alt={agente.displayName} />
            </div>
          </div>
        </div>
        ))}
        </div>
    </div>
  );
 }
