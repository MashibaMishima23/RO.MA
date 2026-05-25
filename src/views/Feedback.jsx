import { useState } from 'react'
import Header from '../components/Header'

export default function Feedback() {
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (message.trim()) {
      setSubmitted(true)
      setMessage('')
    }
  }

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
          Feedback
        </p>
      </div>

      {/* Content */}
      <div className="px-6 md:px-16 py-8 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {submitted ? (
          <div className="text-[#F6ECDA] text-center py-10">
            <p className="text-xl font-semibold mb-2">Thank you for your feedback!</p>
            <p className="text-base opacity-80">We appreciate you taking the time to share your thoughts.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 px-8 py-3 bg-[#6B2D0E] text-white rounded-full font-semibold text-base hover:opacity-90 transition"
            >
              Send Another
            </button>
    </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <p className="text-[#F6ECDA] text-base md:text-lg leading-relaxed">
              We'd love to hear from you! Share your experience, suggestions, or any concerns
              about RO.MA Cafe.
            </p>

            <div className="flex flex-col gap-2">
              <label className="text-[#F6ECDA] font-semibold text-sm md:text-base" htmlFor="feedback-name">
                Name (optional)
              </label>
              <input
                id="feedback-name"
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-[#3B1F0E] text-[#F6ECDA] placeholder-[#F6ECDA]/40 border border-[#F6ECDA]/20 focus:outline-none focus:border-[#F6ECDA]/60 text-sm md:text-base"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#F6ECDA] font-semibold text-sm md:text-base" htmlFor="feedback-message">
                Your Feedback
              </label>
              <textarea
                id="feedback-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you think..."
                rows={6}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#3B1F0E] text-[#F6ECDA] placeholder-[#F6ECDA]/40 border border-[#F6ECDA]/20 focus:outline-none focus:border-[#F6ECDA]/60 text-sm md:text-base resize-none"
              />
            </div>

            <button
              type="submit"
              className="self-center px-10 py-3 bg-[#6B2D0E] text-white rounded-full font-semibold text-base hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </main>
  )
}

