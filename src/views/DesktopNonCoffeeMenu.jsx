import Header from '../components/Header'

const drinkPairs = [
  {
    name: 'Milk Choco',
    hot:  { img: '/hotmilkchoco.png',  price: 'P120' },
    iced: { img: '/icedmilkchoco.png', price: 'P135' },
  },
  {
    name: 'Matcha',
    hot:  { img: '/hotmatcha.png',     price: 'P140' },
    iced: { img: '/icedmatcha.png',    price: 'P155' },
  },
  {
    name: 'Honey Tea',
    hot:  { img: '/hothoneytea.png',   price: 'P110' },
    iced: { img: '/icedhoneytea.png',  price: 'P125' },
  },
]

function DrinkCard({ label, img, price }) {
  return (
    <div className="rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-lg">
      <div className="w-full aspect-square overflow-hidden">
        <img src={img} alt={label} className="w-full h-full object-cover" />
      </div>
      <div className="px-4 pt-3 pb-4 text-center" style={{ background: '#FFE9B0' }}>
        <p className="text-base md:text-lg font-semibold text-[#3B1F0E]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {label}
        </p>
        <p className="text-xl md:text-2xl font-bold text-[#3B1F0E] mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {price}
        </p>
      </div>
    </div>
  )
}

export default function DesktopNonCoffeeMenu() {
  return (
    <div className="relative min-h-screen w-full bg-[#5E2B00]">
      <Header userName="habibi<3" />

      <div className="h-[120px] md:h-[212px]" />

      {/* Page heading */}
      <div className="px-6 md:px-12 pt-8 pb-4">
        <h1
          className="text-3xl md:text-5xl font-bold text-[#FFE3B1] text-center"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Non Coffee
        </h1>
        <p
          className="text-center text-[#DBC1B2] mt-2 text-base md:text-lg"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Warm up or cool down — no coffee needed
        </p>
      </div>

      {/* Drink pairs */}
      <main className="px-6 md:px-12 py-8">
        <div className="flex flex-col gap-10 max-w-3xl mx-auto">
          {drinkPairs.map(({ name, hot, iced }) => (
            <div key={name}>
              {/* Pair label */}
              <h2
                className="text-xl md:text-2xl font-bold text-[#FFE3B1] mb-4"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {name}
              </h2>
              {/* Hot + Iced side by side */}
              <div className="grid grid-cols-2 gap-4">
                <DrinkCard label={`Hot 16oz`} img={hot.img} price={hot.price} />
                <DrinkCard label={`Iced 16oz`} img={iced.img} price={iced.price} />
              </div>
    </div>
          ))}
        </div>
      </main>
    </div>
  )
}

