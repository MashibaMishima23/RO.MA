import { Link } from 'react-router-dom'
import { assetUrl } from '../utils/assetUrl'

const DesktopSignup = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans">

      {/* Full-page background photo */}
      <img
        src={assetUrl('/bg3350-dym-1100h.png')}
        alt="Roma café background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Brown wave overlay at the bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 z-10"
        style={{
          background: '#7B3F1A',
          borderRadius: '60% 60% 0 0 / 40px 40px 0 0',
        }}
      />

      {/* Signup card — right side */}
      <div className="relative z-20 flex min-h-screen items-center justify-end py-12" style={{ paddingRight: '22%' }}>
        <div
          className="relative w-[340px] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Card background image — parchment + cookie */}
          <img
            src={assetUrl('/beigeandgreyelegantaestheticminimalbeautystudiobra3350-cdr-800w.png')}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          {/* Card content */}
          <div className="relative z-10 px-8 pt-8 pb-4 flex flex-col gap-3">

            {/* Heading */}
            <div className="text-center">
              <h1
                className="text-2xl font-bold tracking-wide"
                style={{ fontFamily: 'Cinzel, serif', color: '#3B1F0E' }}
              >
                Create Account
              </h1>
              <p
                className="mt-0.5 text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#5A3A22' }}
              >
                Join us for your daily coffee escape
              </p>
            </div>

            {/* Name input */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7B5C44]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Name"
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border-2 bg-white text-sm outline-none focus:border-[#7B3F1A] transition-colors"
                style={{ borderColor: '#DBC1B2', fontFamily: 'Poppins, sans-serif', color: '#3B1F0E' }}
              />
            </div>

            {/* Email input */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7B5C44]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border-2 bg-white text-sm outline-none focus:border-[#7B3F1A] transition-colors"
                style={{ borderColor: '#DBC1B2', fontFamily: 'Poppins, sans-serif', color: '#3B1F0E' }}
              />
            </div>

            {/* Password input */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7B5C44]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </span>
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border-2 bg-white text-sm outline-none focus:border-[#7B3F1A] transition-colors"
                style={{ borderColor: '#DBC1B2', fontFamily: 'Poppins, sans-serif', color: '#3B1F0E' }}
              />
            </div>

            {/* Confirm Password input */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7B5C44]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </span>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border-2 bg-white text-sm outline-none focus:border-[#7B3F1A] transition-colors"
                style={{ borderColor: '#DBC1B2', fontFamily: 'Poppins, sans-serif', color: '#3B1F0E' }}
              />
            </div>

            {/* Sign Up button */}
            <button
              className="w-full py-3 rounded-full text-sm font-semibold tracking-wide transition-opacity hover:opacity-90 active:opacity-80"
              style={{ background: '#6B2D0E', color: '#FFEABE', fontFamily: 'Poppins, sans-serif' }}
            >
              Sign Up
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px" style={{ background: '#C4A882' }} />
              <span className="text-xs" style={{ color: '#47372A', fontFamily: 'Inter, sans-serif' }}>
                Or log In with
              </span>
              <div className="flex-1 h-px" style={{ background: '#C4A882' }} />
            </div>

            {/* Social buttons */}
            <div className="flex justify-center gap-4">
              {/* Apple */}
              <button
                className="w-[68px] h-[42px] rounded-xl border-2 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors"
                style={{ borderColor: '#DBC1B2' }}
                aria-label="Sign up with Apple"
              >
                <svg width="22" height="26" viewBox="0 0 814 1000" fill="currentColor">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.6-49 192.5-49 30.8 0 108.2 2.6 168.6 71.9zm-174.5-89.3c-27.6-32.7-67.4-56.4-111.5-56.4-5.8 0-11.6.6-17.4 1.3 1.3-6.4 1.9-12.8 1.9-19.8 0-95.1-68.1-174.5-163.2-174.5-94.4 0-163.2 79.4-163.2 174.5 0 6.4.6 12.8 1.9 19.2 5.8-.6 11.6-1.3 17.4-1.3 44.1 0 83.9 23.7 111.5 56.4 27.6 32.7 44.1 75.5 44.1 119.6 0 6.4-.6 12.8-1.9 19.2 5.8-.6 11.6-1.3 17.4-1.3 44.1 0 83.9-23.7 111.5-56.4 27.6-32.7 44.1-75.5 44.1-119.6 0-6.4-.6-12.8-1.9-19.2 5.8.6 11.6 1.3 17.4 1.3z"/>
                </svg>
              </button>

              {/* Google */}
              <button
                className="w-[68px] h-[42px] rounded-xl border-2 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors"
                style={{ borderColor: '#DBC1B2' }}
                aria-label="Sign up with Google"
              >
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </button>
            </div>

            {/* Footer link */}
            <p
              className="text-center text-sm pb-1"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#1A1A1A' }}
            >
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-bold underline"
                style={{ color: '#5D2B00' }}
              >
                Log In
              </Link>
            </p>
          </div>

          {/* Spacer so the cookie at the bottom of the bg image shows through */}
          <div className="relative z-10 h-32" />
        </div>
      </div>
    </div>
  )
}

export default DesktopSignup
