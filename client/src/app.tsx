import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LoginView from './views/login.view'

const App = () => {
  return (
    <div className='app'>
        <Routes>
            <Route path='/login' element={<LoginView/>}  />
        </Routes>
    </div>
  )
}

export default App