import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase';

import { useNavigate } from "react-router-dom";

import Input from '../../Components/form';
import {Container} from './style'
import logo from '../../assets/logo-marvel.jpg'


const Cadastro = () => {
   const navigate = useNavigate();

 function handleSignup(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

     const formData  =  new FormData(e.currentTarget);
     const data =  Object.fromEntries(formData);

     if(data.password != data.conPassword){
      return alert("Verifique a senha inserida !")
     }
    
   createUserWithEmailAndPassword(auth, (data.email as string), (data.password as string) )
   .then((res) =>{
      alert("cadastro realizado com sucesso");
      navigate('/');
     
   })
   .catch((err) => alert("Erro no cadastro!" ))
   
 }

  return (

      <Container>
     
         <form onSubmit={handleSignup}>
            <img src={logo}/>
            <Input name="email" type="email" placeholder="Email"/>
            <Input name="password" type="password" placeholder="Senha"/>
            <Input name="conPassword" type="password" placeholder="Confime sua senha"/>
            <button>Sign Up</button>
         </form>
      </Container>


  )
}

export default Cadastro