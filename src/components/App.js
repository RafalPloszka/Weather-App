import React from 'react'

import AppWrapper from './AppWrapper';
import Main from './Main'
import ThemeContextProvider from '../contexts/ThemeContext';

const App = () => {
  return (
    <ThemeContextProvider>
      <AppWrapper>
        <Main/>
      </AppWrapper>
    </ThemeContextProvider>
  )
}

export default App
