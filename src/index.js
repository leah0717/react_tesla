import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from './App'
import store from './store'
import 'normalize.css'
import '@/assets/css/index.less'
import { theme } from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(process.env)
root.render(
  // <React.StrictMode>
  <Suspense fallback="Loading...">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
  // </React.StrictMode>
)
