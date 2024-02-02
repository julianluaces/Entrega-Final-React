import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Nosotros from './components/Nosotros'
import Footer from './components/Footer'
import Home from './components/Home'

const App = () => {

  return (


    <BrowserRouter>

    
   

    <Navbar/>

    <Routes>
      <Route path='/' element= {<ItemListContainer/>} />
      <Route path='/item/:id' element= {<ItemDetailContainer/>} />
      <Route path='/home' element= {<Home/>} />
      <Route path='/nosotros' element= {<Nosotros/>} />
     </Routes> 

   
    <Footer/>
   
   


    </BrowserRouter>

  )

}

export default App






