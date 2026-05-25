import Header from '../components/Header'

export default function CafeLocation() {
  return (
    <main className="bg-[#5E2B00] min-h-screen overflow-hidden">
      <Header userName="habibi<3" />

      <div className="h-[120px] md:h-[212px]" />

      {/* Wave banner */}
      <div className="relative w-full">
        <img src="/Vector 25.svg" alt="" className="w-full block" style={{ transform: 'scaleY(-1)' }} />
        <p
          className="absolute inset-0 flex items-center justify-center text-2xl md:text-3xl font-bold text-[#3B1F0E]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Cafe Location
        </p>
      </div>

      {/* Content */}
      <div className="px-6 md:px-16 py-8 max-w-5xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Map image */}
          <div className="w-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/Location (1).png"
              alt="Cafe Location Map"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text info */}
          <div className="flex flex-col gap-4 text-[#F6ECDA]">
            <h2 className="text-xl md:text-2xl font-bold">RO.MA Cafe</h2>
            <p className="text-base md:text-lg">123 Coffee Street</p>
            <p className="text-base md:text-lg">Gingoog City, Misamis Oriental</p>
            <p className="text-base md:text-lg">Philippines</p>

            <div className="mt-4 pt-4 border-t border-[#F6ECDA]/20">
              <p className="text-sm md:text-base font-semibold mb-1">Opening Hours</p>
              <p className="text-sm md:text-base">Monday – Friday: 7:00 AM – 9:00 PM</p>
              <p className="text-sm md:text-base">Saturday – Sunday: 8:00 AM – 10:00 PM</p>
            </div>

            <div className="mt-4 pt-4 border-t border-[#F6ECDA]/20">
              <p className="text-sm md:text-base font-semibold mb-1">Contact</p>
              <p className="text-sm md:text-base">📞 +63 912 345 6789</p>
              <p className="text-sm md:text-base">✉️ hello@romacafe.ph</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

