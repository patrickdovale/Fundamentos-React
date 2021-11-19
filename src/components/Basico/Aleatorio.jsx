import React from "react";

export default  function Aleatorio(props){

    const {Max, Min} = props

    return (
        <>
            {/* <h3>Numero Aleátorio</h3> */}
            <p>{Math.floor(Math.random() * (Max - Min) + Min)}</p>
        </>
    )
}