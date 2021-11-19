import React from "react";
import produtos from '../../Data/Produtos';


export default function TabelaProdutos(props) {
    return (
        <table border="1" width="100%">
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>

            {produtos.map(produto => {
                return (
                    <tr>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>R$ {produto.preco.toFixed(2).replace('.',',')}</td>
                    </tr>
                )
            })}
        </table>
    )
}