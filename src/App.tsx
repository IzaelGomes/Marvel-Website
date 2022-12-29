import React, { useContext, useEffect, useState } from 'react'
import Routers from "./Routes/Routers"
import RingLoader from "react-spinners/RingLoader";
import { AuthProvider, AuthContext } from "./Contexts/AuthContext"

import { GlobalStyle } from "./styles/global"
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light'
import dark from './styles/themes/dark'






function App() {


  return (
    <div className="App">
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <AuthProvider>
              <Routers />
        </AuthProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
