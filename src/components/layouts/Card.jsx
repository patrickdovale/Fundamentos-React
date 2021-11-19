import React from "react";
import '../../Style/Card.css'

export default function Card(props) {

    const { titulo, children, color } = props

    const styleCard = {
        backgroundColor: color || '#dc58dc',
        borderColor: color || '#dc58dc'
    }

    return (
        <div className="card" style={styleCard}>
            <h3 className="title">{titulo}</h3>
            <div className="content">{children}</div>
        </div>
    )
}