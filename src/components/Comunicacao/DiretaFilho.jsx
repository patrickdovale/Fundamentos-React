import React from "react";

export default function DiretaFilho(props){
    return(
        <>
            <div>{props.texto}</div>
            <div>{props.numero}</div>
            <div>{props.bool ? 'Verdadeiro' : 'Falso'}</div>
        </>
    )
} 