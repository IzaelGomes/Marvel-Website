import React, {InputHTMLAttributes} from 'react'
import {InputForm} from './style'


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name:string;
  type:string;
  placeholder:string;
}


const Input = (props:InputProps) => {

  return (
    
        <InputForm {...props}/> 
    
  )
}

export default Input