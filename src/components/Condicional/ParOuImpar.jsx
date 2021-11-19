import React from "react";

export default function ParOuImpar(props) {
    return (
        <>
            {props.numero % 2 === 0 ? <span>Par</span> : <span>Ímpar</span>}
        </>
    )
}