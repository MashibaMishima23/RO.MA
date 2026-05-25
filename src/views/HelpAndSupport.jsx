import { useState } from 'react'
import Header from '../components/Header'

const faqs = [
  {
    question: 'How do I place an order through the app?',
    answer:
      "Browse our menu from the Menu tab, tap on any item you'd like to order, and add it to your cart. Once you're ready, proceed to checkout and confirm your order. You'll receive a confirmation once it's been placed.",
  },
  {
    question: 'Can I customize my drink order?',
    answer:
      'Yes! Many of our drinks offer customization options such as sugar level, milk type, and temperature. Look for the customization options on the item detail page before adding to your cart.',
  },
  {
    question: 'What should I do if I have an issue with my order?',
    answer:
      'If you experience any problem with your order, please visit us at the cafe or reach out via the Contacts page. Our team is happy to help resolve any concerns as quickly as possible.',
  },
  {
    question: 'Is my personal information safe?',
    answer:
      'Absolutely. We take your privacy seriously and handle all personal data in accordance with our Privacy Policy. We never share your information with third parties without your consent.',
  },
  {
    question: 'How do I update my account details?',
    answer:
      'You can update your name, email, and other account information from the My Account section in the More menu. Changes are saved automatically.',
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[#F6ECDA]/20">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between py-4 text-left gap-4 hover:opacity-80 transition"
      >
        <span className="text-[#F6ECDA] font-semibold text-sm md:text-base">{question}</span>
        <span className="text-[#F6ECDA] text-xl flex-shrink-0">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <p className="text-[#F6ECDA]/80 text-sm md:text-base leading-relaxed pb-4">
          {answer}
        </p>
      )}
    </div>
  )
}

export default function HelpAndSupport() {
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
          Help &amp; Support
        </p>
      </div>

      {/* Content */}
      <div className="px-6 md:px-16 py-8 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <p className="text-[#F6ECDA] text-base md:text-lg mb-6 leading-relaxed">
          Have questions? We've got answers. Browse the FAQs below or reach out to us directly.
        </p>

        <div className="flex flex-col">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[#F6ECDA]/20 text-[#F6ECDA]">
          <p className="font-semibold text-base md:text-lg mb-1">Still need help?</p>
          <p className="text-sm md:text-base opacity-80">
            Visit us at the cafe or send us a message through the{' '}
            <a href="/contact" className="underline hover:opacity-70 transition">
              Contacts
            </a>{' '}
            page.
          </p>
        </div>
      </div>
    </main>
  )
}

