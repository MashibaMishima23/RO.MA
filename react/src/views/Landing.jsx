import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/landingbg.jpg')" }}
    >
      {/* brown blur overlay */}
      <div className="absolute inset-0 bg-[#5c3b2e]/50 backdrop-blur-sm"></div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-white text-center px-4">

        {/* logo */}
        <img
          src="/romalogo.png"
          alt="RO.MA Logo"
          className="w-32 h-32 lg:w-80 lg:h-80 object-contain drop-shadow-lg"
        />

        {/* get started button */}
        <Link
          to="/create"
          className="mt-4 w-full lg:w-auto px-12 py-3 bg-[#7a4b2c] text-white text-lg font-semibold rounded-full hover:bg-[#5c3b2e] transition shadow-lg text-center"
        >
          Get Started
        </Link>

        {/* login link */}
        <p className="text-sm text-white/80">
          Already have an account?{' '}
          <Link to="/login" className="text-white font-semibold underline hover:text-[#f3e6d6] transition">
            Log In
          </Link>
        </p>
      </div>
    </div>
  )
}
