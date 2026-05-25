import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Landing from './views/Landing'
import DesktopLogin from './views/DesktopLogin'
import DesktopSignup from './views/DesktopSignup'
import Home from './views/Home'
import DesktopMenu from './views/DesktopMenu'
import DesktopNonCoffeeMenu from './views/DesktopNonCoffeeMenu'
import DesktopCoffeeMenu from './views/DesktopCoffeeMenu'
import DesktopFoodMenu from './views/DesktopFoodMenu'
import DesktopColdDrinkMenu from './views/DesktopColdDrinkMenu'
import DesktopProfile from './views/DesktopProfile'
import DesktopContacts from './views/DesktopContacts'
import DesktopMore from './views/DesktopMore'
import CafeLocation from './views/CafeLocation'
import AboutUs from './views/AboutUs'
import Terms from './views/Terms'
import Feedback from './views/Feedback'
import HelpAndSupport from './views/HelpAndSupport'
import NotFound from './views/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<DesktopLogin />} />
        <Route path="/create" element={<DesktopSignup />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/menu" element={<DesktopMenu />} />
        <Route path="/menu/non-coffee" element={<DesktopNonCoffeeMenu />} />
        <Route path="/menu/coffee" element={<DesktopCoffeeMenu />} />
        <Route path="/menu/foods" element={<DesktopFoodMenu />} />
        <Route path="/menu/cold-drinks" element={<DesktopColdDrinkMenu />} />
        <Route path="/contact" element={<DesktopContacts />} />
        <Route path="/profile" element={<DesktopProfile />} />
        <Route path="/more" element={<DesktopMore />} />
        <Route path="/cafe" element={<CafeLocation />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/help" element={<HelpAndSupport />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
