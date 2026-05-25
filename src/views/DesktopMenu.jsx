import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { assetUrl } from '../utils/assetUrl'

const categories = [
  { label: 'Non Coffee',  img: assetUrl('/nonCoffee.png'),      to: '/menu/non-coffee' },
  { label: 'Coffee',      img: assetUrl('/coffee (2).png'),      to: '/menu/coffee' },
  { label: 'Cold Drinks', img: assetUrl('/coldDrinks (1).png'),  to: '/menu/cold-drinks' },
  { label: 'Foods',       img: assetUrl('/Foods (1).png'),       to: '/menu/foods' },
]

export default function DesktopMenu() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen w-full bg-[#5E2B00]">
      <Header userName="habibi<3" />

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
          className="absolute inset-0 flex items-center justify-center text-sm sm:text-xl md:text-3xl font-semibold text-[#3B1F0E] px-4 text-center"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Explore our delicious coffee &amp; treats
        </p>
      </div>

      {/* Category items with hanging lamps */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-8 pb-16 pt-6 max-w-7xl mx-auto">
        {categories.map(({ label, img, to }) => (
          <div key={label} className="flex flex-col items-center w-full">

            {/* Lamp */}
            <img
              src={assetUrl('/lightlamp (1).png')}
              alt=""
              aria-hidden="true"
              className="w-36 object-contain"
              style={{ marginBottom: '-80px', position: 'relative', zIndex: 30 }}
            />

            {/* Light ray + image */}
            <div className="relative flex flex-col items-center w-full">
              <img
                src={assetUrl('/lightray.png')}
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                style={{ width: '460px', mixBlendMode: 'screen', top: '40px' }}
              />
              <img
                src={img}
                alt={label}
                onClick={() => navigate(to)}
                className="relative z-10 w-[260px] h-[260px] object-contain cursor-pointer hover:scale-105 transition-transform drop-shadow-xl mt-36"
              />
              <span
                className="relative z-10 mt-3 text-white text-2xl font-bold text-center"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
