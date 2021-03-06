import {Routes,Route} from 'react-router-dom'
import CheckoutView from './views/checkout.view'
import HomeView from './views/home.view'
import LoginView from './views/login.view'
import ProductDetailView from './views/product.detail.view'
import ProductsView from './views/products.view'
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
            <Route path='/ProductDetail/:productID' element={<ProductDetailView/>}/>
            <Route path='/checkout' element={<CheckoutView/>} ></Route>
            <Route path='/productview' element={<ProductsView/>} ></Route>
        </Routes>
    </div>
  )
}

export default App