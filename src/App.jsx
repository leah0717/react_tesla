import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import StickyHeader from './components/sticky-header'
import TeslaHeader from './components/tesla-header'

import routes from './router'

const App = memo(() => {
  return (
    <div className="app">
      {/* <StickyHeader /> */}
      <div className="my-container">{useRoutes(routes)}</div>
    </div>
  )
})

export default App
