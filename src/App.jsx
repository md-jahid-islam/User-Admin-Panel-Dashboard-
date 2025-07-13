 import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layouts from './Components/Layout/Layouts'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Products from './Pages/Products'
import Orders from './Pages/Orders'
import Payments from './Pages/Payments'
import Transactions from './Pages/Transactions'
import Clients from './Pages/Clients'
 function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element= {<Layouts/>}>
      <Route index element= {<Home/>}/>
      <Route path='/Dashboard' element= {<Dashboard/>}/>
      <Route path='/Products' element= {<Products/>}/>
      <Route path='/Orders' element= {<Orders/>}/>
      <Route path='/Payments' element= {<Payments/>}/>
      <Route path='/Transactions' element= {<Transactions/>}/>
      <Route path='/Clients' element= {<Clients/>}/>
      </Route>
     </Routes>     
     </BrowserRouter>
    </>
  )
 }

 export default App
