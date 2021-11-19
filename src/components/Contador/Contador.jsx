import React, { Component } from "react";
import Display from "./Display";
import InputIntervalo from "./InputIntervalo";

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passo || 1
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    des = () => {

        if (this.state.numero >= 1 && (this.state.numero - this.state.passo) >= 0) {
            this.setState({
                numero: this.state.numero - this.state.passo
            })
        }
        else{
            this.setState({
                numero: 0
            })
            window.alert('O Valor não pode ser negativo')
        }
    }

    setPasso = (novoPasso) =>{
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div>
                <h3>Contador</h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <button onClick={this.des}>-</button>
                    <Display numero={this.state.numero} />
                    <button onClick={this.inc}>+</button>
                </div>
                <InputIntervalo intervalo={this.state.passo} setIntervalo={this.setPasso}/>
            </div>
        )
    }
}