import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';

import Client from './pages/Client';
import AdmincontextProvider from './store/store';
import Service_real from './pages/Service_real';
import Reviews_page from './pages/Reviews_page';


function App() {


  return (
    <AdmincontextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/services' element={<Service_real />} />
          <Route path='/reviews' element={<Reviews_page />} />
          <Route path='/client' element={<Client />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AdmincontextProvider>
  )
}

export default App
