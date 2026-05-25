import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { assetUrl } from '../utils/assetUrl'

const menuItems = [
  {
    label: 'My account',
    to: '/profile',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#F6ECDA">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
      </svg>
    ),
  },
  {
    label: 'Cafe Location',
    to: '/cafe',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#F6ECDA">
        <ellipse cx="12" cy="12" rx="8" ry="4"/>
      </svg>
    ),
  },
  {
    label: 'About Us',
    to: '/about',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F6ECDA" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="8" strokeLinecap="round" strokeWidth="3"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
      </svg>
    ),
  },
  {
    label: 'Terms & Conditions',
    to: '/terms',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F6ECDA" strokeWidth="2">
        <rect x="4" y="2" width="16" height="20" rx="2"/>
        <line x1="8" y1="7" x2="16" y2="7"/>
        <line x1="8" y1="11" x2="16" y2="11"/>
        <line x1="8" y1="15" x2="13" y2="15"/>
        <circle cx="17" cy="17" r="3" fill="#F6ECDA" stroke="none"/>
        <path d="M16 17l1 1 2-2" stroke="#5E2B00" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Feedback',
    to: '/feedback',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F6ECDA" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="8" strokeLinecap="round" strokeWidth="3"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
      </svg>
    ),
  },
  {
    label: 'Help & Support',
    to: '/help',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F6ECDA" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <circle cx="12" cy="17" r="0.5" fill="#F6ECDA"/>
      </svg>
    ),
  },
]

export default function DesktopMore() {
  const navigate = useNavigate()

  return (
    <main className="bg-[#5E2B00] min-h-screen overflow-hidden">
      <Header userName="habibi<3" />

      {/* Space for absolute header */}
      <div className="h-[120px] md:h-[212px]" />

      {/* Vector 25 flipped — wave banner */}
      <div className="relative w-full">
        <img
          src={assetUrl('/Vector 25.svg')}
          alt=""
          className="w-full block"
          style={{ transform: 'scaleY(-1)' }}
        />
        <p
          className="absolute inset-0 flex items-center justify-center text-2xl md:text-3xl font-bold text-[#3B1F0E]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          More
        </p>
      </div>

      {/* Menu list */}
      <div className="px-6 md:px-16 py-6 max-w-2xl mx-auto">
        {menuItems.map(({ label, to, icon }, index) => (
          <div key={label}>
            <button
              onClick={() => navigate(to)}
              className="w-full flex items-center gap-5 py-5 text-left hover:opacity-80 transition"
            >
              <span className="flex-shrink-0">{icon}</span>
              <span
                className="text-[#F6ECDA] text-lg md:text-xl font-semibold"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {label}
              </span>
            </button>
            {index < menuItems.length - 1 && (
              <div className="w-full h-px" style={{ background: 'rgba(246,236,218,0.2)' }} />
            )}
    </div>
        ))}
      </div>
    </main>
  )
}

