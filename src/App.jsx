import { HashRouter as Router, Route, Routes } from 'react-router-dom'
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
        <Route path="/dashboard" element={<><Home /><Footer /></>} />
        <Route path="/menu" element={<><DesktopMenu /><Footer /></>} />
        <Route path="/menu/non-coffee" element={<><DesktopNonCoffeeMenu /><Footer /></>} />
        <Route path="/menu/coffee" element={<><DesktopCoffeeMenu /><Footer /></>} />
        <Route path="/menu/foods" element={<><DesktopFoodMenu /><Footer /></>} />
        <Route path="/menu/cold-drinks" element={<><DesktopColdDrinkMenu /><Footer /></>} />
        <Route path="/contact" element={<><DesktopContacts /><Footer /></>} />
        <Route path="/profile" element={<><DesktopProfile /><Footer /></>} />
        <Route path="/more" element={<><DesktopMore /><Footer /></>} />
        <Route path="/cafe" element={<><CafeLocation /><Footer /></>} />
        <Route path="/about" element={<><AboutUs /><Footer /></>} />
        <Route path="/terms" element={<><Terms /><Footer /></>} />
        <Route path="/feedback" element={<><Feedback /><Footer /></>} />
        <Route path="/help" element={<><HelpAndSupport /><Footer /></>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
