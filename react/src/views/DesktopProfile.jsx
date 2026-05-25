import Header from '../components/Header'

const user = {
  firstName: 'habibi<3',
  lastName: 'Smith',
  email: 'habibi<3@gmail.com',
  phone: '1922-888-082',
  dob: '2000-10',
}

export default function DesktopContact() {
  return (
    <main className="bg-[#5E2B00] min-h-screen relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Header userName="habibi<3" />

      {/* Space for absolute header */}
      <div className="h-[120px] md:h-[212px]" />

      <div className="px-8 md:px-16 py-12">

        {/* Greeting */}
        <h1
          className="text-4xl md:text-6xl font-black text-[#F6ECDA] mb-12"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Good Day, {user.firstName}!
        </h1>

        {/* Personal Details */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">

          {/* Left column */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-black text-[#F6ECDA] mb-2">Personal Details</h2>

            <div>
              <p className="text-sm text-[#F6ECDA] opacity-70">First name</p>
              <p className="text-xl font-bold text-[#F6ECDA]">{user.firstName}</p>
            </div>
            <div>
              <p className="text-sm text-[#F6ECDA] opacity-70">Last name</p>
              <p className="text-xl font-bold text-[#F6ECDA]">{user.lastName}</p>
            </div>
            <div>
              <p className="text-sm text-[#F6ECDA] opacity-70">Email</p>
              <p className="text-xl font-bold text-[#F6ECDA]">{user.email}</p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6 md:pt-12">
            <div>
              <p className="text-sm text-[#F6ECDA] opacity-70">Phone-Num</p>
              <p className="text-xl font-bold text-[#F6ECDA]">{user.phone}</p>
            </div>
            <div>
              <p className="text-sm text-[#F6ECDA] opacity-70">Date of Birth</p>
              <p className="text-xl font-bold text-[#F6ECDA]">{user.dob}</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

