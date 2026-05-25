import Header from '../components/Header'

export default function AboutUs() {
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
          About Us
        </p>
      </div>

      {/* Content */}
      <div className="px-6 md:px-16 py-8 max-w-3xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="flex flex-col gap-5 text-[#F6ECDA]">

          <p className="text-base md:text-lg leading-relaxed">
            Welcome to Roma Café, where every cup tells a story. We are passionate about crafting high-quality coffee and creating a warm, inviting space where people can relax, connect, and enjoy life's simple pleasures.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            At Roma Café, we carefully select premium coffee beans and blend them with skill and creativity to deliver rich, flavorful drinks. Whether you're starting your day with a strong espresso or unwinding with a smooth latte, we aim to make every visit memorable.
          </p>

          <div className="mt-2">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-base md:text-lg leading-relaxed pl-4">
              To serve exceptional coffee while creating a welcoming environment for everyone.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Our Vision</h2>
            <p className="text-base md:text-lg leading-relaxed pl-4">
              To become a go-to destination for coffee lovers who value quality, comfort, and connection.
            </p>
          </div>

        </div>
      </div>
    </main>
  )
}

