import React, { useContext, useEffect, useState } from 'react'
import Routers from "./Routes/Routers"
import RingLoader from "react-spinners/RingLoader";
import { AuthProvider, AuthContext } from "./Contexts/ContextProvider"

import { GlobalStyle } from "./styles/global"
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light'
import dark from './styles/themes/dark'



function App() {

  const {theme} = useContext(AuthContext)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Routers />
      </ThemeProvider>
    </div>
  )
}

export default App
