import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { assetUrl } from '../utils/assetUrl'

const navLinks = [
  { label: 'Home', to: '/dashboard' },
  { label: 'Menu', to: '/menu' },
  { label: 'Contact', to: '/contact' },
  { label: 'More', to: '/more' },
]

const Header = ({ userName = 'habibi<3' }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full absolute top-0 left-0 z-50">

      {/* Background shapes */}
      <div className="absolute inset-0">
        <img
          src={assetUrl('/Vector 26.svg')}
          alt=""
          aria-hidden="true"
          className="w-full object-cover absolute top-0 h-[120px] md:h-[212px]"
          style={{ zIndex: 0 }}
        />
        <img
          src={assetUrl('/Vector 25.svg')}
          alt=""
          aria-hidden="true"
          className="w-full object-cover absolute top-0 h-[100px] md:h-[174px]"
          style={{ zIndex: 1 }}
        />
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-between px-4 md:px-10 py-4 md:py-5 max-w-[1440px] mx-auto" style={{ zIndex: 2 }}>

        {/* Left — greeting */}
        <div className="flex flex-col">
          <h1 className="text-xl md:text-[40px] font-bold text-[#573728] leading-tight">
            Good day, {userName}!
          </h1>
          <p className="text-sm md:text-[20px] font-medium text-[#573728]">
            Find your perfect coffee
          </p>
        </div>

        {/* Desktop nav — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-[#744530] font-bold text-lg lg:text-2xl hover:opacity-70 transition"
              style={{
                textDecoration: location.pathname === to ? 'underline' : 'none',
                textUnderlineOffset: '4px',
              }}
            >
              {label}
            </Link>
          ))}
          <img
            src={assetUrl('/profile.png')}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
            onClick={() => navigate('/profile')}
          />
        </nav>

        {/* Mobile — profile + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <img
            src={assetUrl('/profile.png')}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover cursor-pointer"
            onClick={() => navigate('/profile')}
          />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 p-1"
          >
            <span className={`block w-6 h-0.5 bg-[#573728] transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#573728] transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#573728] transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute left-0 right-0 flex flex-col items-center gap-4 py-6 px-4"
          style={{ zIndex: 2, background: '#F5ECD7', top: '100%' }}
        >
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="text-[#744530] font-bold text-xl hover:opacity-70 transition w-full text-center py-2 border-b border-[#DBC1B2]"
              style={{
                textDecoration: location.pathname === to ? 'underline' : 'none',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
