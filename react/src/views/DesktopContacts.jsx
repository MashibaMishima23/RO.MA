import Header from '../components/Header'

export default function DesktopContacts() {
  return (
    <main className="bg-[#5E2B00] min-h-screen overflow-hidden">
      <Header userName="habibi<3" />

      <div className="h-[120px] md:h-[212px]" />

      {/* Vector 25 flipped — wave banner */}
      <div className="relative w-full">
        <img
          src="/Vector 25.svg"
          alt=""
          className="w-full block"
          style={{ transform: 'scaleY(-1)' }}
        />
        <p
          className="absolute inset-0 flex items-center justify-center text-2xl md:text-3xl font-bold text-[#3B1F0E]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Contact Us
        </p>
      </div>

      {/* Contact info */}
      <div className="px-6 md:px-16 py-10 max-w-3xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>

        <p className="text-[#F6ECDA] text-base md:text-lg leading-relaxed mb-10">
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hello — reach out to us through any of the channels below.
        </p>

        <div className="flex flex-col gap-8">

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#F6ECDA">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/>
              </svg>
            </div>
            <div>
              <p className="text-[#F6ECDA] font-bold text-base md:text-lg">Phone</p>
              <p className="text-[#F6ECDA] opacity-80 text-sm md:text-base">+63 912 345 6789</p>
              <p className="text-[#F6ECDA] opacity-80 text-sm md:text-base">+63 998 765 4321</p>
            </div>
          </div>

          <div className="w-full h-px bg-[#F6ECDA]/20" />

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#F6ECDA">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div>
              <p className="text-[#F6ECDA] font-bold text-base md:text-lg">Email</p>
              <p className="text-[#F6ECDA] opacity-80 text-sm md:text-base">hello@romacafe.ph</p>
              <p className="text-[#F6ECDA] opacity-80 text-sm md:text-base">support@romacafe.ph</p>
            </div>
          </div>

          <div className="w-full h-px bg-[#F6ECDA]/20" />

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#F6ECDA">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div>
              <p className="text-[#F6ECDA] font-bold text-base md:text-lg">Address</p>
              <p className="text-[#F6ECDA] opacity-80 text-sm md:text-base">123 Coffee Street</p>
              <p className="text-[#F6ECDA] opacity-80 text-sm md:text-base">Gingoog City, Misamis Oriental</p>
              <p className="text-[#F6ECDA] opacity-80 text-sm md:text-base">Philippines</p>
            </div>
          </div>

          <div className="w-full h-px bg-[#F6ECDA]/20" />

          {/* Hours */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F6ECDA" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <p className="text-[#F6ECDA] font-bold text-base md:text-lg">Opening Hours</p>
              <p className="text-[#F6ECDA] opacity-80 text-sm md:text-base">Monday – Friday: 7:00 AM – 9:00 PM</p>
              <p className="text-[#F6ECDA] opacity-80 text-sm md:text-base">Saturday – Sunday: 8:00 AM – 10:00 PM</p>
            </div>
          </div>

          <div className="w-full h-px bg-[#F6ECDA]/20" />

          {/* Social */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#F6ECDA">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
              </svg>
            </div>
            <div>
              <p className="text-[#F6ECDA] font-bold text-base md:text-lg">Follow Us</p>
              <p className="text-[#F6ECDA] opacity-80 text-sm md:text-base">Facebook: RO.MA Cafe Gingoog</p>
              <p className="text-[#F6ECDA] opacity-80 text-sm md:text-base">Instagram: @romacafe.gingoog</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

