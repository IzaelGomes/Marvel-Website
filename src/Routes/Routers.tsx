import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login/index'
import Home from '../pages/Home'
import PrivateRouter from '../Components/PrivateRouter'
import Characters from '../pages/Characters'



const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/home' element={<PrivateRouter> <Home /> </PrivateRouter>} /> 
          <Route path='/characters' element={<PrivateRouter> <Characters /> </PrivateRouter>} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routers