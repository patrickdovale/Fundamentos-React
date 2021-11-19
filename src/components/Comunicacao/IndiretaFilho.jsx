import React from "react";

export default function IndiretaFilho(props){
    return(
        <>
            <button onClick={()=>props.quandoClicar("luiz",44,true)}>Fornecer Informações</button>
        </>
    )
} 