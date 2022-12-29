import React, { useContext } from 'react'
import Input from '../../Components/form'

import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

import {Wrapper} from './style'
import fundo_spider from '../../assets/spider-man.jpg'
import logo from '../../assets/logo-marvel.jpg'
import AuthContext from '../../Contexts/AuthContext'


const Login = () => {

  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

      signInWithEmailAndPassword(auth, (data.email as string), (data.password as string) )
      .then((userCredential) =>{
          alert("login com sucesso")
          navigate('/home')
      })
      .catch((error) =>{
       alert("erro" + error)
      })
    }

   
 
  
  return (
  <Wrapper>
    <img src={fundo_spider}/>
    <form onSubmit={handleLogin}>
        <img src={logo}/>
        <Input type="Email" name="email" placeholder='Email'/>
        <Input type="password" name="password" placeholder='Senha'/>
        <button>Login</button>
        <span style={{color:'white'}}>Não tem acesso ? <Link to="/cadastro">Cadastra-se</Link></span>
    </form>
  </Wrapper>
  )

}


export default Login