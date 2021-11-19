import React from 'react';
import MembroFamilia from './FamiliaMembro';

export default function Familia(props){
    return (
        <>
            <MembroFamilia nome="Patrick" sobrenome={props.sobrenome}/>
            <MembroFamilia nome="Luizinho" {...props}/>
            <MembroFamilia nome="Ariane" sobrenome="Vale"/>
            <MembroFamilia nome="Luiz" sobrenome="Vale"/>
        </>
    )
}