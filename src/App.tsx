import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import About from './pages/About'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Store from './pages/Store'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App

{/* <div><h1>Hello TypeScript</h1>
  <h3>https://www.youtube.com/watch?v=lATafp15HWA</h3></div> */}