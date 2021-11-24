import React, { useState } from "react";
import Snackbar from "./SnackBar";
import './Notification.css';


export default function Notification(props) {

    const [name, setName] = useState('');

    const [snackBarConfig, setSnackBarConfig] = useState({
        snackbarOpen: false,
        snackbarMsg: '',
        severity: 'sucess'
    })


    function handleSubmit(e) {
        e.preventDefault();

        if (name === 'patrick') {
            setSnackBarConfig({
                snackbarOpen: true,
                snackbarMsg: 'Você é o Patrick parabens',
                severity: 'success'
            })
        }
        else {
            setSnackBarConfig({
                snackbarOpen: true,
                snackbarMsg: 'Você não é o Patrick T-T',
                severity: 'error'
            })
        }

        console.log('Enviado')
    }

    return (
        <div className="Notification">
            Notificação
            <form onSubmit={handleSubmit}>
                <input type="text" name="nome" id="nome" value={name} onChange={e => setName(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>

            <Snackbar  snackBarConfig={snackBarConfig} setSnackBarConfig={setSnackBarConfig}/>
        </div>
    )
}