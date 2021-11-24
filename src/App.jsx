import React from 'react';
import './Style/Index.css';

import Card from './components/layouts/Card';
import Aleatorio from './components/Basico/Aleatorio';
import Familia from './components/Basico/Familia';
import Familia2 from './components/Basico/Familia_2';
import MembroFamilia from './components/Basico/FamiliaMembro_2';
import ListaAlunos from './components/Repeticao/ListaAlunos';
import TabelaProdutos from './components/Repeticao/TabelaProdutos';
import ParOuImpar from './components/Condicional/ParOuImpar';
import UsuarioInfo from './components/Condicional/UsuarioInfo';
import DiretaPai from './components/Comunicacao/DiretaPai';
import IndiretaPai from './components/Comunicacao/IndiretaPai';
import Input from './components/Comunicacao/Formulario/Input';
import Contador from './components/Contador/Contador';
import Mega from './components/Mega/Mega';
import InputsModerno from './components/InputsModerno/InputsModerno';
import Notification from './components/Notification/Notification';
import Pagination from './components/Pagination/Pagination';
import Chart from './components/Chart/Chart';



export default function App() {
    
    return (
        <div className="App">
            <h1>Fundamentos Básicos React</h1>
            <div className="cards">

                <Card titulo="Grafico(chart.js)">
                    <Chart />
                </Card>

                <Card titulo="Paginação Front-End">
                    <Pagination />
                </Card>

                <Card titulo="SnackBar">
                    <Notification/>
                </Card>

                <Card titulo="Inputs Moderno">
                    <InputsModerno />
                </Card>

                <Card titulo="Mega-sena">
                    <Mega />
                </Card>

                <Card titulo="Contador Usando Class">
                    <Contador numeroInicial={10}/>
                    <Contador passo={5}/>
                </Card>

                <Card titulo="Componente Controlado">
                    <Input />
                </Card>

                <Card titulo="Comunicação Indireta">
                    <IndiretaPai />
                </Card>

                <Card titulo="Comunicação Direta">
                    <DiretaPai />
                </Card>

                <Card titulo="Condiciolnal 2">
                    <UsuarioInfo usuario={{ nome: 'Jorge' }} />
                    {/* <UsuarioInfo usuario={{}}/> */}
                </Card>

                <Card titulo="Par ou Ímpar">
                    <ParOuImpar numero={5} />
                </Card>

                <Card titulo="Tabela de produtos">
                    <TabelaProdutos />
                </Card>

                <Card titulo="Lista Alunos - Repetição">
                    <ListaAlunos />
                </Card>

                <Card titulo="Desafio Componente Filho 2">
                    <Familia2 sobrenome="vale">
                        <MembroFamilia nome="Luizinho" />
                        <MembroFamilia nome="Ariane" />
                        <MembroFamilia nome="Luiz" />
                        <MembroFamilia nome="patrick" sobrenome="Abreu" />
                    </Familia2>
                </Card>

                <Card titulo="Desafio Componente Filho">
                    <Familia sobrenome="vale" />
                </Card>

                <Card titulo="Desafio Numero Aleatório">
                    <Aleatorio Min={1} Max={60} />
                </Card>

                <Card titulo="Desafio Numero Aleatório" color="#ffc1d4">
                    <Aleatorio Min={1} Max={60} />
                </Card>

                <Card titulo="Desafio Numero Aleatório" color="#ddabcd">
                    <Aleatorio Min={1} Max={60} />
                    <Aleatorio Min={1} Max={60} />
                    <Aleatorio Min={1} Max={60} />
                    <Aleatorio Min={1} Max={60} />
                    <Aleatorio Min={1} Max={60} />
                    <Aleatorio Min={1} Max={60} />
                </Card>
            </div>
        </div>
    )
}