import Header from '../components/Header'

const terms = [
  {
    title: '1. General Policy',
    body: 'By entering and placing an order at our café, customers agree to follow these terms and conditions. Management reserves the right to update policies at any time.',
  },
  {
    title: '2. Orders and Payments',
    points: [
      'All orders must be paid in full before preparation unless otherwise stated.',
      'We accept cash and selected digital payment methods.',
      'Prices are subject to change without prior notice.',
    ],
  },
  {
    title: '3. Food and Beverage Policy',
    points: [
      'Outside food and drinks are not allowed unless permitted by staff.',
      'Customers must inform staff of any allergies before ordering.',
      'The café is not responsible for allergic reactions if not disclosed.',
    ],
  },
  {
    title: '4. Dine-In Rules',
    points: [
      'Please respect other customers by keeping noise levels moderate.',
      'Seating may be limited during peak hours; sharing tables may be required.',
      'Loitering without purchase is discouraged.',
    ],
  },
  {
    title: '5. Reservation Policy',
    points: [
      'Reservations must be made in advance and confirmed by staff.',
      'The café may release reserved tables after a 15-minute delay.',
    ],
  },
  {
    title: '6. Takeaway and Delivery',
    points: [
      'Ensure order details are correct before leaving the counter.',
      'The café is not responsible for damages once orders leave the premises.',
    ],
  },
  {
    title: '7. Refunds and Complaints',
    points: [
      'Refunds or replacements are only provided for incorrect or defective orders.',
      'Complaints must be raised immediately with proof of purchase.',
    ],
  },
  {
    title: '8. Customer Conduct',
    points: [
      'Respectful behavior towards staff and other customers is required.',
      'The café reserves the right to refuse service to anyone causing disturbance.',
    ],
  },
  {
    title: '9. Safety and Liability',
    points: [
      'Customers are responsible for their personal belongings.',
      'The café is not liable for any loss, theft, or injury unless caused by negligence.',
    ],
  },
  {
    title: '10. Cleanliness and Environment',
    points: [
      'Please dispose of trash properly.',
      'Help us maintain a clean and comfortable environment.',
    ],
  },
]

export default function Terms() {
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
          Terms &amp; Conditions
        </p>
      </div>

      {/* Content */}
      <div className="px-6 md:px-16 py-8 max-w-3xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <ul className="flex flex-col gap-6">
          {terms.map(({ title, body, points }) => (
            <li key={title} className="text-[#F6ECDA]">
              <p className="font-bold text-base md:text-lg mb-2">{title}</p>
              {body && <p className="text-sm md:text-base leading-relaxed opacity-90 pl-2">{body}</p>}
              {points && (
                <ul className="flex flex-col gap-1 pl-4">
                  {points.map((p, i) => (
                    <li key={i} className="text-sm md:text-base leading-relaxed opacity-90 list-disc list-inside">
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

