import ReactDOM from 'react-dom'
import { StrictMode } from 'react'

import ThemeProvider from 'providers/ThemeProvider'

import App from 'App'

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
)
