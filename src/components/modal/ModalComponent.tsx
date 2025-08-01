import React, { useEffect, useState } from 'react';
import "./modal-component.css";
import type { AgenteType } from '../../types/agente.type';

export default function ModalComponent({ isOpen, uuid }: { isOpen: boolean, uuid: string }) {

    const [agente, setAgente] = useState<AgenteType>();

    useEffect(() => {
        if (!uuid) return; // Evita fetch desnecessário se o uuid não estiver pronto

        const URLagentsDetail = `https://valorant-api.com/v1/agents/${uuid}?language=pt-BR`;

        fetch(URLagentsDetail)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Requisição falhou: " + response.statusText);
                }
                return response.json();
            })
            .then(response => {
                setAgente(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [uuid]);

    if (!isOpen || !agente) {
        return null;
    }

    return (
        <div className='modalzinho'>
            <div className='infosModal'>
                <div className="agente-texto">
                    <h1 className='nome-agente'>{agente.displayName}</h1>
                    <p className='info-agente'>
                        <strong>Descrição:</strong> {agente.description}
                    </p>
                    <p className='info-agente'>
                        <strong>Role:</strong>
                        <img src={agente.role.displayIcon} alt={agente.role.displayName} className='role-icon' />
                        {agente.role.displayName}
                    </p>
                </div>
                <img src={agente.fullPortrait} alt={agente.displayName} className='foto-agente' />

            </div>
        </div>
    );
}