
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Section1 from './Components/Section1/Section1'
import Gallery from './Components/Gallery/Gallery'
import Review from './Components/Review/Review'
import Contact from './Components/Contact/Contact'
import Service from './Components/Service/Service'
import { UserContextProvider } from './store/Store'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <div className='aaa'>
    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Section1 />} />
          <Route path='/sevices' element={<Service />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/reviews' element={<Review />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </UserContextProvider>
    </div>
  )
}

export default App;
