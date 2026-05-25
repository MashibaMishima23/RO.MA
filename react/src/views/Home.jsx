import Header from '../components/Header'

const Home = () => {
  return (
    <main className="bg-[#5E2B00] overflow-hidden">

      {/* Header */}
      <Header userName="habibi<3" />

      {/* Space for header height */}
      <div className="h-[120px] md:h-[212px]" />

      {/* ================= SEC 1 ================= */}
      <section className="relative min-h-[50vh] md:min-h-screen flex items-center justify-center px-4">

        {/* Background wave */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[250px]" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#A66125" />
          </svg>
        </div>

        {/* Left image — matcha */}
        <img
          src="/matcha latte.png"
          alt="Matcha Latte"
          className="absolute left-0 z-20 w-[32%] max-w-[160px] bottom-[28%]
                     md:max-w-[380px] md:bottom-8
                     lg:max-w-[500px]"
        />

        {/* Right image — waffle */}
        <img
          src="/almond nutella waffle.png"
          alt="Almond Waffle"
          className="absolute right-0 z-20 w-[32%] max-w-[160px] bottom-[34%]
                     md:max-w-[380px] md:bottom-28
                     lg:max-w-[500px]"
        />

        {/* Card */}
        <div
          className="bg-[#FFE3B1] rounded-3xl z-10 text-center shadow-lg
            w-[80%] px-5 py-7
            sm:w-[65%] sm:px-8 sm:py-10
            md:w-[55%] md:px-10 md:py-12
            lg:max-w-[900px] lg:px-16 lg:py-16"
          style={{ marginTop: '-60px' }}
        >
          <h1 className="font-black text-[#573728] font-serif
            text-2xl sm:text-4xl md:text-5xl lg:text-7xl
            mb-3 lg:mb-8">
            Today's Specials
          </h1>
          <div className="mb-4 lg:mb-10">
            <h2 className="text-[#573728] font-semibold
              text-sm sm:text-xl md:text-2xl lg:text-5xl mb-1">
              Almond Nutella Waffle
            </h2>
            <p className="text-[#573728] font-semibold text-sm sm:text-xl md:text-2xl lg:text-4xl">&amp;</p>
            <h2 className="text-[#573728] font-semibold
              text-sm sm:text-xl md:text-2xl lg:text-5xl mt-1">
              Matcha Latte
            </h2>
          </div>
          <button className="bg-[#744530] text-white rounded-full hover:opacity-80 transition
            px-5 py-2 text-xs
            sm:px-7 sm:py-2.5 sm:text-base
            md:px-8 md:py-3 md:text-lg
            lg:px-10 lg:py-4 lg:text-2xl">
            View More
          </button>
        </div>
      </section>

      {/* ── Transition: SEC 1 → SEC 2 ── */}

      {/* ================= SEC 2 ================= */}
      <section
        className="relative py-12 md:py-20 px-4 md:px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/paperbg.png')" }}
      >
        {/* BorderDown overlapping from top */}
        <img
          src="/BorderDown.png"
          alt=""
          className="absolute top-0 left-0 w-full z-10"
          style={{ transform: 'translateY(-50%) scaleX(1.1)', transformOrigin: 'top center' }}
        />

        <h1 className="text-center font-black text-[#573728] mb-8 md:mb-16
          text-2xl sm:text-3xl md:text-5xl"
          style={{ fontFamily: 'Cinzel, serif' }}>
          Signature Drinks
        </h1>

        <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-10 max-w-7xl mx-auto">
          {[
            {
              title: 'Caramel Popcorn Latte',
              img: '/caramelpopcornlatte (1).png',
              bg: '/caramelPopcornLattebg.png',
              desc: 'A delightful blend of coffee and sweet caramel popcorn.',
            },
            {
              title: 'Pistachio Latte',
              img: '/pistaciolatte (1).png',
              bg: '/pistaciobg.png',
              desc: 'Creamy Pistachio goodness in every sip.',
            },
            {
              title: 'Turon Latte',
              img: '/turonlatte (1).png',
              bg: '/turonlattebg.png',
              desc: 'Coffee with a Filipino twist topped with crispy turon.',
            },
          ].map((drink, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <h2 className="font-semibold text-[#573728] mb-2 md:mb-5
                text-xs sm:text-base md:text-2xl lg:text-3xl leading-tight">
                {drink.title}
              </h2>
              <div className="relative w-full aspect-square max-w-[120px] sm:max-w-[200px] md:max-w-[320px] mb-2 md:mb-6">
                <img src={drink.bg} alt="" aria-hidden="true"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] object-contain" />
                <img src={drink.img} alt={drink.title}
                  className="relative z-10 w-full h-full object-contain" />
              </div>
              <p className="text-[#573728] mb-2 md:mb-6
                text-xs sm:text-sm md:text-lg hidden sm:block">
                {drink.desc}
              </p>
              <button className="bg-[#744530] text-white rounded
                px-3 py-1 text-xs
                sm:px-5 sm:py-2 sm:text-sm
                md:px-8 md:py-3 md:text-base">
                Try Now
              </button>
    </div>
          ))}
        </div>
      </section>

      {/* ── Transition: SEC 2 → SEC 3 ── */}

      {/* ================= SEC 3 ================= */}
      <section className="relative bg-[#5E2B00]">
        <img
          src="/BorderDown.png"
          alt=""
          className="absolute top-0 left-0 w-full z-10"
          style={{ transform: 'translateY(-50%) scaleX(1.1)', transformOrigin: 'top center' }}
        />

        {/* --- Block 1: Pistachio Waffle --- */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 px-6 py-16 md:py-24 bg-cover bg-center"
          style={{ backgroundImage: "url('/tornpaperbg.png')" }}
        >
          <img
            src="/pistaciowaffle (1).png"
            alt="Pistachio Waffle"
            className="w-[40%] max-w-[160px] md:max-w-[400px] flex-shrink-0"
          />
          <div className="text-center -mt-6 md:mt-0">
            <h1 className="text-[#FFE3B1] font-semibold mb-3 md:mb-6 text-2xl sm:text-3xl md:text-5xl">
              Pistachio Waffle
            </h1>
            <p className="text-[#FFE3B1] mb-4 md:mb-8 text-sm sm:text-base md:text-2xl">
              Soft waffle with pistachio cream &amp; toppings
            </p>
            <button className="bg-[#FFE3B1] text-[#744530] rounded border-2 border-[#744530] px-5 py-2 text-sm md:px-8 md:py-3 md:text-base hover:bg-[#744530] hover:text-[#FFE3B1] transition">
              Buy Now
            </button>
          </div>
        </div>

        {/* --- Block 2: Kani Salad --- */}
        <div
          className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-16 px-6 py-16 md:py-24 bg-cover bg-center"
          style={{ backgroundImage: "url('/tornpaperbg.png')" }}
        >
          <div className="text-center -mt-6 md:mt-0">
            <h1 className="text-[#FFE3B1] font-semibold mb-3 md:mb-6 text-2xl sm:text-3xl md:text-5xl">
              Kani Salad
            </h1>
            <p className="text-[#FFE3B1] mb-4 md:mb-8 text-sm sm:text-base md:text-2xl">
              Crisp veggies in creamy dressing topped with vibrant roe.
            </p>
            <button className="bg-[#FFE3B1] text-[#744530] rounded border-2 border-[#744530] px-5 py-2 text-sm md:px-8 md:py-3 md:text-base hover:bg-[#744530] hover:text-[#FFE3B1] transition">
              Buy Now
            </button>
          </div>
          <img
            src="/kanisalad.png"
            alt="Kani Salad"
            className="w-[40%] max-w-[160px] md:max-w-[450px] flex-shrink-0"
          />
        </div>
      </section>

    </main>
  )
}

export default Home

