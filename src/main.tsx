import ReactDOM from 'react-dom'
import { StrictMode } from 'react'

import QueryProvider from 'providers/QueryProvider'
import ThemeProvider from 'providers/ThemeProvider'

import App from 'App'

ReactDOM.render(
  <StrictMode>
    <QueryProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryProvider>
  </StrictMode>,
  document.getElementById('root'),
)
