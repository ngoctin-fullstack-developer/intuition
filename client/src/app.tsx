import React from 'react'
import {Routes,Route} from 'react-router-dom'
import RegisterView from './views/register.view'

const App = () => {
  return (
    <div className='app'>
        <Routes>
            <Route path='/register' element={<RegisterView/>}  />
        </Routes>
    </div>
  )
}

export default App