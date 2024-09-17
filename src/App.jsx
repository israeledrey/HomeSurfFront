import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Shoping from './pages/Shoping'
import Orders from './pages/Orders'
import Home from './pages/Home'
import Board from './Components/Board'
import { OrderProvider } from './Components/OrderContext'



function App() {

  return (
    <>

      <BrowserRouter>
        <NavBar />
        <OrderProvider>

          <Routes>
            <Route path="/Orders" element={<Orders />} />
            <Route path="/" element={<Home />} />
            <Route path="/Shoping" element={<Shoping />} />
            <Route path="/Board/:id" element={<Board />} />
          </Routes>

          </OrderProvider>
      </BrowserRouter>

    </>
  )
}

export default App
