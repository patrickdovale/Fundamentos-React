import React from 'react';
import alunos from '../../Data/Alunos';

export default function ListaAlunos(props) {
    return (
        <div>
            <ul>
                {alunos.map((aluno)=>{
                    return (
                        <li key={aluno.id}>{aluno.nome} - {aluno.nota.toFixed(1)}</li>
                    )
                })}
            </ul>
        </div>
    )
}