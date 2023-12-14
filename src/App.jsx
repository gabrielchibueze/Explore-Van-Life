import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/Sign'
import Vans from './Components/Vans/Vans'
import VanDetailPage from './Components/Vans/VanDetails'
import HostLayout from './Layouts/HostLayout'
import HostDashboard from './Components/Host/Dashboard'
import HostVansPage from './Components/Host/HostVans'
import HostReviews from './Components/Host/Reviews'
import HostIncome from './Components/Host/Income'
import HostVanDetailsPage from './Components/Host/HostVanDetailPage'
import HostVanDescription from './Components/Host/HostVanDetails/hostVanDetails'
import HostVanPrice from './Components/Host/HostVanDetails/hostVanPrice'
import HostVanPhotos from './Components/Host/HostVanDetails/hostVanPhotos'
import PageNotFound from './pages/PageNotFound'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="vans" element={<Vans />}/>
        <Route path="about" element={<About />}/>
        <Route path="signin" element={<SignIn />}/>
        <Route path='vans/:id' element={<VanDetailPage />}/>

        <Route path='host' element={<HostLayout />}>
          <Route index element={<HostDashboard />} />
          <Route path='vans' element={<HostVansPage />} />

          <Route path='vans/:id' element={<HostVanDetailsPage />}>
            <Route index element={<HostVanDescription />}/>
            <Route path='price' element={<HostVanPrice />}/>
            <Route path='photos' element={<HostVanPhotos />}/>
          </Route>

          <Route path='income' element={<HostIncome />} />
          <Route path='reviews' element={<HostReviews />} />
        </Route>
        <Route path="*" element={<PageNotFound />}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
