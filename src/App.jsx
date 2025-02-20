import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import { Route, Routes } from 'react-router-dom'
import { routes } from './router/routes'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        {
          routes.map((route,index)=><Route key={index} element={route.element} path={route.url} />)
        }
      </Routes>
      <Footer/>
    </div>

  )
}

export default App