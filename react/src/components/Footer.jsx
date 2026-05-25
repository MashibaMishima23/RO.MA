import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer
      className="w-full bg-[#3B1A0A] text-[#F6ECDA] pt-12 pb-6 px-6 md:px-16"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <img src="/romalogo.png" alt="RO.MA Cafe" className="w-20 h-20 object-contain" />
            <p className="text-sm opacity-80 leading-relaxed">
              A cozy coffee shop in the heart of Gingoog City. Every cup tells a story.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-base mb-1 text-[#C47E2E]">Quick Links</h3>
            {[
              { label: 'Home', to: '/dashboard' },
              { label: 'Menu', to: '/menu' },
              { label: 'Contact', to: '/contact' },
              { label: 'About Us', to: '/about' },
            ].map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-sm opacity-80 hover:opacity-100 hover:text-[#C47E2E] transition"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-base mb-1 text-[#C47E2E]">Contact</h3>
            <p className="text-sm opacity-80">📍 123 Coffee Street, Gingoog City</p>
            <p className="text-sm opacity-80">📞 +63 912 345 6789</p>
            <p className="text-sm opacity-80">✉️ hello@romacafe.ph</p>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-base mb-1 text-[#C47E2E]">Opening Hours</h3>
            <p className="text-sm opacity-80">Mon – Fri: 7:00 AM – 9:00 PM</p>
            <p className="text-sm opacity-80">Sat – Sun: 8:00 AM – 10:00 PM</p>
            <div className="flex gap-4 mt-2">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="opacity-80 hover:opacity-100 hover:text-[#C47E2E] transition">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="opacity-80 hover:opacity-100 hover:text-[#C47E2E] transition">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#F6ECDA]/20 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-60">
          <p>© {new Date().getFullYear()} RO.MA Cafe. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:opacity-100 transition">Terms & Conditions</Link>
            <Link to="/contact" className="hover:opacity-100 transition">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
