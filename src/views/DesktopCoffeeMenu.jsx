import Header from '../components/Header'

const sections = [
  {
    title: 'Standard Coffee',
    items: [
      { name: 'Americano',     img: '/AmericanoCoffee.jpg',   hotPrice: 'P90',  icedPrice: 'P100' },
      { name: 'Coffee Latte',  img: '/CafeLatteCoffee.jpg',   hotPrice: 'P110', icedPrice: 'P120' },
      { name: 'Cappuccino',    img: '/CappucinoCoffee.jpg',   hotPrice: 'P110', icedPrice: 'P120' },
    ],
  },
  {
    title: 'Flavored Latte',
    items: [
      { name: 'Cafe Mocha',          img: '/CafeMochaFlavoredCoffee.jpg',        hotPrice: 'P130', icedPrice: 'P140' },
      { name: 'Caramel Macchiato',   img: '/CaramelMacchiatoFlavoredCoffee.jpg', hotPrice: 'P130', icedPrice: 'P140' },
      { name: 'Creme Brulee',        img: '/CremeBruleeFlavoredCoffee.jpg',      hotPrice: 'P130', icedPrice: 'P140' },
      { name: 'Hazelnut',            img: '/HazelNutFlavoredCoffee.jpg',         hotPrice: 'P130', icedPrice: 'P140' },
      { name: 'Pandan Coconut',      img: '/PandanCoconutFlavoredCoffee.jpg',    hotPrice: 'P130', icedPrice: 'P140' },
      { name: 'Salted Caramel',      img: '/SaltedCaramelFlavoredCoffee.jpg',    hotPrice: 'P130', icedPrice: 'P140' },
      { name: 'Spanish Latte',       img: '/SpanishLatteFlavoredCoffee.jpg',     hotPrice: 'P130', icedPrice: 'P140' },
    ],
  },
  {
    title: 'Signature Latte',
    items: [
      { name: 'Caramel Popcorn Latte', img: '/caramelpopcornlatte (1).png', hotPrice: 'P150', icedPrice: 'P160' },
      { name: 'Pistachio Latte',       img: '/pistaciolatte (1).png',       hotPrice: 'P150', icedPrice: 'P160' },
      { name: 'Turon Latte',           img: '/turonlatte (1).png',          hotPrice: 'P150', icedPrice: 'P160' },
    ],
  },
]

function CoffeeCard({ name, img, hotPrice, icedPrice }) {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer"
      style={{ background: '#FFE9B0' }}
    >
      {/* Image */}
      <div className="w-full aspect-square overflow-hidden bg-[#3B1F0E]">
        {img ? (
          <img src={img} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[#F6ECDA] text-sm opacity-50" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {name}
            </span>
    </div>
        )}
      </div>

      {/* Info */}
      <div className="px-3 pt-3 pb-4 text-center">
        <p
          className="font-bold text-sm md:text-base text-[#3B1F0E] leading-tight mb-2"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {name}
        </p>
        <div className="flex justify-center gap-4 text-xs md:text-sm text-[#3B1F0E]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <span>🔥 Hot {hotPrice}</span>
          <span>🧊 Iced {icedPrice}</span>
        </div>
      </div>
    </div>
  )
}

export default function DesktopCoffeeMenu() {
  return (
    <div className="relative min-h-screen w-full bg-[#5E2B00]">
      <Header userName="habibi<3" />

      <div className="h-[120px] md:h-[212px]" />

      {/* Page heading */}
      <div className="px-6 md:px-12 pt-8 pb-4 text-center">
        <h1
          className="text-3xl md:text-5xl font-bold text-[#FFE3B1]"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Coffee
        </h1>
        <p
          className="text-[#DBC1B2] mt-2 text-base md:text-lg"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Crafted with care, served with love
        </p>
      </div>

      {/* Sections */}
      <main className="px-6 md:px-12 py-8">
        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {sections.map(({ title, items }) => (
            <div key={title}>
              <h2
                className="text-xl md:text-3xl font-bold text-[#FFE3B1] mb-5 pb-2 border-b border-[#F6ECDA]/20"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {title}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                  <CoffeeCard key={item.name} {...item} />
                ))}
              </div>
    </div>
          ))}
        </div>
      </main>
    </div>
  )
}

