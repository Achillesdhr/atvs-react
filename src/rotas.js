import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './login';
import Cadastro from './cadastro';
const Rotas = () => {
    return (
        <BrowserRouter>
                <Route path="/" exact={true} component={Login} />
                <Route path="/cadastro" exact={true} component={Cadastro} />
        </BrowserRouter>
    );
}

export default Rotas;