import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

export default function IndiretaPai(props) {

    let [nome,setNome] = useState('?');
    let [idade, setIdade] = useState(0);
    let [saudavel, setSaudavel] = useState(false);


    function passandoInformacao(nome, idade, saudavel) {
        console.log(idade, nome, saudavel);
        setNome(nome);
        setIdade(idade);
        setSaudavel(saudavel);
    }

    return (
        <>
            <div>
                <div>
                    {nome}
                </div>
                <div>
                    {idade}
                </div>
                <div>
                    {saudavel ? 'Saudavel' : 'Mal da Saude'}
                </div>
            </div>
            <IndiretaFilho quandoClicar={passandoInformacao} />
        </>
    )
}