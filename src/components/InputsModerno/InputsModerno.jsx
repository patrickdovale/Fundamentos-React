import React, { useState } from "react";
import './InputsModerno.css';

export default function InputsModerno(props) {

    const [acessibilidade, setAcessibilidade] = useState([]);

    const Acessibilidade = [
        {
            name: 'Visual',
            icon: <></>,
            selected: false
        },
        {
            name: 'Física',
            icon: <></>,
            selected: false
        },
        {
            name: 'Auditiva',
            icon: <></>,
            selected: false
        },
        {
            name: 'Nanismo',
            icon: <></>,
            selected: false
        },
        {
            name: 'Intelectual',
            icon: <></>,
            selected: false
        },
        {
            name: 'Ostomia',
            icon: <></>,
            selected: false
        },
    ]

    async function ChangeInput(nameAcessi) {
        const checkSelect = acessibilidade.findIndex(item => item === nameAcessi)

        if (checkSelect >= 0) {
            const filteredItems = acessibilidade.filter(item => item !== nameAcessi)
            setAcessibilidade(filteredItems)
        }
        else {
            setAcessibilidade([...acessibilidade, nameAcessi])
        }


    }

    console.log(acessibilidade)



    return (
        <div className="section-deficiencia">
            {Acessibilidade.map((item, i) => {
                return (
                    <div
                        key={item.name}
                        className={`item-deficiencia ${acessibilidade.includes(item.name) ? 'active' : ''}`}
                        onClick={e => ChangeInput(item.name)}>
                        <span>{item.name}</span>
                    </div>
                )
            })}

            {acessibilidade.map(item => {
                return (
                    <>
                        <strong>{item}</strong>
                        <strong>-</strong>
                    </>
                )
            }
            )
            }

        </div>

    )
}