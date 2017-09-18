import React from 'react'
import {render} from 'react-dom'
import {ThemeProvider} from 'styled-components'


import App from './components/App'


const renderApp = (Component) => {
  render(<AppContainer>
    <ThemeProvider>
      <Component/>
    </ThemeProvider>
  </AppContainer>, document.getElementById("app"))
}

renderApp(App)

if(module.hot){
  module.hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default
    renderApp(NextApp)
  })
}
