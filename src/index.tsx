import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from 'app/App'
import { ThemeProvider } from 'shared/contexts'

import './app/i18n'

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
