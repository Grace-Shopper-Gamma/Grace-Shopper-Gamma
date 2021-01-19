import React from 'react'

import {NavBar, Footer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div id="page-container">
      <NavBar />
      <div id="content-wrap">
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default App
