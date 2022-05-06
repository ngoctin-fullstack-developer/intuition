import { height } from '@mui/system'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomeView from './views/home.view'
import LoginView from './views/login.view'
import RegisterView from './views/register.view'

const App = () => {
  return (
    <div style={{
      display : 'flex',
      flexDirection :'column',
      height : 'fitContent',
      backgroundColor : '#F6F7FB',
      margin : '0',
      padding : '0',
      boxSizing : 'border-box'
    }} className='app'>
        <Routes>
            <Route path='/register' element={<RegisterView/>}  />
            <Route path='/login' element={<LoginView/>}  />
            <Route path='/' element={<HomeView/>} />
        </Routes>
    </div>
  )
}

export default App