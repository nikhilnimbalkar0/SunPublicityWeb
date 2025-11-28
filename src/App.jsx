import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DowntownBillboard from './pages/DowntownBillboard'
import BillboardDetails from './pages/BillboardDetails'
import HighwayDashboard from './pages/HighwayDashboard'
import HighwayDetails from './pages/HighwayDetails'
import ShoppingMallDashboard from './pages/ShoppingMallDashboard'
import EventPromotionDashboard from './pages/EventPromotionDashboard'
import CityCenterLEDDashboard from './pages/CityCenterLEDDashboard'
import CorporateAdSpaceDashboard from './pages/CorporateAdSpaceDashboard'
import UnipoleDashboard from './pages/UnipoleDashboard'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import Register from './pages/Register'
import Booking from './pages/Booking'
import Account from './pages/Account'
import HoardingDashboard from './pages/HoardingDashboard'
import AdItemDetails from './pages/AdItemDetails'
import MapHoardings from './pages/MapHoardings'
import MaharashtraMap from './pages/MaharashtraMap'
import CategoryPhotos from './pages/CategoryPhotos'
import HoardingsDisplay from './pages/Hording'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/:categorySlug" element={<CategoryPhotos />} />
        <Route path="/hoardings" element={<HoardingDashboard />} />
        <Route path="/downtown-billboard" element={<DowntownBillboard />} />
        <Route path="/billboard/:id" element={<BillboardDetails />} />
        <Route path="/:category/:id" element={<AdItemDetails />} />
        <Route path="/highway" element={<HighwayDashboard />} />
        <Route path="/highway/:id" element={<HighwayDetails />} />
        <Route path="/mall" element={<ShoppingMallDashboard />} />
        <Route path="/event" element={<EventPromotionDashboard />} />
        <Route path="/led" element={<CityCenterLEDDashboard />} />
        <Route path="/corporate" element={<CorporateAdSpaceDashboard />} />
        <Route path="/unipole" element={<UnipoleDashboard />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/map" element={<MapHoardings />} />
        <Route path="/maharashtra-map" element={<MaharashtraMap />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/account" element={<Account />} />
        <Route path="/hording" element={<HoardingsDisplay />} />
      </Routes>
    </>
  )
}

export default App


