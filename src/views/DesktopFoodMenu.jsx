import Header from '../components/Header'

const sections = [
  {
    title: 'Pasta',
    items: [
      { name: 'Carbonara', img: '/carbonara.jpg', price: 'P180' },
    ],
  },
  {
    title: 'Waffle',
    items: [
      { name: 'Plain Waffle',          img: '/PlainWaffleFood.jpg',    price: 'P120' },
      { name: 'Caramel Banana Waffle', img: '/CaramelBananaFood.jpg',  price: 'P150' },
      { name: 'Almond Nutella Waffle', img: '/almondNutellaFood.jpg',  price: 'P155' },
      { name: 'Pistachio Waffle',      img: '/pistachioFood.jpg',      price: 'P160' },
    ],
  },
  {
    title: 'Meal',
    items: [
      { name: 'Kani Salad',  img: '/KaniSaladFood.jpg',  price: 'P170' },
      { name: 'Spicy Ramen', img: '/SpicyRamenFood.jpg', price: 'P190' },
    ],
  },
]

function FoodCard({ name, img, price }) {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer"
      style={{ background: '#FFE9B0' }}
    >
      {/* Image */}
      <div className="w-full aspect-square overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Info */}
      <div className="px-3 pt-3 pb-4 text-center">
        <p
          className="font-bold text-sm md:text-base text-[#3B1F0E] leading-tight mb-1"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {name}
        </p>
        <p
          className="text-lg md:text-xl font-bold text-[#3B1F0E]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {price}
        </p>
      </div>
    </div>
  )
}

export default function DesktopFoodMenu() {
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
          Foods
        </h1>
        <p
          className="text-[#DBC1B2] mt-2 text-base md:text-lg"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Delicious bites to go with your coffee
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
                  <FoodCard key={item.name} {...item} />
                ))}
              </div>
    </div>
          ))}
        </div>
      </main>
    </div>
  )
}

