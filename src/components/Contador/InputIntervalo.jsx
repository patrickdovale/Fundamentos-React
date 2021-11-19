import React from "react";

export default function InputIntervalo(props) {
    return (
        <div>
            <label htmlFor="intervaloInput">Intervalo</label>
            <input
                id="intervaloInput"
                type='number'
                value={props.intervalo}
                onChange={e=> props.setIntervalo(+e.target.value)}
            />
        </div>
    )
}