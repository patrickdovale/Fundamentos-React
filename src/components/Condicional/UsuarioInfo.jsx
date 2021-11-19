import React from "react";
import If from './if';

export default function UsuarioInfo(props) {

    const { usuario } = props || {}

    return (
        <>
            <If test={usuario && usuario.nome}>
                <p>Seja Bem-Vindo <strong>{usuario.nome}</strong></p>
            </If>
            <If test={!usuario || !usuario.nome}>
                <p>Favor Informe um Nome</p>
            </If>
        </>
    )
}