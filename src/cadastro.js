import './styles.css';
import React, { useState } from 'react';


function Cadastro() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
              <span className="login-form-title">
                cadastre-se
              </span>

              <div className="wrap-input">
              <input 
                className={nome !== '' ? 'has-val input' : 'input'} 
                type="text" 
                value={nome} onChange={e => setNome(e.target.value)}/>
              </div>

              <div className="wrap-input">
              <input 
                className={sobrenome !== '' ? 'has-val input' : 'input'} 
                type="text" 
                value={sobrenome} onChange={e => setSobrenome(e.target.value)}/>
              </div>

              <div className="wrap-input">
              <input 
                className={dataNascimento !== '' ? 'has-val input' : 'input'} 
                type="date" 
                value={dataNascimento} onChange={e => setDataNascimento(e.target.value)}/>
              </div>

              <div className="wrap-input"> 
                <input 
                className={email !== '' ? 'has-val input' : 'input'} 
                type="email" 
                value={email} onChange={e => setEmail(e.target.value)}/>
                  <span className="focus-input" data-placeholder="Email"></span>
     
              </div>
    
              <div className="wrap-input"> 
                <input 
    
                className={password !== '' ? 'has-val input' : 'input'} 
                type="password" 
                value={password}
                 onChange={e => setPassword(e.target.value)}/>
                <span className="focus-input" data-placeholder="Password"></span>
    
              </div>
    
              <div className="container-login-form-btn">
                <button className="login-form-btn">login</button>
              </div>
    
              <div className="text-center p-t-12">
                <span className="txt1">Não possui conta?</span>
                <a className="txt2" href="google.com">Criar conta</a>
              </div>
    
            </form>
          </div>
        </div>
       </div>
    );
} 
export default Cadastro;