import React, { useState } from "react";

export default function Mega(props) {

    const [numberSort, setNumberSort] = useState(Array(6).fill(0))


    function GerarNumeroAleatorio(array) {
        let aleatorio = Math.floor(Math.random() * (60 - 1) + 1)
        return array.includes(aleatorio) ? GerarNumeroAleatorio(array) : aleatorio
    }

    function GerarQuantidadeNumeros() {

        const numeros = Array(6)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = GerarNumeroAleatorio(nums)
                console.log([...nums, novoNumero])
                return [...nums, novoNumero]
            }, [])

        return numeros
    }

    return (
        <div>
            <div style={{display:"flex", gap: 10, alignItems: 'center', justifyContent: 'center'}}>
                {numberSort.map((number) => {
                    return (
                        <>
                            <div style={{ backgroundColor: '#984891', display:"flex", gap: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 8, padding:16}}>{number}</div>
                        </>)
                })}
            </div>
            <button onClick={e =>setNumberSort(GerarQuantidadeNumeros())} 
            style={{padding: '8px 16px',
            color: '#984891',
            borderRadius: "50px",
            cursor: 'pointer',
            margin:"50px 0",
            backgroundColor: '#D3D3D3',
            border: '1px solid #595959'}}>Sortear Mega-Sena</button>
        </div>

    )
}